import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 md:py-20 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mx-auto mb-6 max-w-3xl text-base md:text-lg text-blue-100">
              Please read these terms carefully before using our services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/privacy">Privacy Policy</Link>
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

        {/* Terms Content */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">1. Introduction</h2>
                <p className="text-gray-700">
                  Welcome to GlideXpress. These Terms of Service ("Terms") govern your use of our website, services, and
                  applications (collectively, the "Services") provided by GlideXpress ("we," "us," or "our"). By
                  accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                  Terms, please do not use our Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">2. Services Description</h2>
                <p className="text-gray-700">
                  GlideXpress provides transportation and logistics services, including but not limited to road
                  transport, warehousing, international shipping, and express delivery. Our Services are designed to
                  help businesses and individuals transport goods safely and efficiently.
                </p>
                <p className="text-gray-700">
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without
                  notice. We may also impose limits on certain features or restrict access to parts or all of the
                  Services without notice or liability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">3. User Accounts</h2>
                <p className="text-gray-700">
                  To access certain features of our Services, you may be required to create an account. You are
                  responsible for maintaining the confidentiality of your account information, including your password,
                  and for all activity that occurs under your account. You agree to notify us immediately of any
                  unauthorized use of your account.
                </p>
                <p className="text-gray-700">
                  You must provide accurate, current, and complete information during the registration process and keep
                  your account information updated. We reserve the right to suspend or terminate your account if any
                  information provided is inaccurate, outdated, or incomplete.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">4. User Responsibilities</h2>
                <p className="text-gray-700">When using our Services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information about the goods to be transported</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our Services for any illegal or unauthorized purpose</li>
                  <li>Not interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Not attempt to gain unauthorized access to our Services or related systems</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">5. Payment Terms</h2>
                <p className="text-gray-700">
                  The fees for our Services are set forth on our website or in a separate agreement. All fees are in the
                  currency specified and do not include taxes, which will be added where applicable. Payment terms may
                  vary depending on the specific Services provided.
                </p>
                <p className="text-gray-700">
                  You agree to pay all charges at the prices then in effect for your use of the Services. We reserve the
                  right to modify our pricing at any time. Any changes to our pricing will be posted on our website and
                  will apply to future Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">6. Limitation of Liability</h2>
                <p className="text-gray-700">
                  To the maximum extent permitted by law, GlideXpress shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your use or inability to use our Services</li>
                  <li>
                    Any unauthorized access to or use of our servers and/or any personal information stored therein
                  </li>
                  <li>Any interruption or cessation of transmission to or from our Services</li>
                  <li>
                    Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Services
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">7. Indemnification</h2>
                <p className="text-gray-700">
                  You agree to defend, indemnify, and hold harmless GlideXpress, its officers, directors, employees, and
                  agents, from and against any claims, liabilities, damages, losses, and expenses, including without
                  limitation reasonable attorney's fees and costs, arising out of or in any way connected with your
                  access to or use of the Services, your violation of these Terms, or your violation of any rights of
                  another.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">8. Modifications to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                  by posting the updated Terms on our website or through other communications. Your continued use of the
                  Services after such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">9. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
                  regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to
                  these Terms shall be brought exclusively in the courts of [Jurisdiction].
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">10. Contact Information</h2>
                <p className="text-gray-700">If you have any questions about these Terms, please contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    GlideXpress
                    <br />
                    123 Transport Street
                    <br />
                    Logistics City, 12345
                    <br />
                    Email: legal@glideXpress.com
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

