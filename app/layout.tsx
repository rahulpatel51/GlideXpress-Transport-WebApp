import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import "@/styles/globals.css"; // Ensure this path is correct

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "GlideXpress - Professional Transport & Logistics Solutions",
  description:
    "GlideXpress provides reliable transport and logistics solutions for businesses of all sizes. Road transport, warehousing, international shipping, and express delivery services.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} ${openSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
