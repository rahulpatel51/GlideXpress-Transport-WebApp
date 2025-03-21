import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, TrendingUp, Leaf, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">About TransportPro</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-blue-100">
              Your trusted partner in transportation and logistics since 2005
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-lg bg-orange-500/20"></div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-lg bg-blue-500/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop
"
                  alt="Company history"
                  className="relative z-10 rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                  Our Story
                </span>
                <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
                  From Small Beginnings to Industry Leader
                </h2>
                <p className="text-lg text-gray-600">
                  Founded in 2005 by a team of logistics experts with a vision to transform the transportation industry,
                  TransportPro started with just three trucks and a small warehouse. Our commitment to reliability,
                  efficiency, and customer satisfaction quickly set us apart in the industry.
                </p>
                <p className="text-lg text-gray-600">
                  Over the years, we've grown into a comprehensive logistics provider with a modern fleet of over 200
                  vehicles, multiple warehousing facilities, and a network that spans across the country and beyond.
                  Despite our growth, we've maintained our core values and personalized approach to customer service.
                </p>
                <p className="text-lg text-gray-600">
                  Today, TransportPro is recognized as an industry leader, serving businesses of all sizes from small
                  local companies to multinational corporations. Our innovative approach to logistics and dedication to
                  excellence continues to drive our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-blue-50 py-20">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                Our Purpose
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Mission & Vision</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-blue-900">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  To provide innovative, reliable, and efficient transportation and logistics solutions that empower
                  businesses to succeed in a global marketplace. We are committed to exceeding customer expectations
                  through operational excellence, technological advancement, and personalized service.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-blue-900">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To be the most trusted and innovative logistics partner, recognized globally for our commitment to
                  excellence, sustainability, and technological advancement. We aim to set new standards in the
                  transportation industry while creating value for our customers, employees, and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                Our Principles
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Core Values</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                The principles that guide our operations and relationships
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our operations, from customer service to delivery
                  execution.
                </p>
              </div>
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Teamwork</h3>
                <p className="text-gray-600">
                  We believe in the power of collaboration and work together to achieve common goals and deliver
                  exceptional results.
                </p>
              </div>
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and ethical standards that build trust with our
                  stakeholders.
                </p>
              </div>
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and creative solutions to continuously improve our services and
                  operations.
                </p>
              </div>
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to environmentally responsible practices that reduce our carbon footprint and promote
                  sustainability.
                </p>
              </div>
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Community</h3>
                <p className="text-gray-600">
                  We actively engage with and support the communities where we operate, contributing to their well-being
                  and development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Work With Us?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-orange-50">
              Contact our team today to discuss how our transportation and logistics solutions can benefit your business
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-orange-600"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

