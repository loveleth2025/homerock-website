/**
 * Fallback video shown in <PodcastFeed> only if the YouTube playlist fetch
 * fails or isn't configured — the actual episode list is fully dynamic,
 * sourced live from YouTube (see lib/youtube/getPodcastEpisodes.ts).
 */
export const fallbackYoutubeId = "igl9N-gE7hY";

export const subscribeLinks = [
  { label: "🎵 Spotify", href: "#" },
  { label: "📱 Apple Podcasts", href: "#" },
  { label: "🎙️ YouTube", href: "#" },
  { label: "📻 Google Podcasts", href: "#" },
];
