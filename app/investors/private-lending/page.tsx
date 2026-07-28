import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Private Lending",
  description: "Private lending for real estate investors, as a financing tool and as a passive investment.",
  path: "/investors/private-lending",
});

export default function PrivateLendingPage() {
  return (
    <PlaceholderPage
      title="Private Lending"
      subheading="How private lending works, for borrowers and lenders alike"
      breadcrumbs={[
        { name: "Investors", path: "/investors" },
        { name: "Private Lending", path: "/investors/private-lending" },
      ]}
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    />
  );
}
