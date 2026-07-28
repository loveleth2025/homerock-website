"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { MobileMenuToggle } from "@/components/layout/MobileMenuToggle";
import { Button } from "@/components/ui/Button";
import { bookingCta, siteConfig } from "@/lib/data/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) closeAll();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white border-b border-gray-light sticky top-0 z-[1000] shadow-brand-sm">
      <nav
        ref={navRef}
        className="max-w-[80rem] mx-auto px-lg py-lg flex justify-between items-center gap-md max-md:px-md max-md:py-md max-sm:flex-wrap max-sm:p-sm"
      >
        <Link href="/" onClick={closeAll} className="shrink-0">
          <Image
            src={siteConfig.logoUrl}
            alt={siteConfig.logoAlt}
            width={160}
            height={40}
            className="h-10 w-auto max-md:h-8 cursor-pointer transition-transform hover:scale-105"
            unoptimized
            priority
          />
        </Link>

        <Navigation
          mobileOpen={mobileOpen}
          openSubmenu={openSubmenu}
          onToggleSubmenu={(href) => setOpenSubmenu((cur) => (cur === href ? null : href))}
          onNavigate={closeAll}
        />

        <Button href={bookingCta.href} className="whitespace-nowrap max-sm:hidden" onClick={closeAll}>
          {bookingCta.label}
        </Button>

        <MobileMenuToggle active={mobileOpen} onClick={() => setMobileOpen((open) => !open)} />
      </nav>
    </header>
  );
}
