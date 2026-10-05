import { siteConfig } from "@/lib/data/navigation";

/**
 * Reads Natalie's upcoming home buyer seminars from Eventbrite so the buyer
 * pages always show the next one. Post the event on Eventbrite and it appears
 * on the site within about an hour.
 *
 * Needs a private API token in the EVENTBRITE_TOKEN environment variable
 * (Eventbrite → Account Settings → Developer Links → API Keys → private token),
 * set in Vercel → Project Settings → Environment Variables. Without it, the
 * site shows the general seminar text and links to the Eventbrite page.
 */

export type BuyerSeminar = {
  title: string;
  /** Local wall-clock start, e.g. "2026-10-24T14:00:00". */
  localStart: string;
  localEnd?: string;
  /** ISO 8601 UTC start for schema.org, e.g. "2026-10-24T19:00:00Z". */
  utcStart: string;
  utcEnd?: string;
  url: string;
  isFree: boolean;
  online: boolean;
  venueName?: string;
  address?: { street?: string; city?: string; region?: string; postalCode?: string; display?: string };
};

type EventbriteEvent = {
  name?: { text?: string };
  url?: string;
  start?: { local?: string; utc?: string };
  end?: { local?: string; utc?: string };
  is_free?: boolean;
  online_event?: boolean;
  status?: string;
  venue?: {
    name?: string;
    address?: {
      address_1?: string;
      city?: string;
      region?: string;
      postal_code?: string;
      localized_address_display?: string;
    };
  } | null;
};

export function mapEventbriteEvents(events: EventbriteEvent[], now = new Date()): BuyerSeminar[] {
  return events
    .filter((e) => e.name?.text && e.start?.local && e.start?.utc && e.url && (!e.status || e.status === "live"))
    .map((e) => ({
      title: e.name!.text!.trim(),
      localStart: e.start!.local!,
      localEnd: e.end?.local,
      utcStart: e.start!.utc!,
      utcEnd: e.end?.utc,
      url: e.url!.split("?")[0],
      isFree: Boolean(e.is_free),
      online: Boolean(e.online_event),
      venueName: e.venue?.name || undefined,
      address: e.venue?.address
        ? {
            street: e.venue.address.address_1,
            city: e.venue.address.city,
            region: e.venue.address.region,
            postalCode: e.venue.address.postal_code,
            display: e.venue.address.localized_address_display,
          }
        : undefined,
    }))
    .filter((s) => Date.parse(s.utcStart) > now.getTime())
    .sort((a, b) => Date.parse(a.utcStart) - Date.parse(b.utcStart));
}

/** The next upcoming seminar, or null if none is posted, no token is set, or Eventbrite can't be reached. */
export async function getNextBuyerSeminar(): Promise<BuyerSeminar | null> {
  const token = process.env.EVENTBRITE_TOKEN;
  if (!token) return null;
  try {
    const url =
      `https://www.eventbriteapi.com/v3/organizers/${siteConfig.eventbrite.organizerId}/events/` +
      "?status=live&order_by=start_asc&expand=venue";
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { events?: EventbriteEvent[] };
    return mapEventbriteEvents(data.events ?? [])[0] ?? null;
  } catch {
    return null;
  }
}

/** "Saturday, October 24 · 2:00–4:00 PM CT" from the event's local times. */
export function formatSeminarDate(s: BuyerSeminar): string {
  const time = (local: string) => {
    const [hh, mm] = local.split("T")[1].split(":").map(Number);
    return { label: `${hh % 12 === 0 ? 12 : hh % 12}:${String(mm).padStart(2, "0")}`, pm: hh >= 12 };
  };
  const [y, m, d] = s.localStart.split("T")[0].split("-").map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  const start = time(s.localStart);
  if (!s.localEnd) return `${day} · ${start.label} ${start.pm ? "PM" : "AM"} CT`;
  const end = time(s.localEnd);
  const range =
    start.pm === end.pm
      ? `${start.label}–${end.label} ${end.pm ? "PM" : "AM"}`
      : `${start.label} ${start.pm ? "PM" : "AM"}–${end.label} ${end.pm ? "PM" : "AM"}`;
  return `${day} · ${range} CT`;
}
