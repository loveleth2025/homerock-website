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
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name} | ${siteConfig.brand}`,
      images: [{ url: ogImage, alt: `${siteConfig.name} — ${siteConfig.brand}` }],
      locale: "en_US",
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
