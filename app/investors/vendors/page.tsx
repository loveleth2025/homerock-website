import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Investor-Friendly Vendors",
  description: "Vetted service providers trusted by our investor community.",
  path: "/investors/vendors",
});

export default function VendorDirectoryPage() {
  const vendors = [
    {
      category: "🔨 Contractors",
      vendor: "Bang It Services",
      contact: "Mike Villacis",
      website: "www.bangitservices.net",
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "💼 CPA/Business",
      vendor: "Douglas Business Solutions",
      contact: "Lisa Morton, Katie Shelton",
      website: "www.DouglasBs.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "🏠 Flooring",
      vendor: "Fantastic Floors",
      contact: "Kim Maden",
      website: "houstonfantasticfloors.com",
      color: "from-orange-500 to-orange-600",
    },
    {
      category: "🌡️ HVAC/Roofing",
      vendor: "Texas True Comfort",
      contact: "Chris Evans",
      website: "www.txtrue.com",
      color: "from-green-500 to-green-600",
    },
    {
      category: "🏦 Mortgage",
      vendor: "HomeRock Mortgage",
      contact: "Brian Lupton",
      website: "www.homerockmortgage.com",
      color: "from-red-500 to-red-600",
    },
    {
      category: "🏡 Realtor",
      vendor: "John Emberton",
      contact: "John Emberton",
      website: null,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      category: "🏡 HomeRock Realty",
      vendor: "Natalie Pilkinton",
      contact: "Natalie Pilkinton",
      website: "natalie.homerockrealty.com",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/investors" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to Investors
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl mt-4">
            Investor-Friendly Vendors
          </h1>
          <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-xl lg:text-2xl">
            Vetted service providers trusted by our investor community
          </p>
        </div>
      </section>

      <main>
        {/* Vendor Cards Grid */}
        <section className="px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {vendors.map((vendor) => (
                <div
                  key={vendor.vendor}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-200"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${vendor.color} p-4 text-white`}>
                    <p className="text-sm font-semibold">{vendor.category}</p>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {vendor.vendor}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{vendor.contact}</p>

                    {/* Website Button */}
                    {vendor.website ? (
                      <a
                        href={`https://${vendor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Visit Website →
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full px-4 py-2 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed"
                      >
                        Contact for Info
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Vendors CTA */}
        <section className="bg-gray-50 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Looking for More Vendors?
            </h2>
            <p className="text-gray-600 mb-6">
              View our complete directory of investor-friendly service providers:
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1IB5gUZedMSpQXZAzZ5vXkkC5SDU2y2Pm8VAD5wHJmG8/edit?gid=1504742877#gid=1504742877"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
            >
              View Full Vendor Directory (Google Sheet) →
            </a>
          </div>
        </section>

        {/* Interested in Becoming a Vendor */}
        <section className="px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Interested in Becoming a Vendor?
            </h2>
            <p className="text-gray-600 mb-6">
              Grow your business by partnering with our investor network
            </p>
            <a
              href="/vendor-sponsorship"
              className="inline-block px-6 py-3 bg-gold-ink hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition-colors"
            >
              Explore Vendor Sponsorship Options →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
