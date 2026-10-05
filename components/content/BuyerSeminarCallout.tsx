import { siteConfig } from "@/lib/data/navigation";
import { formatSeminarDate, getNextBuyerSeminar } from "@/lib/eventbrite";
import { jsonLdScriptProps, schemaIds } from "@/lib/seo/schema";

/**
 * Natalie's free in-person home buyer seminars, read from Eventbrite (hourly).
 * Posting a seminar on Eventbrite is all it takes to update the site; without
 * an upcoming event or API token, the general text and Eventbrite link show.
 */
export async function BuyerSeminarCallout({ withSchema = false }: { withSchema?: boolean }) {
  const next = await getNextBuyerSeminar();
  const where = next
    ? next.online
      ? "Online"
      : [next.venueName, next.address?.display ?? [next.address?.city, next.address?.region].filter(Boolean).join(", ")]
          .filter(Boolean)
          .join(" · ")
    : "";

  return (
    <aside className="bg-cream border border-gold/40 rounded-xs p-xl my-2xl">
      {next && withSchema && (
        <script
          {...jsonLdScriptProps({
            "@context": "https://schema.org",
            "@type": "Event",
            name: next.title,
            startDate: next.utcStart,
            ...(next.utcEnd ? { endDate: next.utcEnd } : {}),
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: next.online
              ? "https://schema.org/OnlineEventAttendanceMode"
              : "https://schema.org/OfflineEventAttendanceMode",
            url: next.url,
            location: next.online
              ? { "@type": "VirtualLocation", url: next.url }
              : {
                  "@type": "Place",
                  name: next.venueName ?? "See event page",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: next.address?.street,
                    addressLocality: next.address?.city,
                    addressRegion: next.address?.region,
                    postalCode: next.address?.postalCode,
                    addressCountry: "US",
                  },
                },
            organizer: { "@id": schemaIds.person },
            ...(next.isFree
              ? { offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: next.url } }
              : {}),
          })}
        />
      )}

      <p className="text-gold-ink text-xs font-semibold uppercase tracking-[0.18em] mb-sm">Free home buyer seminar</p>
      <h2 className="mt-0 mb-sm">Learn the buying process in person</h2>
      <p className="mb-md">
        Natalie hosts free, in-person home buyer seminars around the Houston area covering credit, getting
        approved and how the buying process works, with lending professionals on hand to answer your questions.
      </p>

      {next && (
        <div className="bg-white border-l-4 border-gold rounded-xs p-md mb-md">
          <p className="text-xs uppercase tracking-[0.1em] text-gray-dark font-semibold mb-xs">
            Next seminar{next.isFree ? " · Free" : ""}
          </p>
          <p className="text-lg font-semibold text-navy mb-xs">{next.title}</p>
          <p className="text-sm text-gray-dark mb-0">
            <time dateTime={next.utcStart}>{formatSeminarDate(next)}</time>
            {where ? ` · ${where}` : ""}
          </p>
        </div>
      )}

      <a
        href={next?.url ?? siteConfig.eventbrite.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-lg py-sm rounded-xs bg-navy text-white font-semibold hover:bg-gold hover:text-navy transition-colors"
      >
        {next ? "Reserve your free spot on Eventbrite →" : "See upcoming seminars on Eventbrite →"}
      </a>
    </aside>
  );
}
