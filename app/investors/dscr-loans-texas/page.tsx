import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { dscrGuide } from "@/lib/content/academy/investors";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${dscrGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: dscrGuide.metaDescription,
  path: dscrGuide.path,
});

export default function DscrLoansPage() {
  return <AcademyGuidePage guide={dscrGuide} />;
}
