import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { checklists } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Checklists",
  description: "Home buying and selling checklists from Natalie Pilkinton.",
  path: "/resources/checklists",
});

export default function ChecklistsPage() {
  return (
    <ResourceListPage
      title="Checklists"
      subheading="Step-by-step checklists for buyers and sellers"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Checklists", path: "/resources/checklists" }]}
      items={checklists}
    />
  );
}
