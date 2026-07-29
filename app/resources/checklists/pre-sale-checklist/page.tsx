import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { GatedChecklist } from "@/components/content/GatedChecklist";
import { preSaleChecklist } from "@/lib/content/checklist";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pre-Sale Home Checklist",
  description:
    "Complete list of repairs, staging, and marketing steps to maximize your home's sale price, from Natalie Pilkinton.",
  path: "/resources/checklists/pre-sale-checklist",
});

export default function PreSaleChecklistPage() {
  return (
    <>
      <BreadcrumbBar
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Checklists", path: "/resources/checklists" },
          { name: "Pre-Sale Home Checklist", path: "/resources/checklists/pre-sale-checklist" },
        ]}
      />

      <Hero
        title="Pre-Sale Home Checklist"
        subheading="Everything to prepare, price, and market your home before it hits the market."
        align="left"
      />

      <Section>
        <Container className="max-w-[42rem]">
          <GatedChecklist resource="presale-checklist" sections={preSaleChecklist} />
        </Container>
      </Section>

      <CTA title="Ready to Sell?" description="Get a free home valuation and selling strategy consultation.">
        <Button href="/booking">Get Your Free Valuation →</Button>
      </CTA>
    </>
  );
}
