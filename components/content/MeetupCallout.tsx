import { siteConfig } from "@/lib/data/navigation";
import { formatMeetupDate, getNextMeetup } from "@/lib/meetup";
import { jsonLdScriptProps, schemaIds } from "@/lib/seo/schema";

/**
 * Natalie's monthly in-person meetup for investors and Realtors.
 * The next event is read from the group's Meetup.com calendar feed (refreshed
 * hourly), so posting an event on Meetup.com is all it takes to update the site.
 * If no event is posted or Meetup can't be reached, the generic text shows.
 */
export async function MeetupCallout({
  audience = "investors",
  withSchema = false,
}: {
  audience?: "investors" | "realtors";
  /** Emit schema.org Event markup for the next meetup (use on one page only). */
  withSchema?: boolean;
}) {
  const next = await getNextMeetup();

  return (
    <aside className="bg-cream border border-gold/40 rounded-xs p-xl my-2xl">
      {next && withSchema && (
        <script
          {...jsonLdScriptProps({
            "@context": "https://schema.org",
            "@type": "Event",
            name: next.title,
            startDate: next.isoStart,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            url: next.url,
            location: {
              "@type": "Place",
              name: next.location ?? "Spring / The Woodlands, TX (venue on Meetup.com)",
              address: { "@type": "PostalAddress", addressLocality: "Spring", addressRegion: "TX", addressCountry: "US" },
            },
            organizer: { "@id": schemaIds.person },
            description: `${siteConfig.meetup.name}: Natalie Pilkinton's monthly meetup for real estate investors and Realtors.`,
          })}
        />
      )}

      <p className="text-gold-ink text-xs font-semibold uppercase tracking-[0.18em] mb-sm">Monthly meetup · Spring / The Woodlands</p>
      <h2 className="mt-0 mb-sm">Meet Houston-area investors and Realtors in person</h2>
      <p className="mb-md">
        Natalie hosts <strong>{siteConfig.meetup.name}</strong>, a monthly meetup where investors and Realtors get
        together to talk through what&rsquo;s happening in the Texas market, the deals they&rsquo;re working on and the
        topics that matter right now
        {audience === "investors"
          ? " — from rentals and multifamily to self-directed IRAs and group investing."
          : " — a good place to meet investor clients and the vendors who serve them."}{" "}
        New and experienced members are welcome.
      </p>

      {next && (
        <div className="bg-white border-l-4 border-gold rounded-xs p-md mb-md">
          <p className="text-xs uppercase tracking-[0.1em] text-gray-dark font-semibold mb-xs">Next meetup</p>
          <p className="text-lg font-semibold text-navy mb-xs">{next.title}</p>
          <p className="text-sm text-gray-dark mb-0">
            <time dateTime={next.isoStart}>{formatMeetupDate(next)}</time>
            {next.location ? ` · ${next.location}` : ""}
          </p>
        </div>
      )}

      <a
        href={next?.url ?? siteConfig.meetup.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-lg py-sm rounded-xs bg-navy text-white font-semibold hover:bg-gold hover:text-navy transition-colors"
      >
        {next ? "RSVP on Meetup.com →" : "See upcoming meetups on Meetup.com →"}
      </a>
    </aside>
  );
}
