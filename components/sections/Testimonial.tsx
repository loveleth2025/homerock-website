import type { Testimonial as TestimonialType } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils/cn";

export function Testimonial({ text, author, role, onWhite }: TestimonialType & { onWhite?: boolean }) {
  return (
    <div
      className={cn(
        "bg-navy text-white p-xl mb-lg rounded-xs border-l-4 border-gold",
        onWhite && "bg-white text-ink border border-gray-light border-l-4 border-l-gold",
      )}
    >
      <div className={cn("text-lg italic leading-relaxed mb-lg", onWhite ? "text-ink" : "text-white")}>
        &ldquo;{text}&rdquo;
      </div>
      <div className={cn("font-semibold mb-xs", onWhite ? "text-gold-ink" : "text-gold")}>{author}</div>
      <div className={cn("text-sm", onWhite ? "text-gray-dark" : "text-white/70")}>{role}</div>
    </div>
  );
}

export function TestimonialGrid({ items, onWhite }: { items: TestimonialType[]; onWhite?: boolean }) {
  return (
    <div className="max-w-[48rem] mx-auto">
      {items.map((item) => (
        <Testimonial key={item.author} {...item} onWhite={onWhite} />
      ))}
    </div>
  );
}
