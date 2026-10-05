import { siteConfig } from "@/lib/data/navigation";

/**
 * Natalie's monthly in-person meetup for investors and Realtors.
 * Schedule and venue live on meetup.com, so nothing date-specific is hardcoded here.
 */
export function MeetupCallout({ audience = "investors" }: { audience?: "investors" | "realtors" }) {
  return (
    <aside className="bg-cream border border-gold/40 rounded-xs p-xl my-2xl">
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
      <a
        href={siteConfig.meetup.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-lg py-sm rounded-xs bg-navy text-white font-semibold hover:bg-gold hover:text-navy transition-colors"
      >
        See upcoming meetups on Meetup.com →
      </a>
    </aside>
  );
}
