import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/lib/listings/types";
import { PropertyFacts } from "@/components/listings/PropertyFacts";
import { formatPrice } from "@/lib/utils/formatPrice";

const statusClasses: Record<Listing["status"], string> = {
  Active: "bg-gold text-navy",
  Pending: "bg-gray-medium text-navy",
  Sold: "bg-navy text-white",
  "Coming Soon": "bg-cream text-navy border border-gold",
};

export function ListingCard({ listing }: { listing: Listing }) {
  const hero = listing.images[0];

  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group h-full flex flex-col bg-white border border-gray-light rounded-xs overflow-hidden transition-all duration-200 ease-out hover:shadow-brand-lg hover:border-gold hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] bg-gray-light overflow-hidden">
        {hero && (
          <Image
            src={hero.url}
            alt={hero.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <span
          className={`absolute top-sm left-sm px-sm py-1 rounded-xs text-xs font-semibold uppercase tracking-[0.06em] ${statusClasses[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-lg">
        <div className="text-2xl font-serif text-navy mb-xs">{formatPrice(listing.price)}</div>
        <div className="text-sm text-gray-dark mb-md">
          {listing.address.street}
          {listing.address.unit ? `, ${listing.address.unit}` : ""}
          <br />
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </div>

        <div className="mb-md">
          <PropertyFacts beds={listing.beds} baths={listing.baths} sqft={listing.sqft} />
        </div>

        <p className="text-sm leading-relaxed text-gray-dark mb-md flex-1">{listing.shortDescription}</p>

        <span className="inline-flex items-center gap-xs text-sm font-semibold text-navy group-hover:text-gold-ink transition-colors">
          View Details
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
