import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { marketUpdates } from "@/lib/content/market-updates";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return marketUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const update = marketUpdates.find((item) => item.slug === slug);
  if (!update) return buildMetadata({ title: "Market Update Not Found", description: "", path: "/market-updates" });
  return buildMetadata({ title: update.title, description: update.summary, path: `/market-updates/${update.slug}` });
}

/** No market updates are published yet — every slug 404s until real content exists. */
export default async function MarketUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = marketUpdates.find((item) => item.slug === slug);
  if (!update) notFound();
  return null;
}
