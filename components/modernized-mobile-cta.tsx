"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export function ModernizedMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't execute the effect on landing page
    if (pathname === "/landing") {
      return;
    }
    
    // Check if the hero section has been scrolled past
    const handleScroll = () => {
      // Get the hero section height - assuming it's within the first 90vh
      const heroHeight = Math.min(window.innerHeight * 0.9, 700);
      const scrollPosition = window.scrollY;
      
      // Show after scrolling past the hero
      if (scrollPosition > heroHeight) {
        if (!isVisible) {
          setIsVisible(true);
          // Only animate once when first becoming visible
          if (!hasAnimated) {
            setTimeout(() => setHasAnimated(true), 100);
          }
        }
      } else {
        setIsVisible(false);
      }
    };
    
    // Set up the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check on component mount
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, hasAnimated, pathname]);

  // Add eye-catching animations
  useEffect(() => {
    // Don't execute the effect on landing page
    if (pathname === "/landing") {
      return;
    }
    
    // Modern, eye-catching animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes ctaSlideIn {
        0% { transform: translateY(100%); opacity: 0; }
        60% { transform: translateY(-8px); opacity: 1; }
        80% { transform: translateY(4px); }
        100% { transform: translateY(0); }
      }
      
      @keyframes ctaPulseShadow {
        0%, 100% { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        50% { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
      }
      
      @keyframes ctaAttention {
        0%, 100% { transform: scale(1); }
        85%, 95% { transform: scale(1.03); }
      }
      
      #modernized-mobile-cta-button {
        animation: ctaPulseShadow 4s infinite, ctaAttention 10s infinite 4s;
      }
      
      #modernized-mobile-cta.visible {
        animation: ctaSlideIn 0.6s ease forwards;
      }
    `;
    document.head.appendChild(style);
    
    // Track impression only if visible
    if (isVisible && typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'MobileCTAImpression');
    }
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isVisible, pathname]);

  const handleClick = () => {
    // Redirect to landing page
    window.location.href = '/landing';
    
    // Track click with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'MobileCTAClick');
    }
  };

  // Don't render on landing page or if not visible
  if (pathname === "/landing" || !isVisible) {
    return null;
  }

  return (
    <div 
      id="modernized-mobile-cta"
      className={`fixed bottom-4 left-4 right-4 z-[9999] md:hidden transform transition-transform duration-500 ${isVisible ? 'visible' : 'invisible translate-y-full'}`}
    >
      <button
        id="modernized-mobile-cta-button"
        onClick={handleClick}
        className="w-full px-5 py-3.5 bg-accent-red text-white font-medium rounded-lg shadow-sm border border-accent-red/20 text-center uppercase"
      >
        GET YOUR FREE QUOTE NOW
      </button>
    </div>
  );
}
