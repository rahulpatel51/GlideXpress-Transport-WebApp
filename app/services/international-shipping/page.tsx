import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function InternationalShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-20 text-white">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-purple-800 px-4 py-1 text-sm font-medium text-purple-100">
                  Global Logistics
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">International Shipping</h1>
                <p className="text-xl text-purple-100">
                  Reliable global logistics solutions to connect your business to markets worldwide
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-purple-900"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg bg-orange-500/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop"
                  alt="Container ship"
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
                <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800">
                  Overview
                </span>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Global Shipping Solutions</h2>
                <p className="text-lg text-gray-600">
                  Our international shipping services connect your business to global markets with efficient and
                  reliable transportation solutions. We handle all customs documentation and compliance requirements to
                  ensure smooth cross-border shipments.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you need air freight for time-sensitive shipments or ocean freight for cost-effective bulk
                  transportation, our global network and expertise ensure your goods reach their destination safely and
                  on time.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
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
                    <span className="text-gray-700">Global network covering major international markets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
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
                    <span className="text-gray-700">Comprehensive customs clearance assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
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
                    <span className="text-gray-700">International compliance expertise and documentation</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
                  alt="Global logistics"
                  className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Go Global?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-purple-100">
              Contact us today to discuss your international shipping needs and get a customized solution
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-purple-900"
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

