import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { closingCostsGuide } from "@/lib/content/academy/buyers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${closingCostsGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: closingCostsGuide.metaDescription,
  path: closingCostsGuide.path,
});

export default function ClosingCostsTexasPage() {
  return <AcademyGuidePage guide={closingCostsGuide} />;
}
