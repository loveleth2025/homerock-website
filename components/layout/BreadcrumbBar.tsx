import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";

/** The cream breadcrumb strip that sits directly under the header on inner pages. */
export function BreadcrumbBar({ items }: { items: Crumb[] }) {
  return (
    <div className="bg-cream border-b border-gray-light py-md">
      <Container>
        <Breadcrumbs items={items} />
      </Container>
    </div>
  );
}
