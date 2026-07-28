type PropertyFactsProps = {
  beds: number;
  baths: number;
  sqft: number;
  /** Compact spacing/type for cards; roomier for the detail page. */
  size?: "sm" | "lg";
};

function formatBaths(baths: number) {
  return Number.isInteger(baths) ? String(baths) : baths.toFixed(1);
}

export function PropertyFacts({ beds, baths, sqft, size = "sm" }: PropertyFactsProps) {
  const facts = [
    { label: "Beds", value: beds },
    { label: "Baths", value: formatBaths(baths) },
    { label: "Sq Ft", value: sqft.toLocaleString() },
  ];

  return (
    <dl className={size === "lg" ? "flex gap-xl" : "flex gap-lg"}>
      {facts.map((fact) => (
        <div key={fact.label}>
          <dd className={size === "lg" ? "text-2xl font-serif text-navy mb-0" : "text-lg font-serif text-navy mb-0"}>
            {fact.value}
          </dd>
          <dt className="text-xs font-sans font-normal uppercase tracking-[0.08em] text-gray-dark">
            {fact.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
