import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { ListingDetail } from "@/components/listings/ListingDetail";
import { getListingBySlug, getListingSlugs } from "@/lib/listings";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, listingSchema } from "@/lib/seo/schema";
import { formatPrice } from "@/lib/utils/formatPrice";

export function generateStaticParams() {
  return getListingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return buildMetadata({ title: "Listing Not Found", description: "", path: "/listings" });

  return buildMetadata({
    title: `${listing.address.street}, ${listing.address.city} — ${formatPrice(listing.price)}`,
    description: listing.shortDescription,
    path: `/listings/${listing.slug}`,
    image: listing.images[0]?.url,
  });
}

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  return (
    <>
      <script {...jsonLdScriptProps(listingSchema(listing))} />

      <BreadcrumbBar
        items={[
          { name: "Featured Listings", path: "/listings" },
          { name: `${listing.address.street}, ${listing.address.city}`, path: `/listings/${listing.slug}` },
        ]}
      />

      <ListingDetail listing={listing} />
    </>
  );
}
