import Link from "next/link";

export type PodcastCardProps = {
  title: string;
  href: string;
};

/** The compact episode-list link style used on the legacy Watch/Podcast page. */
export function PodcastCard({ title, href }: PodcastCardProps) {
  return (
    <Link
      href={href}
      className="block p-md bg-cream rounded-[4px] font-semibold text-navy border border-gold transition-all hover:bg-gold hover:text-white hover:translate-x-1"
    >
      {title}
    </Link>
  );
}
