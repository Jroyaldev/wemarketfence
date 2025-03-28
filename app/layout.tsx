import React from "react"
import type { Metadata } from "next"
import { Bangers } from "next/font/google"
import "./globals.css"
import { Facebook } from "lucide-react"

import { SiteHeader } from "../components/site-header"
import { ThemeProvider } from "../components/theme-provider"
import { FenceLogo } from "../components/fence-logo"
import { BackToTopButton } from "../components/back-to-top-button"
import { FooterCopyright } from "../components/footer-copyright"

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
          <footer className="bg-[#E6F2FF] border-t-4 border-black py-10 sm:py-12 md:py-16 retro-pattern">
            <div className="container px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <FenceLogo size="sm" withCircle className="w-10 h-10" />
                    <span className="font-extrabold text-base sm:text-lg md:text-xl text-primary retro-text">WE MARKET FENCE!</span>
                  </div>
                  <p className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Boosting fence companies with awesome marketing!</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-2 border-3 border-black hover:bg-yellow-500 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61574417921000" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-2 border-3 border-black hover:bg-yellow-500 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-2 border-3 border-black hover:bg-yellow-500 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-base sm:text-lg mb-3 sm:mb-4 border-b-2 border-black pb-2">Services</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Website Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Brand Identity
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> SEO Strategy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Social Media
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Lead Generation
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-base sm:text-lg mb-3 sm:mb-4 border-b-2 border-black pb-2">Company</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> About
                      </a>
                    </li>
                    <li>
                      <a href="/our-work" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Our Work
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Process
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-bold hover:text-primary transition-colors text-sm sm:text-base flex items-center">
                        <span className="text-yellow-500 mr-1">→</span> Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-base sm:text-lg mb-3 sm:mb-4 border-b-2 border-black pb-2">Contact</h4>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="font-bold text-sm sm:text-base flex items-start">
                      <div className="bg-[#58CCDC] p-1 border-2 border-black mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <a href="mailto:jonny@wemarketfence.com" className="hover:text-primary transition-colors">jonny@wemarketfence.com</a>
                    </li>
                    <li className="font-bold text-sm sm:text-base flex items-start">
                      <div className="bg-yellow-500 p-1 border-2 border-black mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <a href="tel:6155610502" className="hover:text-primary transition-colors">(615) 561-0502</a>
                    </li>
                    <li className="font-bold text-sm sm:text-base flex items-start">
                      <div className="bg-[#AADB1E] p-1 border-2 border-black mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      Proudly serving fence companies<br />across the United States!
                    </li>
                  </ul>
                </div>
              </div>

              {/* Back to top button */}
              <div className="flex justify-center mt-8 md:mt-10">
                <BackToTopButton />
              </div>

              <div className="border-t-2 border-black mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
                <FooterCopyright />
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