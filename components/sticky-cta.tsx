"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { RetroButton } from "./retro-button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      const scrollPosition = window.scrollY
      if (scrollPosition > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 inset-x-0 z-40 px-4 md:hidden animate-fade-in">
      <Link href="/#contact" className="block">
        <RetroButton
          size="md"
          variant="primary"
          className="w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group"
        >
          <span className="group-hover:translate-x-1 transition-transform inline-block">
            GET YOUR FREE QUOTE NOW →
          </span>
        </RetroButton>
      </Link>
    </div>
  )
}
