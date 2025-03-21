import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FaqAccordion from "@/components/faq-accordion"

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-blue-100">
              Find answers to common questions about our services, processes, and policies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                Common Questions
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Answers to Your Questions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Browse through our frequently asked questions to find the information you need
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Still Have Questions?</h2>
              <p className="mx-auto max-w-2xl text-blue-100">
                Our team is ready to assist you with any additional questions you may have
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-white">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Email Support</h3>
                <p className="mb-6 text-blue-100">Send us an email and we'll get back to you within 24 hours</p>
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href="mailto:support@transportpro.com">Email Us</a>
                </Button>
              </div>
              <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 text-white">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Phone Support</h3>
                <p className="mb-6 text-blue-100">Call our customer service team for personalized assistance</p>
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href="tel:+15551234567">Call Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

