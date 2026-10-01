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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4 py-20 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Link href="/vendor-sponsorship" className="text-blue-200 hover:text-white mb-6 inline-block transition-colors text-sm font-semibold">
            ← Back to Sponsorship
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-5xl leading-tight flex-1">
              Investor-Friendly<br />Vendors
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed flex-1">
              Discover vetted service providers trusted by our community
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Vendor Cards Grid */}
        <section className="px-4 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Featured Vendors</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {vendors.map((vendor) => (
                <div
                  key={vendor.vendor}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 hover:border-gray-200 group"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${vendor.color} p-4 sm:p-5 text-white group-hover:shadow-inner transition-all`}>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase">{vendor.category}</p>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {vendor.vendor}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm font-medium">{vendor.contact}</p>

                    {/* Website Button */}
                    {vendor.website ? (
                      <a
                        href={`https://${vendor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                      >
                        Visit Website →
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full px-6 py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed opacity-60"
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
        <section className="px-4 py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Looking for More Vendors?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
                  Browse our complete directory of investor-friendly service providers with detailed information and reviews
                </p>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1IB5gUZedMSpQXZAzZ5vXkkC5SDU2y2Pm8VAD5wHJmG8/edit?gid=1504742877#gid=1504742877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                View Complete Directory (Google Sheet) →
              </a>
            </div>
          </div>
        </section>

        {/* Interested in Becoming a Vendor */}
        <section className="px-4 py-16 sm:py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Interested in Becoming a Vendor?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
                  Grow your business by partnering with our investor network and gaining access to active investors
                </p>
              </div>
              <a
                href="/vendor-sponsorship"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Explore Vendor Sponsorship Options →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
