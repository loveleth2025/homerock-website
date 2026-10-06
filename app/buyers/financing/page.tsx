import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { financingGuide } from "@/lib/content/academy/buyers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${financingGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: financingGuide.metaDescription,
  path: financingGuide.path,
});

export default function FinancingPage() {
  return <AcademyGuidePage guide={financingGuide} />;
}
