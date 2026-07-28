import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Financing Options for Buyers",
  description: "A guide to home buyer financing options in Texas: conventional, FHA, VA, and down payment assistance.",
  path: "/buyers/financing",
});

export default function FinancingPage() {
  return (
    <PlaceholderPage
      title="Financing Options for Buyers"
      subheading="Explaining financing paths so buyers arrive at pre-approval prepared"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "Financing", path: "/buyers/financing" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
