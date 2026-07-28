import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/navigation";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Builds consistent per-page <title>/description/OG/Twitter metadata. */
export function buildMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const ogImage = image ?? siteConfig.headshotUrl;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name} | ${siteConfig.brand}`,
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
