import { NextResponse } from "next/server";
import { fetchSeminarEvents, mapEventbriteEvents } from "@/lib/eventbrite";

/**
 * Health check for the Eventbrite seminar feed. Reports whether each lookup
 * worked and the next seminar's title/date — never the token itself.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const { events, trace } = await fetchSeminarEvents(true);
  const next = mapEventbriteEvents(events)[0];
  return NextResponse.json({
    ok: Boolean(next),
    trace,
    next: next ? { title: next.title, start: next.localStart, url: next.url } : null,
  });
}
