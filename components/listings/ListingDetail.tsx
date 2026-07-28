import type { Listing } from "@/lib/listings/types";
import { formatPrice } from "@/lib/utils/formatPrice";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PropertyFacts } from "@/components/listings/PropertyFacts";
import { ListingGallery } from "@/components/listings/ListingGallery";
import { MortgageCalculatorPlaceholder } from "@/components/listings/MortgageCalculatorPlaceholder";

const statusClasses: Record<Listing["status"], string> = {
  Active: "bg-gold text-navy",
  Pending: "bg-gray-medium text-navy",
  Sold: "bg-navy text-white",
  "Coming Soon": "bg-cream text-navy border border-gold",
};

/**
 * Reusable Listing Detail template. Every field on the page comes from the
 * `Listing` prop — nothing here is specific to one property, so this same
 * component renders every listing, present or future (IDX-synced included).
 */
export function ListingDetail({ listing }: { listing: Listing }) {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <ListingGallery images={listing.images} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3xl items-start">
            {/* Price/status/facts always come first, on every breakpoint. */}
            <div className="lg:col-start-1 lg:row-start-1">
              <div className="flex items-center gap-md mb-sm flex-wrap">
                <span
                  className={`px-sm py-1 rounded-xs text-xs font-semibold uppercase tracking-[0.06em] ${statusClasses[listing.status]}`}
                >
                  {listing.status}
                </span>
                {listing.mlsNumber && (
                  <span className="text-xs text-gray-dark uppercase tracking-[0.06em]">
                    MLS# {listing.mlsNumber}
                  </span>
                )}
              </div>

              <h1 className="mb-xs">{formatPrice(listing.price)}</h1>
              <p className="text-lg text-gray-dark mb-lg">
                {listing.address.street}
                {listing.address.unit ? `, ${listing.address.unit}` : ""}, {listing.address.city},{" "}
                {listing.address.state} {listing.address.zip}
              </p>

              <div className="pb-lg border-b border-gray-light">
                <PropertyFacts beds={listing.beds} baths={listing.baths} sqft={listing.sqft} size="lg" />
              </div>
            </div>

            {/* On mobile the CTA sits right under the price, not buried below the
                full description — on desktop it becomes the sticky right rail. */}
            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
              <div className="border border-gray-light rounded-xs p-lg">
                <h3 className="mt-0 mb-md text-xl">Interested in This Home?</h3>
                <p className="text-sm mb-lg">
                  Schedule a private showing or ask Natalie a question about this property.
                </p>
                <Button href="/booking" className="w-full mb-md">
                  Schedule a Showing
                </Button>
                <Button href={listing.harMlsUrl} external variant="outline" className="w-full">
                  View Official HAR MLS Listing
                </Button>
              </div>
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <h2>Property Description</h2>
              {listing.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <h2>Neighborhood Overview</h2>
              {listing.neighborhoodOverview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <h2>Is This Home Right for You?</h2>
              {listing.buyerProfile.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <MortgageCalculatorPlaceholder price={listing.price} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
