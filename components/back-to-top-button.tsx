"use client"

import React, { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Function to update scroll progress
    const handleScroll = () => {
      // Get scroll position
      const scrollTop = window.scrollY
      
      // Calculate document height
      const docHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight
      )
      
      // Calculate viewport height
      const windowHeight = window.innerHeight
      
      // Calculate scrollable area
      const scrollableHeight = docHeight - windowHeight
      
      if (scrollableHeight > 0) {
        // Calculate scroll percentage (0-100)
        const percentage = Math.min(100, (scrollTop / scrollableHeight) * 100)
        
        // Update state
        setScrollProgress(percentage)
        setVisible(scrollTop > 300)
      }
    }
    
    // Initial call
    handleScroll()
    
    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Don't render if not visible
  if (!visible) return null

  return (
    <div className="fixed right-6 bottom-24 md:bottom-6 z-[999]">
      <div className="relative">
        {/* Outer container with shadow - modernized design */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-neutral-200 rounded-full overflow-hidden shadow-sm bg-white">
          {/* Progress fill - absolutely positioned at bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-accent-red/80"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Button - slightly smaller than container and positioned on top */}
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 bg-white border border-neutral-200 rounded-full 
            flex items-center justify-center z-10
            hover:bg-accent-yellow hover:text-neutral-dark
            hover:-translate-y-0.5 hover:shadow-md
            active:translate-y-0.5
            transition-all duration-200"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </div>
  )
}
