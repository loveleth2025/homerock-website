import type { Stat } from "@/lib/data/stats";

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-xl max-md:gap-md text-center my-2xl max-md:my-xl bg-navy rounded-xs p-2xl max-md:p-lg">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl max-md:text-2xl text-gold mb-md max-md:mb-sm">{stat.value}</h3>
          <p className="text-cream text-sm max-md:text-xs mb-0">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
