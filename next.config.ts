import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enables real Next/Image optimization (resize + AVIF/WebP) for the
    // legacy site's CDN-hosted logo/headshot instead of serving them raw.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
    ],
    // Only for our own trusted, same-origin placeholder graphics under
    // /public/listings (sandboxed CSP per Next's documented pattern) — not
    // a blanket allowance for untrusted/user-supplied SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
