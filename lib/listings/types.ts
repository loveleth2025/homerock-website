export type ListingStatus = "Active" | "Pending" | "Sold" | "Coming Soon";

export type ListingImage = {
  url: string;
  alt: string;
};

export type ListingAddress = {
  street: string;
  unit?: string;
  city: string;
  state: string;
  zip: string;
};

/**
 * The canonical shape of a single listing, regardless of where it came from.
 * Every field here is what components are typed against — components never
 * see raw JSON. When this site connects to a real IDX feed, only
 * `lib/listings/index.ts` needs to change; this type (and everything built
 * on it) stays the same as long as the feed is mapped into this shape.
 */
export type Listing = {
  slug: string;
  status: ListingStatus;
  /** Show on the Featured Listings hub's top section. */
  featured?: boolean;

  price: number;
  address: ListingAddress;

  beds: number;
  baths: number;
  sqft: number;
  yearBuilt?: number;
  lotSizeSqft?: number;

  /** MLS number, shown for buyer/agent cross-reference — not the same as the HAR URL. */
  mlsNumber?: string;

  /** One or two sentences, used on the Listing Card. */
  shortDescription: string;

  /** Full property description, one string per paragraph. */
  description: string[];
  /** Neighborhood context, one string per paragraph. */
  neighborhoodOverview: string[];
  /** "Who this home is right for" — one string per paragraph. */
  buyerProfile: string[];

  /** First image is used as the card/gallery hero. */
  images: ListingImage[];

  /**
   * Required on every listing. The "View Official HAR MLS Listing" button
   * always links here — this is the source of truth for the transaction,
   * this site only educates and captures interest.
   */
  harMlsUrl: string;
};
