import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { howMuchMoneyGuide } from "@/lib/content/academy/buyers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${howMuchMoneyGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: howMuchMoneyGuide.metaDescription,
  path: howMuchMoneyGuide.path,
});

export default function HowMuchMoneyPage() {
  return <AcademyGuidePage guide={howMuchMoneyGuide} />;
}
