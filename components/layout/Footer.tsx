import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/lib/data/navigation";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { Newsletter } from "@/components/forms/Newsletter";

const columns = [footerNav.learning, footerNav.resources, footerNav.company, footerNav.connect];

export function Footer() {
  return (
    <footer className="bg-navy text-cream mt-3xl">
      <Container>
        {/* Brand + newsletter band */}
        <div className="grid grid-cols-[1.4fr_1fr] max-lg:grid-cols-1 gap-2xl py-2xl border-b border-white/10">
          <div>
            <Link href="/" className="inline-flex items-center mb-md bg-white rounded-xs px-sm py-xs">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.logoAlt}
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-cream/80 text-sm max-w-sm mb-lg">
              Texas Realtor, real estate investor, and educator helping buyers, sellers, investors, and
              agents build real estate wealth with confidence.
            </p>
            <SocialIcons className="flex gap-sm" />
          </div>

          <div className="lg:justify-self-end w-full max-w-sm">
            <h4 className="text-white mb-sm">Stay in the Loop</h4>
            <p className="text-cream/70 text-sm mb-md">
              Market updates and real estate education, straight to your inbox.
            </p>
            <Newsletter />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-2xl py-2xl">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white text-sm uppercase tracking-[0.08em] mb-lg">{column.title}</h4>
              <ul className="list-none space-y-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/85 text-sm hover:text-gold transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-lg pb-lg flex justify-between items-center text-sm text-cream/70 max-md:flex-col max-md:gap-md max-md:text-center">
          <div>&copy; {new Date().getFullYear()} Natalie Pilkinton | HomeRock Realty. All rights reserved.</div>
          <div className="flex gap-lg">
            <Link href="/privacy-policy" className="text-cream/70 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-cream/70 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
