import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing Your Home",
  description: "How to price your home to sell, with a comparative market analysis explainer.",
  path: "/sellers/pricing",
});

export default function SellerPricingPage() {
  return (
    <PlaceholderPage
      title="Pricing Your Home"
      subheading="How to price competitively so you sell for top dollar without leaving money on the table"
      breadcrumbs={[
        { name: "Home Sellers", path: "/sellers" },
        { name: "Pricing", path: "/sellers/pricing" },
      ]}
      ctaTitle="Ready to Sell?"
      ctaDescription="Get a free home valuation and selling strategy consultation."
      ctaLabel="Get Your Free Valuation →"
    />
  );
}
