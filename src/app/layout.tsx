import type React from "react"
import type { Metadata } from "next"

import Providers from "@/lib/Providers"
import "./globals.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Inter, Manrope } from "next/font/google"

export const metadata: Metadata = {
  title: "HomeServe Pro - Premium Home Services",
  description:
    "Professional, reliable, and affordable home maintenance services. Licensed & insured with 24/7 emergency service.",
}

// Primary font for headings - modern and professional
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
})

// Secondary font for body text - friendly yet professional
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>{children}</body>
      </html>
    </Providers>
  )
}
