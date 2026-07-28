import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { downloads } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Downloads",
  description: "Downloadable real estate PDFs and worksheets from Natalie Pilkinton.",
  path: "/resources/downloads",
});

export default function DownloadsPage() {
  return (
    <ResourceListPage
      title="Downloads"
      subheading="PDFs and worksheets ready to save and print"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Downloads", path: "/resources/downloads" }]}
      items={downloads}
    />
  );
}
