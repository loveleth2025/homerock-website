import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/navigation";
import { jsonLdScriptProps, localBusinessSchema, personSchema, websiteSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Natalie Pilkinton | Educational Authority for Home Buyers, Sellers & Investors",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Texas Realtor, real estate investor, and educator Natalie Pilkinton of HomeRock Realty teaches home buyers, sellers, investors, and realtors through guides, courses, and her podcast.",
  icons: {
    icon: siteConfig.faviconUrl,
    apple: siteConfig.faviconUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1a33",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script {...jsonLdScriptProps(localBusinessSchema())} />
        <script {...jsonLdScriptProps(personSchema())} />
        <script {...jsonLdScriptProps(websiteSchema())} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
