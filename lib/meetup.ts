import { siteConfig } from "@/lib/data/navigation";

/**
 * Reads Natalie's public Meetup.com group calendar (iCal feed) so the site always
 * shows the next meetup without anyone editing the website. Post the event on
 * Meetup.com and it appears here within about an hour.
 */

export type MeetupEvent = {
  title: string;
  /** Wall-clock start in the event's time zone, e.g. "2026-10-12T18:00:00". */
  localStart: string;
  /** ISO 8601 with offset for schema.org, e.g. "2026-10-12T18:00:00-05:00". */
  isoStart: string;
  timeZone: string;
  url: string;
  location?: string;
};

const FEED_URL = `${siteConfig.meetup.url.replace(/\/$/, "")}/events/ical/`;
const DEFAULT_TZ = "America/Chicago";

/** iCal folds long lines with a leading space/tab; join them back. */
function unfold(ics: string) {
  return ics.replace(/\r?\n[ \t]/g, "");
}

function unescapeText(value: string) {
  return value.replace(/\\n/gi, " ").replace(/\\([,;\\])/g, "$1").trim();
}

/** Offset like "-05:00" for a wall-clock time in a zone (handles CST/CDT). */
function offsetFor(localStart: string, timeZone: string): string {
  const guess = new Date(`${localStart}Z`);
  const part = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "longOffset" })
    .formatToParts(guess)
    .find((p) => p.type === "timeZoneName")?.value;
  const match = part?.match(/GMT([+-]\d{2}):?(\d{2})?/);
  return match ? `${match[1]}:${match[2] ?? "00"}` : "-06:00";
}

function parseDate(prop: string, value: string): { localStart: string; timeZone: string; isoStart: string } | null {
  const tz = prop.match(/TZID=([^;:]+)/)?.[1] ?? DEFAULT_TZ;
  const m = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/);
  if (!m) return null;
  const [, y, mo, d, h = "00", mi = "00", s = "00", z] = m;

  if (z) {
    // UTC time: convert to the group's local wall clock.
    const utc = new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +s));
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: DEFAULT_TZ,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      })
        .formatToParts(utc)
        .map((p) => [p.type, p.value]),
    );
    const localStart = `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`;
    return { localStart, timeZone: DEFAULT_TZ, isoStart: utc.toISOString().replace(".000Z", "Z") };
  }

  const localStart = `${y}-${mo}-${d}T${h}:${mi}:${s}`;
  return { localStart, timeZone: tz, isoStart: `${localStart}${offsetFor(localStart, tz)}` };
}

export function parseMeetupIcs(ics: string): MeetupEvent[] {
  const events: MeetupEvent[] = [];
  for (const block of unfold(ics).split("BEGIN:VEVENT").slice(1)) {
    const body = block.split("END:VEVENT")[0];
    const fields: Record<string, { prop: string; value: string }> = {};
    for (const line of body.split(/\r?\n/)) {
      const idx = line.indexOf(":");
      if (idx < 0) continue;
      const prop = line.slice(0, idx);
      const key = prop.split(";")[0].toUpperCase();
      fields[key] = { prop, value: line.slice(idx + 1) };
    }
    const start = fields.DTSTART && parseDate(fields.DTSTART.prop, fields.DTSTART.value.trim());
    if (!start || !fields.SUMMARY) continue;
    events.push({
      title: unescapeText(fields.SUMMARY.value),
      ...start,
      url: fields.URL?.value.trim() || siteConfig.meetup.url,
      location: fields.LOCATION ? unescapeText(fields.LOCATION.value) || undefined : undefined,
    });
  }
  return events;
}

/** The next upcoming meetup, or null if none is posted or the feed can't be reached. */
export async function getNextMeetup(now = new Date()): Promise<MeetupEvent | null> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
      headers: { Accept: "text/calendar" },
    });
    if (!res.ok) return null;
    const upcoming = parseMeetupIcs(await res.text())
      .filter((event) => Date.parse(event.isoStart) > now.getTime())
      .sort((a, b) => Date.parse(a.isoStart) - Date.parse(b.isoStart));
    return upcoming[0] ?? null;
  } catch {
    return null;
  }
}

/** "Monday, October 12 · 6:00 PM CT" from the event's own wall clock. */
export function formatMeetupDate(event: MeetupEvent): string {
  const [date, time] = event.localStart.split("T");
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  const hour12 = hh % 12 === 0 ? 12 : hh % 12;
  const zone = event.timeZone === "America/Chicago" ? "CT" : event.timeZone;
  return `${day} · ${hour12}:${String(mm).padStart(2, "0")} ${hh < 12 ? "AM" : "PM"} ${zone}`;
}
