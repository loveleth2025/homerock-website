import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HarListingsEmbed } from "@/components/listings/HarListingsEmbed";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Featured Listings",
  description: "Browse current Texas real estate listings from Natalie Pilkinton, HomeRock Realty, direct from HAR.",
  path: "/listings",
});

export default function ListingsPage() {
  return (
    <>
      <Hero
        title="Featured Listings"
        subheading="Natalie's current listings, straight from her official HAR profile — always up to date."
        align="left"
      />

      <Section>
        <Container>
          <HarListingsEmbed />
        </Container>
      </Section>
    </>
  );
}
