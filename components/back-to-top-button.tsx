"use client"

import React, { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed right-6 bottom-24 md:bottom-6 z-30 bg-accent-yellow border-4 border-neutral-dark text-neutral-dark font-bold p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent-red hover:text-white transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}
