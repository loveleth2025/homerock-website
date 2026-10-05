import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { beginnerGuide } from "@/lib/content/academy/investors";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${beginnerGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: beginnerGuide.metaDescription,
  path: beginnerGuide.path,
});

export default function BeginnerInvestingPage() {
  return <AcademyGuidePage guide={beginnerGuide} />;
}
