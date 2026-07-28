import type { YouTubeEpisode } from "@/lib/youtube/types";
import { getYouTubeWatchUrl } from "@/lib/youtube/types";

/**
 * One clickable episode row — the entire row is a single <a>, so it's
 * reachable and activatable with just Tab + Enter, no extra JS required.
 * Shows only the episode number and title, per the site's minimal style.
 */
export function EpisodeRow({ episode }: { episode: YouTubeEpisode }) {
  return (
    <li>
      <a
        href={getYouTubeWatchUrl(episode.videoId)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Episode ${episode.episodeNumber}: ${episode.title} (opens on YouTube in a new tab)`}
        className="group flex items-center gap-md p-md bg-white border border-gray-light rounded-xs transition-all duration-200 hover:border-gold hover:bg-cream hover:-translate-y-0.5 hover:shadow-brand-md"
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
    </li>
  );
}
