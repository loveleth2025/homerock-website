import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Buyer Resources",
  description: "Free guides, checklists, and calculators for home buyers, from Natalie Pilkinton.",
  path: "/buyers/resources",
});

export default function BuyerResourcesPage() {
  return (
    <PlaceholderPage
      title="Buyer Resources"
      subheading="All buyer-relevant guides, checklists, and calculators in one place"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "Buyer Resources", path: "/buyers/resources" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
