import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Multifamily Investing",
  description: "A guide to multifamily real estate investing fundamentals, from Natalie Pilkinton.",
  path: "/investors/multifamily",
});

export default function MultifamilyPage() {
  return (
    <PlaceholderPage
      title="Multifamily Investing"
      subheading="Scaling beyond single-family with multifamily fundamentals"
      breadcrumbs={[
        { name: "Investors", path: "/investors" },
        { name: "Multifamily", path: "/investors/multifamily" },
      ]}
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    />
  );
}
