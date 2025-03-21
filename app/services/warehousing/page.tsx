import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function WarehousingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 text-white">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-green-800 px-4 py-1 text-sm font-medium text-green-100">
                  Storage Solutions
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Warehousing & Distribution
                </h1>
                <p className="text-xl text-green-100">
                  Secure, efficient, and flexible warehousing solutions for your inventory management needs
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-green-900"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg bg-orange-500/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"
                  alt="Warehouse facility"
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 space-y-6 md:order-1">
                <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800">
                  Overview
                </span>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Comprehensive Warehousing Services</h2>
                <p className="text-lg text-gray-600">
                  Our warehousing solutions provide secure storage facilities with advanced inventory management
                  systems. We offer flexible storage options to accommodate your changing business needs with efficient
                  distribution services.
                </p>
                <p className="text-lg text-gray-600">
                  From short-term storage to long-term inventory management, our state-of-the-art facilities and
                  experienced team ensure your products are stored safely and distributed efficiently.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Strategic locations for optimal distribution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Advanced security and monitoring systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Climate-controlled storage options</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1586528116493-ce4c9d733638?q=80&w=800&auto=format&fit=crop"
                  alt="Warehouse interior"
                  className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Optimize Your Storage?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-green-100">
              Contact us today to discuss your warehousing needs and get a customized solution
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-green-900"
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

