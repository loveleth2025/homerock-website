import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { ValuationForm } from "@/components/forms/ValuationForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "What's My Home Worth",
  description: "Request a home valuation estimate from Texas Realtor Natalie Pilkinton.",
  path: "/sellers/home-value",
});

export default function HomeValuePage() {
  return (
    <>
      <div className="bg-cream border-b border-gray-light py-md">
        <Container>
          <Breadcrumbs items={[{ name: "Home Sellers", path: "/sellers" }, { name: "Home Value", path: "/sellers/home-value" }]} />
        </Container>
      </div>

      <Hero title="What's My Home Worth?" subheading="Request a free, no-obligation home value estimate" align="left" />

      <Section>
        <Container className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl">
          <div>
            <h2>Request Your Estimate</h2>
            <ValuationForm />
          </div>
          <div>
            <h2>How Valuation Works</h2>
            <PlaceholderNotice note="Explainer copy for the CMA/valuation methodology is pending." />
          </div>
        </Container>
      </Section>
    </>
  );
}
