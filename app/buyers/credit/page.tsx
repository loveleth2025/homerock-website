import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Credit Improvement for Home Buyers",
  description: "How to improve your credit before buying a house, from Texas Realtor Natalie Pilkinton.",
  path: "/buyers/credit",
});

export default function CreditPage() {
  return (
    <PlaceholderPage
      title="Credit Improvement for Home Buyers"
      subheading="Help future buyers improve their credit before applying for a mortgage"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "Credit", path: "/buyers/credit" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
