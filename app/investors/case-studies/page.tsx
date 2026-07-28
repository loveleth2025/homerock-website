import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Investor Case Studies",
  description: "Real estate investment case studies in Texas, from Natalie Pilkinton.",
  path: "/investors/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <PlaceholderPage
      title="Investor Case Studies"
      subheading="Real deal breakdowns, once available"
      breadcrumbs={[
        { name: "Investors", path: "/investors" },
        { name: "Case Studies", path: "/investors/case-studies" },
      ]}
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    />
  );
}
