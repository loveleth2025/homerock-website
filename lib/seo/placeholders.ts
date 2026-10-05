/**
 * Pages that still render PlaceholderPage ("Content Pending"). While listed here
 * they are noindexed and left out of the sitemap. Remove a path the moment its
 * real content ships.
 */
export const placeholderPaths = [
  "/buyers/relocation",
  "/sellers/pricing",
  "/sellers/marketing",
  "/sellers/staging",
  "/investors/passive",
  "/investors/multifamily",
  "/investors/case-studies",
] as const;

export function isPlaceholderPath(path: string): boolean {
  return (placeholderPaths as readonly string[]).includes(path);
}
