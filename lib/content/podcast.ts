export type Episode = {
  slug: string;
  title: string;
  /** null until a real episode URL/media source is supplied. */
  youtubeId: string | null;
};

/**
 * Titles ported verbatim from the legacy Watch page. The legacy page linked
 * every episode to "#" (a dead link) — this list gives each one a real,
 * indexable slug/route while the actual audio/video source is pending.
 */
export const episodes: Episode[] = [
  { slug: "episode-50-real-estate-market-trends-2025", title: "Episode 50: Real Estate Market Trends for 2025", youtubeId: null },
  { slug: "episode-49-investment-property-deep-dive", title: "Episode 49: Investment Property Deep Dive", youtubeId: null },
  { slug: "episode-48-first-time-buyer-mistakes", title: "Episode 48: First-Time Buyer Mistakes", youtubeId: null },
  { slug: "episode-47-scaling-your-real-estate-business", title: "Episode 47: Scaling Your Real Estate Business", youtubeId: null },
  { slug: "episode-46-houston-market-update", title: "Episode 46: Houston Market Update", youtubeId: null },
  { slug: "episode-45-financing-strategies-for-investors", title: "Episode 45: Financing Strategies for Investors", youtubeId: null },
  { slug: "episode-44-home-staging-secrets", title: "Episode 44: Home Staging Secrets", youtubeId: null },
  { slug: "episode-43-negotiation-tactics-that-win", title: "Episode 43: Negotiation Tactics That Win", youtubeId: null },
  { slug: "episode-42-real-estate-tech-tools", title: "Episode 42: Real Estate Tech Tools", youtubeId: null },
  { slug: "episode-41-building-your-brand", title: "Episode 41: Building Your Brand", youtubeId: null },
];

/** Fallback video shown on the podcast hub until the live-feed fetch (see PodcastFeed) resolves. */
export const fallbackYoutubeId = "igl9N-gE7hY";

export const subscribeLinks = [
  { label: "🎵 Spotify", href: "#" },
  { label: "📱 Apple Podcasts", href: "#" },
  { label: "🎙️ YouTube", href: "#" },
  { label: "📻 Google Podcasts", href: "#" },
];
