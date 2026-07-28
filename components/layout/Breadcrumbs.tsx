import Link from "next/link";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";

export type Crumb = { name: string; path: string };

/** Renders visible breadcrumbs and their matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbSchema(trail))} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-dark mb-lg">
        <ol className="flex flex-wrap items-center gap-xs list-none">
          {trail.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-xs">
              {index > 0 && <span aria-hidden>/</span>}
              {index === trail.length - 1 ? (
                <span className="text-navy font-medium">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="hover:text-gold">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
