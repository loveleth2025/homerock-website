import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { sellerJourney } from "@/lib/content/sellers";

export const metadata: Metadata = buildMetadata({
  title: "The Home Selling Process",
  description: "A step-by-step walkthrough of the home selling process, from preparation to closing.",
  path: "/sellers/process",
});

export default function SellerProcessPage() {
  return (
    <>
      <div className="bg-cream border-b border-gray-light py-md">
        <Container>
          <Breadcrumbs items={[{ name: "Home Sellers", path: "/sellers" }, { name: "Selling Process", path: "/sellers/process" }]} />
        </Container>
      </div>

      <Hero title="The Home Selling Process" subheading="Six steps from preparing your home to handing off the keys" align="left" />

      <Section>
        <Container className="max-w-3xl">
          <Timeline steps={sellerJourney} />
        </Container>
      </Section>

      <CTA title="Ready to Sell?" description="Get a free home valuation and selling strategy consultation.">
        <Button href="/booking">Get Your Free Valuation →</Button>
      </CTA>
    </>
  );
}
