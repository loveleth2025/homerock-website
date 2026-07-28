import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "BRRRR Strategy",
  description: "The BRRRR method for real estate investing, explained step by step, from Natalie Pilkinton.",
  path: "/investors/brrrr",
});

export default function BrrrrPage() {
  return (
    <PlaceholderPage
      title="BRRRR Strategy"
      subheading="Buy, Rehab, Rent, Refinance, Repeat — explained stage by stage"
      breadcrumbs={[
        { name: "Investors", path: "/investors" },
        { name: "BRRRR", path: "/investors/brrrr" },
      ]}
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    />
  );
}
