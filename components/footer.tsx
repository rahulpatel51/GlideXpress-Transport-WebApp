import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import GlideXpressLogo from "@/components/glide-xpress-logo"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-gray-200 overflow-hidden">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GlideXpressLogo className="h-7 w-7 text-orange-500" />
              <span className="text-xl font-bold text-white">GlideXpress</span>
            </div>
            <p className="text-blue-100">
              Providing reliable transport and logistics solutions for businesses of all sizes since 2005.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="group rounded-full bg-blue-800 p-2 text-blue-200 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="group rounded-full bg-blue-800 p-2 text-blue-200 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="group rounded-full bg-blue-800 p-2 text-blue-200 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="group rounded-full bg-blue-800 p-2 text-blue-200 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/road-transport"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  Road Transport
                </Link>
              </li>
              <li>
                <Link
                  href="/services/warehousing"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  Warehousing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/international-shipping"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  International Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/express-delivery"
                  className="group flex items-center text-blue-100 transition-colors hover:text-orange-300"
                >
                  <span className="mr-2 block h-1 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-3"></span>
                  Express Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-blue-100">123 Transport Street, Logistics City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-blue-100">info@glideXpress.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-blue-200">&copy; {new Date().getFullYear()} GlideXpress. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <Link href="/terms" className="transition-colors hover:text-orange-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-orange-300">
                Privacy Policy
              </Link>
              <Link href="/faq" className="transition-colors hover:text-orange-300">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

