import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { SiteHeader } from "../components/site-header"
import { ThemeProvider } from "../components/theme-provider"
import { ClientWrapper } from "../components/client-wrapper"
import { NewsletterPopup } from "../components/newsletter-popup"
import { Fence } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "We Market Fence | Premium Marketing for Fencing Companies",
  description:
    "Specialized marketing and website design for modern fencing companies. Elevate your brand with our premium digital solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientWrapper>
            <SiteHeader />
            {children}
            <footer className="py-16 bg-black border-t border-emerald-900/50">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Fence className="h-6 w-6 text-emerald-400" strokeWidth={2.5} />
                      <span className="font-bold text-lg text-white">We Market Fence</span>
                    </div>
                    <p className="text-emerald-200/90 mb-6">
                      Premium marketing solutions for modern fencing companies.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-emerald-400 hover:text-white transition-colors">
                        Twitter
                      </a>
                      <a href="#" className="text-emerald-400 hover:text-white transition-colors">
                        LinkedIn
                      </a>
                      <a href="#" className="text-emerald-400 hover:text-white transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-white">Services</h4>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Website Design
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Brand Identity
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          SEO Strategy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Content Creation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Lead Generation
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-white">Company</h4>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Work
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Process
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-white">Contact</h4>
                    <ul className="space-y-3">
                      <li className="text-emerald-200">hello@wemarketfence.com</li>
                      <li className="text-emerald-200">(555) 123-4567</li>
                      <li className="text-emerald-200">
                        123 Design Street
                        <br />
                        San Francisco, CA 94107
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-emerald-900/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-emerald-400/70">
                    {new Date().getFullYear()} We Market Fence. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-sm text-emerald-400/70 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-emerald-400/70 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </footer>
            <NewsletterPopup />
          </ClientWrapper>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}