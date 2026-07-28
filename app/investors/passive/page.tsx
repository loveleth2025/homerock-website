import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Passive Investing",
  description: "Passive real estate investing strategies, from turnkey rentals to syndications, from Natalie Pilkinton.",
  path: "/investors/passive",
});

export default function PassiveInvestingPage() {
  return (
    <PlaceholderPage
      title="Passive Investing"
      subheading="Building real estate income with a lower time commitment"
      breadcrumbs={[
        { name: "Investors", path: "/investors" },
        { name: "Passive Investing", path: "/investors/passive" },
      ]}
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    />
  );
}
