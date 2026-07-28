"use client";

import Link from "next/link";
import { primaryNav, type NavItem } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type NavigationProps = {
  mobileOpen: boolean;
  openSubmenu: string | null;
  onToggleSubmenu: (href: string) => void;
  onNavigate: () => void;
};

export function Navigation({ mobileOpen, openSubmenu, onToggleSubmenu, onNavigate }: NavigationProps) {
  return (
    <ul
      className={cn(
        "hidden md:flex gap-xl list-none items-center",
        mobileOpen &&
          "max-md:flex max-md:flex-col max-md:fixed max-md:top-[60px] max-md:left-0 max-md:right-0 max-md:bg-white max-md:border-b max-md:border-gray-light max-md:p-lg max-md:gap-md max-md:z-[999] max-md:shadow-brand-md max-md:max-h-[calc(100vh-60px)] max-md:overflow-y-auto",
      )}
    >
      {primaryNav.map((item: NavItem) => (
        <li
          key={item.href}
          className="relative group max-md:w-full max-md:border-b max-md:border-gray-light max-md:last:border-b-0"
        >
          {item.children ? (
            <>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-xs text-sm font-medium text-navy py-md md:py-0 hover:text-gold transition-colors cursor-pointer bg-transparent border-0"
                onClick={() => onToggleSubmenu(item.href)}
              >
                {item.label}
                <span aria-hidden className="text-xs">▾</span>
              </button>
              <ul
                className={cn(
                  "md:absolute md:top-full md:left-0 md:mt-sm md:min-w-[220px] md:bg-white md:border md:border-gray-light md:shadow-brand-md md:rounded-[2px] md:py-sm md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:transition-all",
                  "max-md:pl-md max-md:pb-sm list-none",
                  openSubmenu === item.href ? "max-md:block" : "max-md:hidden",
                )}
              >
                <li className="max-md:hidden md:block">
                  <Link
                    href={item.href}
                    className="block px-md py-sm text-sm text-navy hover:text-gold hover:bg-cream transition-colors font-semibold"
                    onClick={onNavigate}
                  >
                    {item.label} Overview
                  </Link>
                </li>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="block px-md py-sm text-sm text-navy hover:text-gold hover:bg-cream transition-colors"
                      onClick={onNavigate}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={item.href}
              className="block text-sm font-medium text-navy py-md md:py-0 hover:text-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-[width] hover:after:w-full"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
