import fs from "node:fs";
import path from "node:path";
import type { Listing } from "./types";

const LISTINGS_DIR = path.join(process.cwd(), "content", "listings");

/**
 * Single seam for where listing data comes from.
 *
 * Today this reads one JSON file per listing from /content/listings — drop
 * a new file in, no component changes needed. Later, when this connects to
 * a real IDX feed or listing-sync pipeline, only the body of this function
 * changes (e.g. call the IDX API / read a synced cache instead of the
 * filesystem) — as long as it keeps returning `Listing[]`, every component
 * downstream (ListingCard, ListingDetail, the /listings routes) needs zero
 * changes.
 */
function readAllListings(): Listing[] {
  if (!fs.existsSync(LISTINGS_DIR)) return [];

  const files = fs.readdirSync(LISTINGS_DIR).filter((file) => file.endsWith(".json"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(LISTINGS_DIR, file), "utf-8");
      return JSON.parse(raw) as Listing;
    })
    .sort((a, b) => a.price - b.price);
}

export function getAllListings(): Listing[] {
  return readAllListings();
}

export function getActiveListings(): Listing[] {
  return readAllListings().filter((listing) => listing.status === "Active");
}

export function getFeaturedListings(): Listing[] {
  return readAllListings().filter((listing) => listing.featured && listing.status === "Active");
}

export function getListingBySlug(slug: string): Listing | undefined {
  return readAllListings().find((listing) => listing.slug === slug);
}

export function getListingSlugs(): string[] {
  return readAllListings().map((listing) => listing.slug);
}
