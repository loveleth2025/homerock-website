import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("w-full max-w-[80rem] mx-auto px-lg", className)}>{children}</div>;
}
