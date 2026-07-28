import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/content/PlaceholderPage";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Agent Attraction",
  description: "How to attract real estate agents to your brokerage or team, from Natalie Pilkinton.",
  path: "/realtors/agent-attraction",
});

export default function AgentAttractionPage() {
  return (
    <PlaceholderPage
      title="Agent Attraction"
      subheading="Systems for attracting and growing a team of agents"
      breadcrumbs={[
        { name: "Realtors", path: "/realtors" },
        { name: "Agent Attraction", path: "/realtors/agent-attraction" },
      ]}
      ctaTitle="Scale Your Real Estate Business"
      ctaDescription="Get personalized coaching and strategies to grow your real estate career."
      ctaLabel="Book Your Strategy Session →"
    />
  );
}
