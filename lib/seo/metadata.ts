import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/navigation";
import { isPlaceholderPath } from "@/lib/seo/placeholders";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Keep the page out of search results (e.g. a placeholder awaiting real content). */
  noindex?: boolean;
  /** Use the title exactly as given, without the sitewide "| Natalie Pilkinton - HomeRock Realty" suffix. */
  absoluteTitle?: boolean;
};

/** Builds consistent per-page <title>/description/OG/Twitter metadata. */
export function buildMetadata({ title, description, path, image, noindex = false, absoluteTitle = false }: PageMetadataInput): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const hidden = noindex || isPlaceholderPath(path);
  const ogImage = image ?? siteConfig.headshotUrl;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: {
      index: !hidden,
      follow: true,
      googleBot: { index: !hidden, follow: true },
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
