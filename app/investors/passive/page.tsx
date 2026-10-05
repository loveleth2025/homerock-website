import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { passiveGuide } from "@/lib/content/academy/investors-advanced";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${passiveGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: passiveGuide.metaDescription,
  path: passiveGuide.path,
});

export default function PassiveInvestingPage() {
  return <AcademyGuidePage guide={passiveGuide} />;
}
