import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 md:py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mx-auto mb-6 max-w-3xl text-base md:text-lg text-blue-100">
              How we collect, use, and protect your personal information
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/terms">Terms of Service</Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">1. Introduction</h2>
                <p className="text-gray-700">
                  At GlideXpress, we respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  use our website, services, and applications (collectively, the "Services").
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that
                  you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our
                  policies and practices, please do not use our Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">2. Information We Collect</h2>
                <p className="text-gray-700">
                  We collect several types of information from and about users of our Services, including:
                </p>
                <h3 className="text-xl font-semibold text-blue-800">Personal Information</h3>
                <p className="text-gray-700">
                  Personal information is data that can be used to identify you individually, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name, email address, postal address, and phone number</li>
                  <li>Account login credentials</li>
                  <li>Billing and payment information</li>
                  <li>Company information (for business accounts)</li>
                  <li>Shipping and delivery details</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-800">Non-Personal Information</h3>
                <p className="text-gray-700">
                  We also collect non-personal information that does not directly identify you, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>IP address and general location</li>
                  <li>Pages visited on our website and time spent on those pages</li>
                  <li>Referring website or source</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">3. How We Collect Information</h2>
                <p className="text-gray-700">We collect information in the following ways:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Direct Collection:</strong> Information you provide when you create an account, place an
                    order, fill out forms, or communicate with us.
                  </li>
                  <li>
                    <strong>Automated Collection:</strong> Information collected automatically through cookies, web
                    beacons, and similar technologies when you use our Services.
                  </li>
                  <li>
                    <strong>Third-Party Sources:</strong> Information we may receive from business partners, service
                    providers, and other third parties.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">4. How We Use Your Information</h2>
                <p className="text-gray-700">We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Providing, maintaining, and improving our Services</li>
                  <li>Processing and fulfilling your orders and requests</li>
                  <li>Managing your account and providing customer support</li>
                  <li>Sending transactional messages and service updates</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Detecting, preventing, and addressing technical issues or fraudulent activities</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">5. Information Sharing and Disclosure</h2>
                <p className="text-gray-700">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Service Providers:</strong> We share information with third-party vendors, consultants, and
                    other service providers who perform services on our behalf.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> If GlideXpress is involved in a merger, acquisition, or sale of
                    assets, your information may be transferred as part of that transaction.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in
                    response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Protection of Rights:</strong> We may disclose information to protect the rights, property,
                    or safety of GlideXpress, our users, or others.
                  </li>
                </ul>
                <p className="text-gray-700">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes
                  without your explicit consent.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">6. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect the security of your
                  personal information. However, please understand that no method of transmission over the Internet or
                  method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                  protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">7. Your Privacy Rights</h2>
                <p className="text-gray-700">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify or update your personal information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to the processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section
                  below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">8. Cookies and Similar Technologies</h2>
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to track activity on our Services and to hold certain
                  information. Cookies are files with a small amount of data that may include an anonymous unique
                  identifier. They are sent to your browser from a website and stored on your device.
                </p>
                <p className="text-gray-700">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our Services are not intended for children under the age of 16. We do not knowingly collect personal
                  information from children under 16. If you are a parent or guardian and you believe your child has
                  provided us with personal information, please contact us, and we will take steps to delete such
                  information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">11. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    GlideXpress
                    <br />
                    123 Transport Street
                    <br />
                    Logistics City, 12345
                    <br />
                    Email: privacy@glideXpress.com
                    <br />
                    Phone: +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-500 text-sm">Last Updated: March 21, 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

