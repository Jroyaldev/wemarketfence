"use client"
import React, { useState, useEffect } from "react"
import { X } from "lucide-react"
import { ContactForm } from "./contact-form"

interface QuickLeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuickLeadModal({ isOpen, onClose }: QuickLeadModalProps) {
  const [animateIn, setAnimateIn] = useState(false)
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Delay animation slightly for effect
      setTimeout(() => setAnimateIn(true), 50)
    } else {
      setAnimateIn(false)
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div 
        className={`bg-white border-4 border-black max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transition-all duration-300 ${
          animateIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Quick close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-red-500 p-1 rounded-full border-2 border-black"
          aria-label="Close popup"
        >
          <X size={20} className="text-white" />
        </button>
        
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 bg-yellow-500 p-3 rounded-full border-4 border-black transform -rotate-12 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-black font-extrabold text-sm md:text-base">FAST!</p>
        </div>
        
        {/* Header */}
        <div className="p-6 bg-[#58CCDC] border-b-4 border-black">
          <h3 className="text-2xl font-extrabold text-center">QUICK LEAD FORM</h3>
          <p className="text-center font-bold text-sm mt-1">30-Second Growth Strategy</p>
        </div>
        
        {/* Streamlined form */}
        <div className="p-6">
          <ContactForm {...{ quickMode: true, onSubmitSuccess: onClose }} />
        </div>
      </div>
    </div>
  )
}
