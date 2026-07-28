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
        "hidden lg:flex gap-lg list-none items-center",
        mobileOpen &&
          "max-lg:flex max-lg:flex-col max-lg:fixed max-lg:top-[60px] max-lg:left-0 max-lg:right-0 max-lg:bg-white max-lg:border-b max-lg:border-gray-light max-lg:p-lg max-lg:gap-xs max-lg:z-[999] max-lg:shadow-brand-md max-lg:max-h-[calc(100vh-60px)] max-lg:overflow-y-auto max-lg:animate-[fade-in_0.15s_ease-out]",
      )}
    >
      {primaryNav.map((item: NavItem) => {
        const active = isActive(pathname, item);
        const open = openSubmenu === item.href;

        return (
          <li
            key={item.href}
            className="relative group max-lg:w-full max-lg:border-b max-lg:border-gray-light max-lg:last:border-b-0"
          >
            {item.children ? (
              <>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open}
                  className={cn(
                    "flex w-full items-center justify-between gap-xs text-sm font-medium py-md lg:py-2 transition-colors cursor-pointer bg-transparent border-0",
                    active ? "text-navy font-semibold" : "text-navy/90 hover:text-gold-ink",
                  )}
                  onClick={() => onToggleSubmenu(item.href)}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "text-xs transition-transform duration-200",
                      "lg:group-hover:rotate-180 lg:group-focus-within:rotate-180",
                      open && "rotate-180",
                    )}
                  >
                    ▾
                  </span>
                </button>
                <ul
                  className={cn(
                    "lg:absolute lg:top-full lg:left-0 lg:mt-xs lg:min-w-[240px] lg:bg-white lg:border lg:border-gray-light lg:shadow-brand-lg lg:rounded-xs lg:py-sm",
                    "lg:opacity-0 lg:invisible lg:-translate-y-1",
                    "lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0",
                    "lg:group-focus-within:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0",
                    "lg:transition-all lg:duration-150 lg:ease-out",
                    "max-lg:pl-md max-lg:pb-sm list-none",
                    open ? "max-lg:block lg:opacity-100 lg:visible lg:translate-y-0" : "max-lg:hidden",
                  )}
                >
                  <li className="max-lg:hidden lg:block">
                    <Link
                      href={item.href}
                      className="block px-md py-sm text-sm text-navy hover:text-gold-ink hover:bg-cream transition-colors font-semibold border-b border-gray-light mb-xs"
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
                            ? "text-gold-ink font-semibold bg-cream"
                            : "text-navy hover:text-gold-ink hover:bg-cream",
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
                  "block text-sm font-medium py-md lg:py-2 transition-colors relative",
                  "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gold-ink after:transition-[width] after:duration-200",
                  active ? "text-navy font-semibold after:w-full" : "text-navy/90 hover:text-gold-ink after:w-0 hover:after:w-full",
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
