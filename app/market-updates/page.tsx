import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { marketUpdates } from "@/lib/content/market-updates";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Market Updates",
  description: "Periodic Texas real estate market updates from Natalie Pilkinton.",
  path: "/market-updates",
});

export default function MarketUpdatesPage() {
  return (
    <>
      <Hero title="Market Updates" subheading="Periodic snapshots of the Texas real estate market" align="left" />

      <Section>
        <Container>
          {marketUpdates.length === 0 ? (
            <PlaceholderNotice note="No market updates have been published yet." />
          ) : (
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
              {marketUpdates.map((update) => (
                <ResourceCard
                  key={update.slug}
                  category={update.date}
                  title={update.title}
                  description={update.summary}
                  cta={{ label: "Read Update", href: `/market-updates/${update.slug}` }}
                />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTA title="Ready to Master Real Estate?" description="Book a free 30-minute strategy session to discuss your real estate goals.">
        <Button href="/booking">Book Your FREE Strategy Session</Button>
      </CTA>
    </>
  );
}
