import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { guides } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Free Guides",
  description: "Free downloadable real estate guides from Natalie Pilkinton.",
  path: "/resources/guides",
});

export default function GuidesPage() {
  return (
    <ResourceListPage
      title="Free Guides"
      subheading="Downloadable guides for buyers, sellers, investors, and realtors"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Free Guides", path: "/resources/guides" }]}
      items={guides}
    />
  );
}
