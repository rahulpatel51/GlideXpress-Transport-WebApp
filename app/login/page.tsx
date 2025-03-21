import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import GlideXpressLogo from "@/components/glide-xpress-logo"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-500 to-indigo-800">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="relative w-full max-w-md p-6 md:p-8 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-200 shadow-md">
              <GlideXpressLogo className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-white">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-200">
              Or{" "}
              <Link href="/signup" className="font-semibold text-yellow-400 hover:underline">
                create a new account
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-5">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-white">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 block w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" className="text-orange-500 border-white/50 focus:ring-orange-500" />
                <Label htmlFor="remember-me" className="ml-2 text-sm text-white">
                  Remember me
                </Label>
              </div>
              <Link href="#" className="text-sm font-medium text-yellow-400 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <div>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold py-2 rounded-lg shadow-lg transition-all duration-300">
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative flex items-center justify-center">
              <div className="flex-grow border-t border-white/20"></div>
              <div className="mx-4 text-sm text-gray-300">Or continue with</div>
              <div className="flex-grow border-t border-white/20"></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all">
                <FaFacebook className="text-blue-500" size={20} />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all">
                <FcGoogle size={20} />
                <span className="hidden sm:inline">Google</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

