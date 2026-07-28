import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { calculators } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Calculators",
  description: "Real estate calculators for buyers and investors, from Natalie Pilkinton.",
  path: "/resources/calculators",
});

export default function CalculatorsPage() {
  return (
    <ResourceListPage
      title="Calculators"
      subheading="Interactive tools for budgeting, ROI, and cash flow"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Calculators", path: "/resources/calculators" }]}
      items={calculators}
    />
  );
}
