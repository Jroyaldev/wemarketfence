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
    // Add animation for mobile CTA
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes ctaPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      #guaranteed-mobile-cta {
        animation: ctaPulse 2s infinite;
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

  return (
    <div 
      id="guaranteed-mobile-cta"
      className="fixed bottom-4 left-4 right-4 z-[9999] md:hidden"
      style={{boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)'}}
    >
      <button
        onClick={handleClick}
        className="w-full px-4 py-3 bg-accent-red text-white font-extrabold border-4 border-neutral-dark text-center uppercase"
      >
        Get Your Free Quote Now
      </button>
    </div>
  );
}
