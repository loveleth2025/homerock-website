import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { sellerFaq } from "@/lib/content/sellers";

export const metadata: Metadata = buildMetadata({
  title: "Home Seller FAQ",
  description: "Answers to the most common questions from home sellers, from Natalie Pilkinton.",
  path: "/sellers/faq",
});

export default function SellerFaqPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Sellers", path: "/sellers" }, { name: "FAQ", path: "/sellers/faq" }]} />

      <Hero title="Home Seller FAQ" subheading="Answers to common seller questions and objections" align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <FAQ items={sellerFaq} />
        </Container>
      </Section>

      <CTA title="Ready to Sell?" description="Get a free home valuation and selling strategy consultation.">
        <Button href="/booking">Get Your Free Valuation →</Button>
      </CTA>
    </>
  );
}
