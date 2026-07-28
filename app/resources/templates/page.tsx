import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { templates } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Templates",
  description: "Real estate templates and scripts for realtors, from Natalie Pilkinton.",
  path: "/resources/templates",
});

export default function TemplatesPage() {
  return (
    <ResourceListPage
      title="Templates"
      subheading="Templates and scripts to run a consistent, scalable business"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Templates", path: "/resources/templates" }]}
      items={templates}
    />
  );
}
