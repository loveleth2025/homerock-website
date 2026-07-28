"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, type NavItem } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type NavigationProps = {
  mobileOpen: boolean;
  openSubmenu: string | null;
  onToggleSubmenu: (href: string) => void;
  onNavigate: () => void;
};

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return item.children?.some((child) => pathname === child.href) ?? false;
}

export function Navigation({ mobileOpen, openSubmenu, onToggleSubmenu, onNavigate }: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul
      id="primary-navigation"
      className={cn(
        "hidden md:flex gap-lg list-none items-center",
        mobileOpen &&
          "max-md:flex max-md:flex-col max-md:fixed max-md:top-[60px] max-md:left-0 max-md:right-0 max-md:bg-white max-md:border-b max-md:border-gray-light max-md:p-lg max-md:gap-xs max-md:z-[999] max-md:shadow-brand-md max-md:max-h-[calc(100vh-60px)] max-md:overflow-y-auto max-md:animate-[fade-in_0.15s_ease-out]",
      )}
    >
      {primaryNav.map((item: NavItem) => {
        const active = isActive(pathname, item);
        const open = openSubmenu === item.href;

        return (
          <li
            key={item.href}
            className="relative group max-md:w-full max-md:border-b max-md:border-gray-light max-md:last:border-b-0"
          >
            {item.children ? (
              <>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open}
                  className={cn(
                    "flex w-full items-center justify-between gap-xs text-sm font-medium py-md md:py-2 transition-colors cursor-pointer bg-transparent border-0",
                    active ? "text-navy font-semibold" : "text-navy/90 hover:text-gold",
                  )}
                  onClick={() => onToggleSubmenu(item.href)}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "text-xs transition-transform duration-200",
                      "md:group-hover:rotate-180 md:group-focus-within:rotate-180",
                      open && "rotate-180",
                    )}
                  >
                    ▾
                  </span>
                </button>
                <ul
                  className={cn(
                    "md:absolute md:top-full md:left-0 md:mt-xs md:min-w-[240px] md:bg-white md:border md:border-gray-light md:shadow-brand-lg md:rounded-xs md:py-sm",
                    "md:opacity-0 md:invisible md:-translate-y-1",
                    "md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0",
                    "md:group-focus-within:opacity-100 md:group-focus-within:visible md:group-focus-within:translate-y-0",
                    "md:transition-all md:duration-150 md:ease-out",
                    "max-md:pl-md max-md:pb-sm list-none",
                    open ? "max-md:block md:opacity-100 md:visible md:translate-y-0" : "max-md:hidden",
                  )}
                >
                  <li className="max-md:hidden md:block">
                    <Link
                      href={item.href}
                      className="block px-md py-sm text-sm text-navy hover:text-gold hover:bg-cream transition-colors font-semibold border-b border-gray-light mb-xs"
                      onClick={onNavigate}
                    >
                      {item.label} Overview
                    </Link>
                  </li>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={pathname === child.href ? "page" : undefined}
                        className={cn(
                          "block px-md py-sm text-sm transition-colors",
                          pathname === child.href
                            ? "text-gold font-semibold bg-cream"
                            : "text-navy hover:text-gold hover:bg-cream",
                        )}
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
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block text-sm font-medium py-md md:py-2 transition-colors relative",
                  "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-200",
                  active ? "text-navy font-semibold after:w-full" : "text-navy/90 hover:text-gold after:w-0 hover:after:w-full",
                )}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
