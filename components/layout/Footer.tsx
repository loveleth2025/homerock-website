import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/lib/data/navigation";

const columns = [footerNav.learning, footerNav.resources, footerNav.company, footerNav.connect];

export function Footer() {
  return (
    <footer className="bg-navy text-cream mt-3xl">
      <Container>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-2xl py-2xl">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white mb-lg">{column.title}</h4>
              <ul className="list-none space-y-md">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream text-sm hover:text-gold transition-colors"
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
        <div className="border-t border-white/10 pt-lg pb-lg flex justify-between items-center text-sm max-md:flex-col max-md:gap-lg">
          <div>&copy; {new Date().getFullYear()} Natalie Pilkinton | HomeRock Realty. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
}
