import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The page used to live under this folder name while nav, sitemap and canonical all pointed at /agent-attraction.
      { source: "/realtors/agent-resources", destination: "/realtors/agent-attraction", permanent: true },
    ];
  },
    outputFileTracingIncludes: { "/api/blog/**": ["./public/blog-content/**/*"], },
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
