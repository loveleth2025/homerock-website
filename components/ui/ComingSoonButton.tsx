/**
 * Disabled placeholder for a tool/module that isn't built yet — used on card
 * grids across the Academy hubs and Resource lists. One definition instead
 * of five copies so the "not yet available" affordance stays visually and
 * semantically consistent everywhere it appears.
 */
export function ComingSoonButton() {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="px-md py-sm min-h-11 text-sm font-semibold border border-navy text-navy rounded-xs opacity-60 cursor-not-allowed"
    >
      Coming Soon
    </button>
  );
}
