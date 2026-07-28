import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Beginner Investing",
  description: "How to start investing in real estate for beginners, from Natalie Pilkinton.",
  path: "/investors/beginner",
});

export default function BeginnerInvestingPage() {
  return (
    <PlaceholderPage
      title="Beginner Investing"
      subheading="Demystifying your first move into real estate investing"
      breadcrumbs={[
        { name: "Investors", path: "/investors" },
        { name: "Beginner Investing", path: "/investors/beginner" },
      ]}
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    />
  );
}
