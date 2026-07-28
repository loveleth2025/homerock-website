import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Join HomeRock Realty",
  description: "Why join HomeRock Realty as a licensed Texas real estate agent.",
  path: "/realtors/join",
});

export default function JoinPage() {
  return (
    <PlaceholderPage
      title="Join HomeRock Realty"
      subheading="What makes HomeRock Realty different for growth-minded agents"
      breadcrumbs={[
        { name: "Realtors", path: "/realtors" },
        { name: "Join HomeRock Realty", path: "/realtors/join" },
      ]}
      ctaTitle="Scale Your Real Estate Business"
      ctaDescription="Get personalized coaching and strategies to grow your real estate career."
      ctaLabel="Book Your Strategy Session →"
    />
  );
}
