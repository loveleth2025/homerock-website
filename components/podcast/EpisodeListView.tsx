"use client";

import { useId, useState } from "react";
import type { YouTubeEpisode } from "@/lib/youtube/types";
import { EpisodeRow } from "@/components/podcast/EpisodeRow";

/** How many episodes show before the list needs to be expanded. */
const INITIAL_VISIBLE_COUNT = 8;

/**
 * Client-side "show more" wrapper around the episode grid — keeps a long
 * back catalog from pushing the rest of the page down by default, while
 * still letting every episode be reached with one click (no pagination,
 * no extra network request; all episodes are already on the page).
 */
export function EpisodeListView({ episodes }: { episodes: YouTubeEpisode[] }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  const hasMore = episodes.length > INITIAL_VISIBLE_COUNT;
  const visibleEpisodes = expanded ? episodes : episodes.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = episodes.length - INITIAL_VISIBLE_COUNT;

  return (
    <div>
      <ul id={listId} className="grid grid-cols-2 max-md:grid-cols-1 gap-md">
        {visibleEpisodes.map((episode) => (
          <EpisodeRow key={episode.videoId} episode={episode} />
        ))}
      </ul>

      {hasMore && (
        <div className="mt-lg text-center">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((current) => !current)}
            className="px-lg py-md text-sm font-semibold border border-navy text-navy rounded-xs hover:bg-navy hover:text-white transition-colors"
          >
            {expanded ? "Show Fewer Episodes" : `Show All ${episodes.length} Episodes (+${hiddenCount})`}
          </button>
        </div>
      )}
    </div>
  );
}
