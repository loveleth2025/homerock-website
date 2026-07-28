import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home Seller FAQ",
  description: "Answers to the most common questions from home sellers, from Natalie Pilkinton.",
  path: "/sellers/faq",
});

export default function SellerFaqPage() {
  return (
    <PlaceholderPage
      title="Home Seller FAQ"
      subheading="Answers to common seller questions and objections"
      breadcrumbs={[
        { name: "Home Sellers", path: "/sellers" },
        { name: "FAQ", path: "/sellers/faq" },
      ]}
      ctaTitle="Ready to Sell?"
      ctaDescription="Get a free home valuation and selling strategy consultation."
      ctaLabel="Get Your Free Valuation →"
    />
  );
}
