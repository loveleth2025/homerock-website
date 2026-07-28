import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "First-Time Buyers",
  description: "A complete orientation guide for first-time home buyers in Texas, from Natalie Pilkinton.",
  path: "/buyers/first-time-buyers",
});

export default function FirstTimeBuyersPage() {
  return (
    <PlaceholderPage
      title="First-Time Buyers"
      subheading="Everything a first-time buyer needs to know before starting the home search"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "First-Time Buyers", path: "/buyers/first-time-buyers" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
