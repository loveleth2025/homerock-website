import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/navigation";
import { jsonLdScriptProps, localBusinessSchema, personSchema, websiteSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Natalie Pilkinton, Houston REALTOR® | Home Buyers, Sellers & Investors | Spring TX",
    template: `%s | ${siteConfig.name} - ${siteConfig.brand}`,
  },
  description: "Houston REALTOR® Natalie Pilkinton guides buyers, sellers & investors through Texas real estate. Specializing in Spring, The Woodlands, Katy & more. Schedule your free consultation today. Call (832) 863-3468.",
  keywords: "Houston REALTOR, Houston real estate agent, buy home Spring TX, sell home Houston, real estate investing Houston, HomeRock Realty",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.brand,
  
  // OpenGraph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} - ${siteConfig.brand}`,
    title: "Natalie Pilkinton, Houston REALTOR® | Home Buyers, Sellers & Investors",
    description: "Houston REALTOR® Natalie Pilkinton guides buyers, sellers & investors through Texas real estate.",
    images: [
      {
        url: "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58be7f524a3ec4c61853f3.png",
        width: 1200,
        height: 630,
        alt: "Natalie Pilkinton - Houston REALTOR®",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Natalie Pilkinton, Houston REALTOR®",
    description: "Expert real estate guidance for buyers, sellers & investors.",
    images: ["https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58be7f524a3ec4c61853f3.png"],
  },
  
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
      <head>
        {/* Canonical */}
        <link rel="canonical" href={siteConfig.siteUrl} />
        
        {/* Schema Markup */}
        <script {...jsonLdScriptProps(localBusinessSchema())} />
        <script {...jsonLdScriptProps(personSchema())} />
        <script {...jsonLdScriptProps(websiteSchema())} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}