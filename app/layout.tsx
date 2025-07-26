import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Facebook } from "lucide-react"
import Image from "next/image"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { SiteHeader } from "../components/site-header"
import { ModernFooter } from "../components/modern-footer"
import { ThemeProvider } from "../components/theme-provider"
import { BackToTopButton } from "../components/back-to-top-button"
import MetaPixel from "../components/meta-pixel"
import GoogleTag from "../components/google-tag"

import RedditPixel from "../components/reddit-pixel"
import GoogleTagManager from "../components/google-tag-manager"
import { LocalBusinessJsonLd } from "../components/json-ld"
import { defaultMetadata } from "./metadata"

export const metadata: Metadata = defaultMetadata;

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
          <GoogleTagManager />
          <GoogleTag />

          <RedditPixel />
          <LocalBusinessJsonLd 
            name="We Market Fence"
            description="Marketing agency specialized in helping fence companies grow their business with websites and digital marketing."
            url="https://wemarketfence.com"
            telephone="+1-800-123-4567"
            priceRange="$$"
            sameAs={[
              "https://www.facebook.com/profile.php?id=61574417921000",
              "https://twitter.com/wemarketfence",
              "https://instagram.com/wemarketfence"
            ]}
          />
          <SiteHeader />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <ModernFooter />
          </div>
          <BackToTopButton />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}