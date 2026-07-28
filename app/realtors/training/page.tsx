import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Realtor Training",
  description: "Structured real estate agent training programs from Natalie Pilkinton.",
  path: "/realtors/training",
});

export default function TrainingPage() {
  return (
    <PlaceholderPage
      title="Realtor Training"
      subheading="A structured curriculum to build real estate business skills"
      breadcrumbs={[
        { name: "Realtors", path: "/realtors" },
        { name: "Training", path: "/realtors/training" },
      ]}
      ctaTitle="Scale Your Real Estate Business"
      ctaDescription="Get personalized coaching and strategies to grow your real estate career."
      ctaLabel="Book Your Strategy Session →"
    />
  );
}
