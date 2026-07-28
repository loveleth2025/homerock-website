import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home Buyer FAQ",
  description: "Answers to the most common questions from home buyers, from Natalie Pilkinton.",
  path: "/buyers/faq",
});

export default function BuyerFaqPage() {
  return (
    <PlaceholderPage
      title="Home Buyer FAQ"
      subheading="Answers to common buyer questions and objections"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "FAQ", path: "/buyers/faq" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
