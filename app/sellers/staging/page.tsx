import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Staging Your Home",
  description: "Home staging tips before selling, room by room, from Natalie Pilkinton.",
  path: "/sellers/staging",
});

export default function StagingPage() {
  return (
    <PlaceholderPage
      title="Staging Your Home"
      subheading="Proven staging techniques to increase perceived value before you list"
      breadcrumbs={[
        { name: "Home Sellers", path: "/sellers" },
        { name: "Staging", path: "/sellers/staging" },
      ]}
      ctaTitle="Ready to Sell?"
      ctaDescription="Get a free home valuation and selling strategy consultation."
      ctaLabel="Get Your Free Valuation →"
    />
  );
}
