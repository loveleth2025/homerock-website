import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "New Construction Buying Guide",
  description: "What to know before buying a new construction home in Texas, and why representation still matters.",
  path: "/buyers/new-construction",
});

export default function NewConstructionPage() {
  return (
    <PlaceholderPage
      title="New Construction Buying Guide"
      subheading="How buying new construction differs from resale, and why you still need a Realtor"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "New Construction", path: "/buyers/new-construction" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
