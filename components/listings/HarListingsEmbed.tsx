import { siteConfig } from "@/lib/data/navigation";

/**
 * Embeds Natalie's official HAR member profile — the real, MLS-backed
 * source for her current listings — directly in the page. HAR doesn't
 * expose a listings-only widget for this account, so this shows her full
 * HAR profile (bio, contact, and listings) inside a framed panel rather
 * than our own card/detail UI.
 *
 * The link below the frame is a deliberate fallback, not decoration: some
 * ad blockers and corporate networks block third-party iframes outright,
 * so visitors always have a working way to reach the same page directly.
 */
export function HarListingsEmbed() {
  return (
    <div>
      <div className="border border-gray-light rounded-xs overflow-hidden shadow-brand-md bg-white">
        <iframe
          src={siteConfig.harProfileUrl}
          title="Natalie Pilkinton — Official HAR Listings"
          loading="lazy"
          className="w-full h-[85vh] min-h-[600px] border-0"
        />
      </div>
      <p className="text-sm text-gray-dark text-center mt-md">
        Having trouble viewing listings above?{" "}
        <a href={siteConfig.harProfileUrl} target="_blank" rel="noopener noreferrer" className="font-semibold">
          Open Natalie&rsquo;s HAR profile directly →
        </a>
      </p>
    </div>
  );
}
