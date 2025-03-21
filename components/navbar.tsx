"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlideXpressLogo from "@/components/glide-xpress-logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out 
      ${isScrolled ? "bg-white/50 backdrop-blur-md border-b border-gray-200" : "bg-white shadow-md"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <GlideXpressLogo className="h-9 w-9" />
          <span suppressHydrationWarning className="text-xl font-bold text-blue-900">
            GlideXpress
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6 text-sm">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-2">
          <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" className="bg-orange-500 text-white hover:bg-orange-600" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setIsMenuOpen(false)}></div>}
      <div
        className={`fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto bg-gradient-to-b from-blue-800 to-blue-900 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-lg font-medium text-white transition-colors hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4">
            <Button variant="outline" className="border-white text-white hover:bg-white/20" asChild>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
            </Button>
            <Button className="bg-orange-500 text-white hover:bg-orange-600" asChild>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
