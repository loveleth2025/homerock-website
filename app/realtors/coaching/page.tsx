import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Realtor Coaching",
  description: "Real estate agent coaching in Texas with Natalie Pilkinton.",
  path: "/realtors/coaching",
});

export default function CoachingPage() {
  return (
    <PlaceholderPage
      title="Realtor Coaching"
      subheading="What coaching with Natalie includes, and who it's for"
      breadcrumbs={[
        { name: "Realtors", path: "/realtors" },
        { name: "Coaching", path: "/realtors/coaching" },
      ]}
      ctaTitle="Scale Your Real Estate Business"
      ctaDescription="Get personalized coaching and strategies to grow your real estate career."
      ctaLabel="Book Your Strategy Session →"
    />
  );
}
