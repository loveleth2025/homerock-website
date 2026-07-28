import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { ListingCard } from "@/components/cards/ListingCard";
import { getAllListings } from "@/lib/listings";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Featured Listings",
  description: "Browse featured Texas real estate listings from Natalie Pilkinton, HomeRock Realty.",
  path: "/listings",
});

export default function ListingsPage() {
  const listings = getAllListings();

  return (
    <>
      <Hero
        title="Featured Listings"
        subheading="A curated look at homes currently on the market — every listing links back to its official HAR MLS page."
        align="left"
      />

      <Section>
        <Container>
          {listings.length === 0 ? (
            <PlaceholderNotice note="No listings are published yet." />
          ) : (
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-lg">
              {listings.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
