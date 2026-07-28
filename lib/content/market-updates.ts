export type MarketUpdate = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

/**
 * No market updates exist yet in the Natalie Knowledge Base. This array is
 * intentionally empty rather than seeded with invented data — populate it as
 * real, dated market updates become available.
 */
export const marketUpdates: MarketUpdate[] = [];
