import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RoadTransportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-blue-800 px-4 py-1 text-sm font-medium text-blue-100">
                  Transport Services
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Road Transport Solutions</h1>
                <p className="text-xl text-blue-100">
                  Reliable and efficient road transportation services for businesses of all sizes
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg bg-orange-500/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
                  alt="Road Transport"
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
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                  Overview
                </span>
                <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Comprehensive Road Transport Services</h2>
                <p className="text-lg text-gray-600">
                  Our road transport services offer reliable and efficient transportation solutions across the country.
                  With our modern fleet of vehicles and experienced drivers, we ensure your goods reach their
                  destination safely and on time.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you need full truckload (FTL) services, less than truckload (LTL) options, or specialized
                  transportation for sensitive or high-value goods, our team has the expertise and equipment to meet
                  your needs.
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
                    <span className="text-gray-700">Nationwide coverage with strategic routes</span>
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
                    <span className="text-gray-700">Modern fleet with GPS tracking and monitoring</span>
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
                    <span className="text-gray-700">Experienced drivers and logistics professionals</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
                  alt="Transport fleet"
                  className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Ship?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Contact us today to discuss your road transport needs and get a customized quote
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
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

