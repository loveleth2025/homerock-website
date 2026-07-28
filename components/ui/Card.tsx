import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = {
  children: ReactNode;
  featured?: boolean;
  className?: string;
};

export function Card({ children, featured, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-light rounded-[2px] p-lg transition-all duration-200",
        "hover:shadow-brand-lg hover:border-gold",
        featured && "border-l-4 border-l-gold pl-[calc(var(--spacing-lg)-4px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardCategory({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("text-xs uppercase tracking-[0.1em] text-gold font-semibold", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h4 className={cn("font-serif text-xl text-navy mb-md mt-sm", className)}>{children}</h4>
  );
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm leading-relaxed text-gray-dark mb-md", className)}>{children}</p>
  );
}
