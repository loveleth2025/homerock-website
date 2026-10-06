import type { Metadata } from "next";
import { AcademyGuidePage } from "@/components/content/AcademyGuidePage";
import { creditGuide } from "@/lib/content/academy/buyers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${creditGuide.metaTitle} | Natalie Pilkinton`,
  absoluteTitle: true,
  description: creditGuide.metaDescription,
  path: creditGuide.path,
});

export default function CreditPage() {
  return <AcademyGuidePage guide={creditGuide} />;
}
