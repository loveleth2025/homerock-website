import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = {
  children: ReactNode;
  featured?: boolean;
  className?: string;
};

// One hover treatment (lift + shadow + gold border) shared by every card
// variant in the site (Resource/Video/Webinar/plain), so no card ever feels
// like it belongs to a different component library.
export function Card({ children, featured, className }: CardProps) {
  return (
    <div
      className={cn(
        "h-full flex flex-col bg-white border border-gray-light rounded-xs p-lg",
        "transition-all duration-200 ease-out",
        "hover:shadow-brand-lg hover:border-gold hover:-translate-y-0.5",
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
    <div className={cn("text-xs uppercase tracking-[0.1em] text-gold font-semibold mb-xs", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h4 className={cn("font-serif text-xl leading-snug text-navy mb-sm mt-0", className)}>{children}</h4>
  );
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm leading-relaxed text-gray-dark mb-md flex-1", className)}>{children}</p>
  );
}
