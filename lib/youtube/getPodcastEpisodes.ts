import { cache } from "react";
import type { YouTubeEpisode, YouTubePlaylistItemsResponse, YouTubePlaylistResult } from "./types";

const API_BASE = "https://www.googleapis.com/youtube/v3/playlistItems";
const MAX_RESULTS_PER_PAGE = 50;
/** Hard ceiling on pagination so a misbehaving API response can never loop forever. */
const MAX_PAGES = 20;
/** How long a successful response stays cached before Next.js re-fetches it. */
const REVALIDATE_SECONDS = 3600;

const PRIVATE_OR_DELETED_TITLES = new Set(["Private video", "Deleted video"]);

type RawPlaylistItem = NonNullable<YouTubePlaylistItemsResponse["items"]>[number];

function toEpisodeCandidate(item: RawPlaylistItem) {
  const videoId = item.snippet?.resourceId?.videoId ?? item.contentDetails?.videoId;
  const title = item.snippet?.title;
  const publishedAt = item.contentDetails?.videoPublishedAt ?? item.snippet?.publishedAt;

  if (!videoId || !title || !publishedAt) return null;
  if (PRIVATE_OR_DELETED_TITLES.has(title)) return null;

  return { videoId, title, publishedAt };
}

async function fetchAllPlaylistItems(apiKey: string, playlistId: string) {
  const candidates: { videoId: string; title: string; publishedAt: string }[] = [];
  let pageToken: string | undefined;
  let page = 0;

  do {
    const url = new URL(API_BASE);
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", String(MAX_RESULTS_PER_PAGE));
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const response = await fetch(url.toString(), {
      // Server-side ISR-style caching: episodes are re-fetched at most once
      // per hour, keeping YouTube API quota usage minimal while still
      // picking up new uploads automatically without a code change.
      next: { revalidate: REVALIDATE_SECONDS },
    });

    const data = (await response.json()) as YouTubePlaylistItemsResponse;

    if (!response.ok) {
      const message = data.error?.message ?? `YouTube API request failed with status ${response.status}`;
      throw new Error(message);
    }

    for (const item of data.items ?? []) {
      const candidate = toEpisodeCandidate(item);
      if (candidate) candidates.push(candidate);
    }

    pageToken = data.nextPageToken;
    page += 1;
  } while (pageToken && page < MAX_PAGES);

  return candidates;
}

/**
 * Fetches every episode in the configured YouTube playlist and returns them
 * newest-first, each carrying its correct sequential episode number (oldest
 * upload = Episode 1). Wrapped in React's `cache()` so multiple Server
 * Components rendering in the same request (e.g. the episode list and the
 * "latest episode" embed) share a single underlying fetch — Next.js also
 * independently deduplicates identical `fetch()` calls, so this is a
 * belt-and-suspenders guarantee against redundant API requests.
 *
 * This is the single source of truth for podcast episodes: nothing about
 * the episode list is hardcoded, so new uploads appear automatically after
 * the next cache revalidation with no code changes.
 */
export const getPodcastEpisodes = cache(async (): Promise<YouTubePlaylistResult> => {
  // Trimmed defensively — a stray trailing space/newline from copy-pasting
  // into a dashboard's env var field is a common, hard-to-spot source of
  // "Invalid Value" errors from Google's API.
  const apiKey = process.env.YOUTUBE_API_KEY?.trim();
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID?.trim();

  if (!apiKey || !playlistId) {
    return { status: "not_configured" };
  }

  try {
    const candidates = await fetchAllPlaylistItems(apiKey, playlistId);

    // Oldest-first to assign correct sequential episode numbers...
    const chronological = [...candidates].sort(
      (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
    );

    const numbered: YouTubeEpisode[] = chronological.map((episode, index) => ({
      ...episode,
      episodeNumber: index + 1,
    }));

    // ...then newest-first for display.
    numbered.reverse();

    return { status: "success", episodes: numbered };
  } catch (error) {
    console.error("[podcast] Failed to fetch YouTube playlist:", error);
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Unknown error fetching podcast episodes.",
    };
  }
});
