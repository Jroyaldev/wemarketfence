import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Facebook } from "lucide-react"
import Image from "next/image"

import { SiteHeader } from "../components/site-header"
import { ThemeProvider } from "../components/theme-provider"
import { BackToTopButton } from "../components/back-to-top-button"
import MetaPixel from "../components/meta-pixel"
import GoogleTag from "../components/google-tag"
import { StickyCTA } from "../components/sticky-cta"
import { ExitIntentPopup } from "../components/exit-intent-popup"
import { SocialProofPopups } from "../components/social-proof-popups"
import { GuaranteedMobileCTA } from "../components/guaranteed-mobile-cta"

export const metadata: Metadata = {
  title: "We Market Fence! | Marketing for Fencing Companies",
  description:
    "Get more fence jobs, faster. Websites & marketing built for fence professionals.",
  keywords: "fence marketing, fence company website, fence contractor marketing, fence business leads",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wemarketfence.com",
    title: "We Market Fence! | Marketing for Fencing Companies",
    description: "Get more fence jobs, faster. Websites & marketing built for fence professionals.",
    images: [
      {
        url: "/images/wmf-og-image.png",
        width: 1200,
        height: 630,
        alt: "We Market Fence",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MetaPixel />
          <GoogleTag />
          <SiteHeader />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <footer className="bg-neutral-dark border-t-4 border-neutral-near-black py-10 sm:py-12 md:py-16">
              <div className="container px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                  <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Image 
                        src="/images/wmf.png" 
                        alt="We Market Fence Logo" 
                        width={150} 
                        height={60} 
                        className="h-10 w-auto" 
                      />
                      <span className="font-extrabold text-base sm:text-lg md:text-xl text-neutral-light uppercase">WE MARKET FENCE</span>
                    </div>
                    <p className="font-medium text-sm sm:text-base text-neutral-light mb-4 sm:mb-6">Boosting fence companies with awesome marketing!</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-neutral-light p-2 border-2 border-neutral-near-black hover:bg-accent-yellow transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
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
                        className="bg-neutral-light p-2 border-2 border-neutral-near-black hover:bg-accent-yellow transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-neutral-light p-2 border-2 border-neutral-near-black hover:bg-accent-yellow transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
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
                    <h4 className="font-extrabold text-base sm:text-lg mb-4 text-neutral-light uppercase border-b-2 border-neutral-light pb-2">Services</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      <li>
                        <a href="#services" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Website Design
                        </a>
                      </li>
                      <li>
                        <a href="#services" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Brand Identity
                        </a>
                      </li>
                      <li>
                        <a href="#services" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> SEO Strategy
                        </a>
                      </li>
                      <li>
                        <a href="#services" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Social Media
                        </a>
                      </li>
                      <li>
                        <a href="#services" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Lead Generation
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-base sm:text-lg mb-4 text-neutral-light uppercase border-b-2 border-neutral-light pb-2">Company</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      <li>
                        <a href="#about" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> About
                        </a>
                      </li>
                      <li>
                        <a href="/our-work" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Our Work
                        </a>
                      </li>
                      <li>
                        <a href="#process" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Process
                        </a>
                      </li>
                      <li>
                        <a href="/blog" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Blog
                        </a>
                      </li>
                      <li>
                        <a href="#contact" className="font-medium hover:text-accent-yellow transition-colors text-sm sm:text-base flex items-center text-neutral-light">
                          <span className="text-accent-yellow mr-1">→</span> Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-base sm:text-lg mb-4 text-neutral-light uppercase border-b-2 border-neutral-light pb-2">Contact</h4>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="font-medium text-sm sm:text-base flex items-start text-neutral-light">
                        <div className="bg-accent-blue p-1 border-2 border-neutral-near-black mr-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                        </div>
                        <a href="mailto:jonny@wemarketfence.com" className="hover:text-accent-yellow transition-colors text-xs sm:text-sm md:text-base inline-block min-w-[170px]">jonny@wemarketfence.com</a>
                      </li>
                      <li className="font-medium text-sm sm:text-base flex items-start text-neutral-light">
                        <div className="bg-accent-yellow p-1 border-2 border-neutral-near-black mr-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <a href="tel:6155610502" className="hover:text-accent-yellow transition-colors">(615) 561-0502</a>
                      </li>
                      <li className="font-medium text-sm sm:text-base flex items-start text-neutral-light">
                        <div className="bg-accent-green p-1 border-2 border-neutral-near-black mr-2 flex-shrink-0">
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

                {/* Spacer to maintain layout */}
                <div className="mt-8 md:mt-10"></div>

                <div className="mt-10 border-t-2 border-neutral-light pt-6 flex flex-col sm:flex-row justify-between items-center">
                  <div className="text-neutral-light">
                    <p className="font-bold text-sm uppercase tracking-wider pb-2 inline-block">
                      &copy; {new Date().getFullYear()} WE MARKET FENCE. ALL RIGHTS RESERVED.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a href="/privacy-policy" className="font-medium text-neutral-light hover:text-accent-yellow transition-colors text-sm">
                      PRIVACY POLICY
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <StickyCTA />
          <ExitIntentPopup />
          <SocialProofPopups />
          <GuaranteedMobileCTA />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}