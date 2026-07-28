import { NextResponse } from "next/server";

const PLAYLIST_ID = "PLOoNpBZdMzvmMTvAZ5woo1_hkC9SEnJ6m";

/**
 * Replaces the legacy client-side fetch through cors-anywhere.herokuapp.com
 * (a public demo proxy that's frequently down) with a same-origin server
 * fetch. No CORS restrictions apply server-side, so no proxy is needed.
 */
export async function GET() {
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;
    const response = await fetch(feedUrl, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return NextResponse.json({ videoId: null, title: null }, { status: 200 });
    }

    const xml = await response.text();
    const firstEntry = xml.split("<entry>")[1];
    if (!firstEntry) {
      return NextResponse.json({ videoId: null, title: null }, { status: 200 });
    }

    const videoIdMatch = firstEntry.match(/<yt:videoId>([a-zA-Z0-9_-]{11})<\/yt:videoId>/);
    const titleMatch = firstEntry.match(/<title>([^<]+)<\/title>/);

    return NextResponse.json({
      videoId: videoIdMatch?.[1] ?? null,
      title: titleMatch?.[1] ?? null,
    });
  } catch {
    return NextResponse.json({ videoId: null, title: null }, { status: 200 });
  }
}
