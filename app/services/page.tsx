import { Truck, Globe, Warehouse } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-foreground">
              Comprehensive transport and logistics solutions tailored to meet your business needs
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid gap-12">
              {/* Road Transport */}
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop
"
                    alt="Road Transport"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Road Transport</h2>
                  <p className="text-muted-foreground">
                    Our road transport services offer reliable and efficient transportation solutions across the
                    country. With our modern fleet of vehicles and experienced drivers, we ensure your goods reach their
                    destination safely and on time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Full truckload (FTL) services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Less than truckload (LTL) options</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Temperature-controlled transport</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Real-time shipment tracking</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Warehousing */}
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-1 overflow-hidden rounded-lg md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop
"
                    alt="Warehousing"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="order-2 space-y-4 md:order-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Warehouse className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Warehousing</h2>
                  <p className="text-muted-foreground">
                    Our warehousing solutions provide secure storage facilities with advanced inventory management
                    systems. We offer flexible storage options to accommodate your changing business needs with
                    efficient distribution services.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Short and long-term storage options</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Inventory management and control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Order fulfillment services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Climate-controlled storage facilities</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* International Shipping */}
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop
"
                    alt="International Shipping"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">International Shipping</h2>
                  <p className="text-muted-foreground">
                    Our international shipping services connect your business to global markets with efficient and
                    reliable transportation solutions. We handle all customs documentation and compliance requirements
                    to ensure smooth cross-border shipments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Air freight services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Ocean freight services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Customs clearance assistance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>International logistics consulting</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground">
              Contact us today to discuss your transportation needs and discover how we can help your business grow
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

