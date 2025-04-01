// Centralized metadata configuration
import type { Metadata } from "next"

export const defaultMetadata: Metadata = {
  title: {
    default: "We Market Fence! | Marketing for Fencing Companies",
    template: "%s | We Market Fence"
  },
  description: "Get more fence jobs, faster. Websites & marketing built for fence professionals.",
  keywords: [
    "fence marketing", 
    "fence company website", 
    "fence contractor marketing", 
    "fence business leads", 
    "fencing contractor advertising", 
    "fence installation marketing",
    "fence company SEO",
    "fencing business growth"
  ],
  authors: [{ name: "We Market Fence", url: "https://wemarketfence.com" }],
  creator: "We Market Fence",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wemarketfence.com",
    siteName: "We Market Fence",
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
  twitter: {
    card: "summary_large_image",
    title: "We Market Fence! | Marketing for Fencing Companies",
    description: "Get more fence jobs, faster. Websites & marketing built for fence professionals.",
    images: ["/images/wmf-og-image.png"],
  },
  alternates: {
    canonical: 'https://wemarketfence.com',
  },
};
