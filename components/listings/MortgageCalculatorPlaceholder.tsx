import { formatPrice } from "@/lib/utils/formatPrice";

/**
 * Non-functional placeholder — mirrors the "Coming Soon" tool cards already
 * used on /investors and /resources/calculators. Swap for a real calculator
 * component later without touching the surrounding ListingDetail layout.
 */
export function MortgageCalculatorPlaceholder({ price }: { price: number }) {
  return (
    <div className="border-2 border-dashed border-gray-medium bg-gray-light rounded-xs p-lg">
      <div className="flex items-center justify-between gap-md mb-md flex-wrap">
        <h3 className="mt-0 mb-0">Estimate Your Monthly Payment</h3>
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-dark bg-white border border-gray-medium rounded-xs px-sm py-1">
          Coming Soon
        </span>
      </div>
      <p className="text-sm text-gray-dark mb-0">
        A mortgage calculator for this {formatPrice(price)} listing (principal, interest, taxes, and
        insurance) will go here.
      </p>
    </div>
  );
}
