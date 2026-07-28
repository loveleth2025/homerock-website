import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Relocation Buyer Guide",
  description: "A guide for buyers relocating to Texas, from remote touring to closing.",
  path: "/buyers/relocation",
});

export default function RelocationPage() {
  return (
    <PlaceholderPage
      title="Relocation Buyer Guide"
      subheading="Buying a home in Texas from out of state, with local expertise every step of the way"
      breadcrumbs={[
        { name: "Home Buyers", path: "/buyers" },
        { name: "Relocation", path: "/buyers/relocation" },
      ]}
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    />
  );
}
