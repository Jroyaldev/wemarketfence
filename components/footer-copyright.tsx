"use client"

import React, { useEffect, useState } from 'react'

export function FooterCopyright() {
  const [year, setYear] = useState<number>(2025) // Set a default year value 
  
  useEffect(() => {
    // Update the year on the client side only to avoid hydration errors
    setYear(new Date().getFullYear())
  }, [])

  return (
    <p className="font-bold text-sm sm:text-base">© {year} We Market Fence! All rights reserved.</p>
  )
}
