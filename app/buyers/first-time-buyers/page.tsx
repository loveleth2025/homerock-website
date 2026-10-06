import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { firstTimeBuyerGuide } from "@/lib/content/academy/buyers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${firstTimeBuyerGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: firstTimeBuyerGuide.metaDescription,
  path: firstTimeBuyerGuide.path,
});

export default function FirstTimeBuyersPage() {
  return <AcademyGuidePage guide={firstTimeBuyerGuide} />;
}
