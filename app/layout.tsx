import type React from "react"
import type { Metadata } from "next"
import { Bangers } from "next/font/google"
import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { FenceLogo } from "@/components/fence-logo"

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
})

export const metadata: Metadata = {
  title: "We Market Fence! | Retro Marketing for Fencing Companies",
  description:
    "Boost your fencing business with our retro-inspired marketing services! Websites that attract customers and grow your business.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
          <footer className="bg-secondary border-t-2 border-black py-10 sm:py-12 md:py-16">
            <div className="container px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <FenceLogo size="sm" withCircle />
                    <span className="font-extrabold text-base sm:text-lg md:text-xl text-primary retro-text">WE MARKET FENCE!</span>
                  </div>
                  <p className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Boosting fence companies with awesome marketing!</p>
                  <div className="flex space-x-4">
                    <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                      Twitter
                    </a>
                    <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                      Facebook
                    </a>
                    <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                      Instagram
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Website Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Brand Identity
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        SEO Strategy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Social Media
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Lead Generation
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-base sm:text-lg mb-3 sm:mb-4">Company</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Work
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Process
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="font-bold text-sm sm:text-base">jonny@wemarketfence.com</li>
                    <li className="font-bold text-sm sm:text-base">(615) 561-0502</li>
                    <li className="font-bold text-sm sm:text-base">
                      Proudly serving fence companies
                      <br />
                      across the United States!
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t-2 border-black mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="font-bold text-sm sm:text-base"> {new Date().getFullYear()} We Market Fence! All rights reserved.</p>
                <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
                  <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                    Privacy Policy
                  </a>
                  <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}