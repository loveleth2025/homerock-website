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

const API = "https://www.eventbriteapi.com/v3";

type Lookup = { step: string; status: number | string; events?: number };

async function getJson<T>(path: string, token: string, fresh = false): Promise<{ status: number; data?: T }> {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    ...(fresh ? { cache: "no-store" as const } : { next: { revalidate: 3600 } }),
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) return { status: res.status };
  return { status: res.status, data: (await res.json()) as T };
}

/**
 * Upcoming live events for Natalie's organizer profile. Tries the token owner's
 * organization first (the current Eventbrite API), then the older per-organizer
 * endpoint. Returns a trace of each step for the status check.
 */
export async function fetchSeminarEvents(fresh = false): Promise<{ events: EventbriteEvent[]; trace: Lookup[] }> {
  const token = process.env.EVENTBRITE_TOKEN;
  const trace: Lookup[] = [];
  if (!token) return { events: [], trace: [{ step: "token", status: "missing" }] };
  const organizerId = siteConfig.eventbrite.organizerId;
  const query = "status=live&order_by=start_asc&time_filter=current_future&expand=venue";

  try {
    const orgs = await getJson<{ organizations?: { id: string }[] }>("/users/me/organizations/", token, fresh);
    trace.push({ step: "organizations", status: orgs.status, events: orgs.data?.organizations?.length });
    for (const org of orgs.data?.organizations ?? []) {
      const res = await getJson<{ events?: (EventbriteEvent & { organizer_id?: string })[] }>(
        `/organizations/${org.id}/events/?${query}`,
        token,
        fresh,
      );
      const mine = (res.data?.events ?? []).filter((e) => !e.organizer_id || e.organizer_id === organizerId);
      trace.push({ step: "organization-events", status: res.status, events: mine.length });
      if (mine.length) return { events: mine, trace };
    }

    const legacy = await getJson<{ events?: EventbriteEvent[] }>(
      `/organizers/${organizerId}/events/?status=live&order_by=start_asc&expand=venue`,
      token,
      fresh,
    );
    trace.push({ step: "organizer-events", status: legacy.status, events: legacy.data?.events?.length });
    return { events: legacy.data?.events ?? [], trace };
  } catch (error) {
    trace.push({ step: "error", status: error instanceof Error ? error.name : "unknown" });
    return { events: [], trace };
  }
}

/** The next upcoming seminar, or null if none is posted, no token is set, or Eventbrite can't be reached. */
export async function getNextBuyerSeminar(): Promise<BuyerSeminar | null> {
  const { events } = await fetchSeminarEvents();
  return mapEventbriteEvents(events)[0] ?? null;
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
