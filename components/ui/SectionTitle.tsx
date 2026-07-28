import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionTitleProps = {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, children, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.1em] text-gold font-semibold mb-sm">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-0 mb-lg">{children}</h2>
    </div>
  );
}
