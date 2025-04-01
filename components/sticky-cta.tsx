"use client"

import React, { useEffect, useRef } from 'react'
import { cn } from "../lib/utils"

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export function StickyCTA() {
  const ctaRef = useRef<HTMLDivElement>(null)
  
  // Use direct DOM manipulation to ensure visibility
  useEffect(() => {
    // Add global styles to ensure CTA visibility
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes mobileCTAPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      .mobile-sticky-cta {
        position: fixed !important;
        bottom: 16px !important;
        left: 16px !important;
        right: 16px !important;
        z-index: 10000 !important;
        animation: mobileCTAPulse 2s infinite !important;
        box-shadow: 6px 6px 0px 0px rgba(0,0,0,1) !important;
      }
      
      @media (min-width: 768px) {
        .mobile-sticky-cta {
          display: none !important;
        }
      }
    `
    document.head.appendChild(style)
    
    // Track impression with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'StickyCTAImpression')
    }
    
    // Remove style when component unmounts
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handleClick = () => {
    // Track click with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'StickyCTAClick')
    }
    
    // Scroll to contact section smoothly
    document.querySelector('#contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div 
      ref={ctaRef}
      className="mobile-sticky-cta"
    >
      <button
        onClick={handleClick}
        className={cn(
          "w-full px-4 py-3 bg-accent-red text-white font-extrabold",
          "border-4 border-neutral-dark text-center uppercase"
        )}
      >
        Get Your Free Quote Now
      </button>
    </div>
  )
}
