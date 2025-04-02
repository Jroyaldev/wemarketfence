"use client"

import React, { useEffect } from "react"

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export function GuaranteedMobileCTA() {
  useEffect(() => {
    // Updated animation for mobile CTA - less intrusive, more modern
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes ctaPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        50% { transform: scale(1.02); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
      }
      #guaranteed-mobile-cta {
        animation: ctaPulse 3s infinite;
      }
    `;
    document.head.appendChild(style);
    
    // Track impression
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'MobileCTAImpression');
    }
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'});
    // Track click with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'MobileCTAClick');
    }
  };

  // Log to console to confirm this component is running with new code
  console.log("GuaranteedMobileCTA: Modernized version running");

  return (
    <div 
      id="guaranteed-mobile-cta"
      className="fixed bottom-4 left-4 right-4 z-[9999] md:hidden"
    >
      <button
        onClick={handleClick}
        className="w-full px-5 py-3.5 bg-accent-red text-white font-medium rounded-lg shadow-sm border border-accent-red/20 text-center uppercase"
      >
        GET YOUR FREE QUOTE NOW
      </button>
    </div>
  );
}
