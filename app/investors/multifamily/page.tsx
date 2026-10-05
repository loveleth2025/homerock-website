import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { multifamilyGuide } from "@/lib/content/academy/investors-advanced";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${multifamilyGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: multifamilyGuide.metaDescription,
  path: multifamilyGuide.path,
});

export default function MultifamilyPage() {
  return <AcademyGuidePage guide={multifamilyGuide} />;
}
