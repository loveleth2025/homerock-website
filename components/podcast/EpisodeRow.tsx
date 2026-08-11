// components/podcast/EpisodeRow.tsx
// REPLACE the entire existing file with this. Only change: the row is no
// longer a single <a> (which made it impossible to add a second link) --
// it's now a styled <div> containing two sibling links: the original
// YouTube link, and a new "Transcript" link shown only when one exists
// for that episode's number.

import type { YouTubeEpisode } from "@/lib/youtube/types";
import { getYouTubeWatchUrl } from "@/lib/youtube/types";
import { getTranscriptByEpisodeNumber } from "@/lib/content/podcastTranscripts";

export function EpisodeRow({ episode }: { episode: YouTubeEpisode }) {
  const transcript = getTranscriptByEpisodeNumber(episode.episodeNumber);

  return (
    <li>
      <div className="group flex items-center gap-md p-md bg-white border border-gray-light rounded-xs transition-all duration-200 hover:border-gold hover:bg-cream hover:-translate-y-0.5 hover:shadow-brand-md">
        <a
          href={getYouTubeWatchUrl(episode.videoId)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Episode ${episode.episodeNumber}: ${episode.title} (opens on YouTube in a new tab)`}
          className="flex items-center gap-md flex-1 min-w-0"
        >
          <span
            aria-hidden
            className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-navy font-serif font-semibold text-sm"
          >
            {episode.episodeNumber}
          </span>
          <span className="min-w-0 flex-1 text-sm font-semibold text-navy group-hover:text-gold-ink transition-colors line-clamp-2">
            {episode.title}
          </span>
          <span
            aria-hidden
            className="shrink-0 text-gray-dark group-hover:text-gold-ink transition-all duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        {transcript && (
          <a
            href={`/podcast/transcripts/${transcript.slug}`}
            aria-label={`Read the transcript for episode ${episode.episodeNumber}`}
            className="shrink-0 ml-sm text-xs font-semibold text-gold-ink border border-gold rounded-xs px-sm py-xs hover:bg-gold hover:text-navy transition-colors"
          >
            Transcript
          </a>
        )}
      </div>
    </li>
  );
}
