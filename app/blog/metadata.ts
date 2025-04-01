import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fence Marketing Blog | Expert Tips & Strategies",
  description: "Discover expert fence marketing strategies, SEO tips, and business growth advice for fence contractors and installation companies.",
  keywords: [
    "fence marketing blog", 
    "fence company marketing", 
    "fence contractor blog", 
    "fence business tips", 
    "fence installation marketing",
    "fence company SEO",
    "fence business growth strategies"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wemarketfence.com/blog",
    title: "Fence Marketing Blog | Expert Tips & Strategies",
    description: "Discover expert fence marketing strategies, SEO tips, and business growth advice for fence contractors and installation companies.",
    images: [
      {
        url: "/images/wmf-og-image.png",
        width: 1200,
        height: 630,
        alt: "We Market Fence Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fence Marketing Blog | Expert Tips & Strategies",
    description: "Discover expert fence marketing strategies, SEO tips, and business growth advice for fence contractors and installation companies.",
    images: ["/images/wmf-og-image.png"],
  },
  alternates: {
    canonical: 'https://wemarketfence.com/blog',
  },
};
