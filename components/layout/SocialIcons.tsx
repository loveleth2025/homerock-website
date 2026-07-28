import { siteConfig } from "@/lib/data/navigation";

const icons = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    path: "M13.5 21v-7.5H16l.5-3H13.5V8.25c0-.87.24-1.46 1.49-1.46H16.6V4.14C16.34 4.1 15.46 4 14.44 4c-2.13 0-3.59 1.3-3.59 3.69V10.5H8.3v3h2.55V21h2.65z",
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    path: "M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 6.19a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88zM16.9 4H7.1A3.1 3.1 0 0 0 4 7.1v9.8A3.1 3.1 0 0 0 7.1 20h9.8a3.1 3.1 0 0 0 3.1-3.1V7.1A3.1 3.1 0 0 0 16.9 4zm1.85 12.9c0 1.02-.83 1.85-1.85 1.85H7.1a1.85 1.85 0 0 1-1.85-1.85V7.1c0-1.02.83-1.85 1.85-1.85h9.8c1.02 0 1.85.83 1.85 1.85v9.8zM17.1 7.65a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M6.94 8.5H4.56V19h2.38V8.5zM5.75 4a1.38 1.38 0 1 0 0 2.76A1.38 1.38 0 0 0 5.75 4zM19.5 12.9c0-2.6-1.39-3.81-3.24-3.81-1.5 0-2.17.83-2.54 1.4v-1.2h-2.38c.03.68 0 10.71 0 10.71h2.38v-5.98c0-.32.02-.64.12-.87.25-.64.83-1.3 1.8-1.3 1.27 0 1.78.97 1.78 2.38V19h2.38v-6.1z",
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    path: "M21.6 7.5s-.21-1.47-.85-2.12c-.82-.85-1.73-.86-2.15-.91C15.6 4.25 12 4.25 12 4.25h-.01s-3.6 0-6.6.22c-.42.05-1.33.06-2.15.91-.64.65-.85 2.12-.85 2.12S2.18 9.24 2.18 11v1.49c0 1.76.21 3.51.21 3.51s.21 1.47.85 2.12c.82.85 1.9.82 2.38.91C7.4 19.24 12 19.29 12 19.29s3.61-.01 6.6-.22c.42-.05 1.33-.06 2.15-.91.64-.65.85-2.12.85-2.12s.21-1.75.21-3.51V11c0-1.76-.21-3.5-.21-3.5zM9.98 14.5v-5l4.83 2.51-4.83 2.49z",
  },
];

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${siteConfig.name} on ${icon.label} (opens in a new tab)`}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-cream hover:bg-gold hover:text-navy hover:border-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
