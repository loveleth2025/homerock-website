import { getPodcastEpisodes } from "@/lib/youtube/getPodcastEpisodes";
import { EpisodeListView } from "@/components/podcast/EpisodeListView";
import { EpisodeListEmpty } from "@/components/podcast/EpisodeListEmpty";
import { EpisodeListError } from "@/components/podcast/EpisodeListError";

/**
 * Fully dynamic episode list — YouTube (via the Data API playlist configured
 * in YOUTUBE_PLAYLIST_ID) is the only source of truth. Renders as an async
 * Server Component so it can stream in behind a Suspense boundary without
 * blocking the rest of the podcast page.
 */
export async function EpisodeList() {
  const result = await getPodcastEpisodes();

  if (result.status === "not_configured") {
    return (
      <EpisodeListError detail="YOUTUBE_API_KEY and/or YOUTUBE_PLAYLIST_ID are not set in the environment." />
    );
  }

  if (result.status === "error") {
    return <EpisodeListError detail={result.message} />;
  }

  if (result.episodes.length === 0) {
    return <EpisodeListEmpty />;
  }

  return <EpisodeListView episodes={result.episodes} />;
}
