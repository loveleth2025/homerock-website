import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { brrrrGuide } from "@/lib/content/academy/investors";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${brrrrGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: brrrrGuide.metaDescription,
  path: brrrrGuide.path,
});

export default function BrrrrPage() {
  return <AcademyGuidePage guide={brrrrGuide} />;
}
