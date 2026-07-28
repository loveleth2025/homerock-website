import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Marketing Your Home",
  description: "How Natalie Pilkinton markets a home for sale: photography, listing syndication, and social promotion.",
  path: "/sellers/marketing",
});

export default function SellerMarketingPage() {
  return (
    <PlaceholderPage
      title="Marketing Your Home"
      subheading="How professional marketing gets your home in front of the right buyers"
      breadcrumbs={[
        { name: "Home Sellers", path: "/sellers" },
        { name: "Marketing", path: "/sellers/marketing" },
      ]}
      ctaTitle="Ready to Sell?"
      ctaDescription="Get a free home valuation and selling strategy consultation."
      ctaLabel="Get Your Free Valuation →"
    />
  );
}
