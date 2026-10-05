import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { privateLendingGuide } from "@/lib/content/academy/investors";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${privateLendingGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: privateLendingGuide.metaDescription,
  path: privateLendingGuide.path,
});

export default function PrivateLendingPage() {
  return <AcademyGuidePage guide={privateLendingGuide} />;
}
