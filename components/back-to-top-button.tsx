"use client"

import React from "react"

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button 
      onClick={scrollToTop}
      className="bg-yellow-500 border-4 border-black text-black font-bold py-2 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-colors back-to-top-btn"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
        <path d="m18 15-6-6-6 6"></path>
      </svg>
    </button>
  )
}
