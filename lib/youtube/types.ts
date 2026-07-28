export type YouTubeEpisode = {
  videoId: string;
  title: string;
  /** ISO 8601 timestamp of when the video was added to the playlist. */
  publishedAt: string;
  /**
   * Sequential episode number in RELEASE order (oldest episode = 1). The
   * list itself is still returned newest-first for display; this number is
   * what's actually rendered on each row.
   */
  episodeNumber: number;
};

export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export type YouTubePlaylistResult =
  | { status: "success"; episodes: YouTubeEpisode[] }
  | { status: "error"; message: string }
  | { status: "not_configured" };

/** Minimal shape of the fields this app reads from the YouTube Data API v3 playlistItems response. */
export type YouTubePlaylistItemsResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      publishedAt?: string;
      resourceId?: {
        videoId?: string;
      };
    };
    contentDetails?: {
      videoId?: string;
      videoPublishedAt?: string;
    };
  }>;
  nextPageToken?: string;
  error?: {
    code?: number;
    message?: string;
  };
};
