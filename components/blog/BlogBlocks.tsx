import { cn } from "@/lib/utils/cn";
import type {
  StatsBlock,
  PullquoteBlock,
  NeighborhoodsBlock,
  CompareBlock,
  TakeawaysBlock,
} from "@/lib/content/blog";

const trendColor: Record<NonNullable<StatsBlock["items"][number]["direction"]>, string> = {
  up: "text-emerald-700",
  down: "text-red-700",
  flat: "text-gray-dark",
};

const trendGlyph: Record<NonNullable<StatsBlock["items"][number]["direction"]>, string> = {
  up: "▲",
  down: "▼",
  flat: "—",
};

export function StatsGrid({ items }: { items: StatsBlock["items"] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-md my-xl">
      {items.map((stat) => (
        <div
          key={stat.label}
          className="bg-cream border border-gray-light rounded-xs p-md text-center"
        >
          <div className="text-xs uppercase tracking-[0.08em] text-gold-ink font-semibold mb-xs">
            {stat.label}
          </div>
          <div className="font-serif text-2xl text-navy font-bold leading-tight">
            {stat.value}
          </div>
          {stat.trend && (
            <div className={cn("text-xs font-semibold mt-xs", trendColor[stat.direction ?? "flat"])}>
              {trendGlyph[stat.direction ?? "flat"]} {stat.trend}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Pullquote({ quote }: { quote: PullquoteBlock["quote"] }) {
  return (
    <blockquote className="bg-cream border-l-4 border-gold rounded-xs px-lg py-md my-xl font-serif italic text-xl text-navy leading-relaxed">
      {quote}
    </blockquote>
  );
}

const statusStyles: Record<NonNullable<NeighborhoodsBlock["items"][number]["status"]>, string> = {
  growing: "bg-emerald-50 text-emerald-800",
  stable: "bg-gold/10 text-gold-ink",
  cooling: "bg-red-50 text-red-800",
};

export function NeighborhoodSpotlight({ items }: { items: NeighborhoodsBlock["items"] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-xl">
      {items.map((n) => (
        <div key={n.name} className="bg-white border border-gray-light rounded-xs p-lg text-center">
          <div className="font-serif text-lg text-navy font-bold mb-xs">{n.name}</div>
          <div className="text-sm text-gray-dark mb-sm">{n.price}</div>
          <span
            className={cn(
              "inline-block text-xs uppercase tracking-[0.05em] font-semibold px-sm py-xs rounded-full",
              statusStyles[n.status],
            )}
          >
            {n.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export function BuyerSellerCompare({ columns }: { columns: CompareBlock["columns"] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-xl">
      {columns.map((col) => {
        const dark = col.variant === "dark";
        return (
          <div
            key={col.heading}
            className={cn(
              "rounded-xs p-lg",
              dark ? "bg-navy text-cream" : "bg-cream border border-gray-light text-ink",
            )}
          >
            <h4
              className={cn(
                "text-xs uppercase tracking-[0.08em] font-semibold mb-md",
                dark ? "text-gold" : "text-gold-ink",
              )}
            >
              {col.heading}
            </h4>
            <ul className="space-y-sm text-sm leading-relaxed list-disc pl-lg">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function Takeaways({ heading, items }: { heading?: TakeawaysBlock["heading"]; items: TakeawaysBlock["items"] }) {
  return (
    <div className="bg-navy rounded-xs p-lg my-xl">
      <h3 className="text-xs uppercase tracking-[0.08em] text-gold font-semibold mb-md">
        {heading ?? "Key Takeaways"}
      </h3>
      <ul className="space-y-sm text-sm text-cream leading-relaxed list-disc pl-lg">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
