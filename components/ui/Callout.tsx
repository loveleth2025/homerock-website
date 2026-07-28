import { type ReactNode } from "react";

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-cream border-l-4 border-gold p-lg my-xl rounded-[2px]">
      <div className="font-semibold text-navy mb-md">{title}</div>
      {children}
    </div>
  );
}
