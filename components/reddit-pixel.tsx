'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

export const REDDIT_PIXEL_ID = 'a2_gsk0teoaww4i'

declare global {
  interface Window {
    rdt: any
  }
}

// Client component that uses search params
function RedditPixelTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (window.rdt) {
      window.rdt('track', 'PageVisit')
    }
  }, [pathname, searchParams])

  return null
}

// Main component with Suspense boundary
export default function RedditPixel() {
  return (
    <>
      <Script
        id="reddit-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${REDDIT_PIXEL_ID}');
          `,
        }}
      />
      <Suspense fallback={null}>
        <RedditPixelTracker />
      </Suspense>
    </>
  )
}

// Helper functions for tracking specific events
export function trackRedditEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.rdt) {
    window.rdt('track', eventName, params)
  }
}
