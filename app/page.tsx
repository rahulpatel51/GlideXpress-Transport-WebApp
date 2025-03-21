import Link from "next/link"
import { Truck, Package, Globe, Clock, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import FaqAccordion from "@/components/faq-accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop"
              alt="Transport and Logistics"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 py-32 md:py-48">
            <div className="container mx-auto text-center text-white">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Reliable Transport
                <br />
                <span className="text-orange-500">Delivered Fast</span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-100 sm:text-xl md:text-2xl">
                Professional logistics solutions for businesses of all sizes, ensuring your goods reach their
                destination safely and on time.
              </p>

              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 min-w-[150px]">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900 min-w-[150px]"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Shape */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 118" className="w-full">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,101.3C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gradient-to-b from-white to-blue-50 py-20">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
                Comprehensive Transport Solutions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                We offer a wide range of transportation and logistics services to meet your business needs
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Truck className="h-10 w-10" />}
                title="Road Transport"
                description="Efficient road transportation services across the country with tracking and timely delivery."
                link="/services/road-transport"
                color="blue"
              />
              <ServiceCard
                icon={<Package className="h-10 w-10" />}
                title="Warehousing"
                description="Secure storage solutions with inventory management and distribution services."
                link="/services/warehousing"
                color="green"
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10" />}
                title="International Shipping"
                description="Global logistics solutions for your international transportation requirements."
                link="/services/international-shipping"
                color="purple"
              />
              <ServiceCard
                icon={<Clock className="h-10 w-10" />}
                title="Express Delivery"
                description="Fast and reliable express delivery services for time-sensitive shipments."
                link="/services/express-delivery"
                color="orange"
              />
              <ServiceCard
                icon={<Shield className="h-10 w-10" />}
                title="Secure Transport"
                description="Specialized secure transportation for high-value and sensitive goods."
                link="/services/secure-transport"
                color="red"
              />
              <ServiceCard
                icon={<Phone className="h-10 w-10" />}
                title="24/7 Support"
                description="Round-the-clock customer support to assist with all your logistics needs."
                link="/contact"
                color="teal"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Preview Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-lg bg-orange-500/20"></div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-lg bg-blue-500/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop
"
                  alt="Transport team"
                  className="relative z-10 rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col space-y-6">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                  About Us
                </span>
                <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Delivering Excellence Since 2005</h2>
                <p className="text-lg text-gray-600">
                  TransportPro has been a leader in the transportation and logistics industry for over 18 years. We've
                  built our reputation on reliability, efficiency, and customer satisfaction.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    <span className="text-gray-700">Modern fleet of over 200 vehicles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    <span className="text-gray-700">Nationwide coverage with international partners</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    <span className="text-gray-700">Experienced team of logistics professionals</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-b from-white to-blue-50 py-20">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                Testimonials
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="John Smith"
                company="ABC Enterprises"
                image="https://randomuser.me/api/portraits/men/32.jpg"
                testimonial="The transport services provided have been exceptional. Timely deliveries and professional staff have made our logistics operations smooth and efficient."
              />
              <TestimonialCard
                name="Sarah Johnson"
                company="XYZ Corporation"
                image="https://randomuser.me/api/portraits/women/44.jpg"
                testimonial="We've been using their services for over 5 years now. Their attention to detail and commitment to customer satisfaction is unmatched in the industry."
              />
              <TestimonialCard
                name="Michael Brown"
                company="Global Imports"
                image="https://randomuser.me/api/portraits/men/67.jpg"
                testimonial="Their international shipping solutions have helped us expand our business globally. Reliable, cost-effective, and always on time."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Find answers to common questions about our services and operations
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-orange-50">
              Contact us today to discuss your transportation needs and discover how we can help your business grow
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

