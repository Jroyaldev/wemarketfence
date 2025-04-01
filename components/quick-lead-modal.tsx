"use client"

import React, { useState, useEffect } from "react"
import { X } from "lucide-react"
import { ContactForm } from "./contact-form"
import { cn } from "../lib/utils"

interface QuickLeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuickLeadModal({ isOpen, onClose }: QuickLeadModalProps) {
  const [step, setStep] = useState(1)

  // Track modal opening with Meta Pixel
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Quick Lead Modal',
        content_category: 'Lead Generation',
      });
    }
  }, [isOpen]);
  
  const handleSubmitSuccess = () => {
    // Reset step when form is closed
    setTimeout(() => {
      setStep(1)
    }, 1000)
  }
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white border-4 border-neutral-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        w-full max-w-lg relative p-6 pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative design elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-accent-yellow"></div>
        <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1/2 bg-accent-red p-2 border-3 border-neutral-dark z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-white font-bold text-xs uppercase">FREE QUOTE</p>
        </div>
        
        {/* Close button - updated styling */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-white border-2 border-neutral-dark p-1.5
          hover:bg-accent-red hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-neutral-dark">
            GET YOUR FREE QUOTE
            <div className="h-1 bg-accent-red w-24 mt-2"></div>
          </h2>
        </div>
        
        <p className="text-base mb-6 text-neutral-near-black">
          Complete this quick form to get your <span className="font-bold text-accent-red">FREE marketing consultation</span>.
        </p>
        
        <ContactForm 
          quickMode={true}
          onStepChange={(newStep) => setStep(newStep)}
          onSubmitSuccess={() => {
            // Only close when the form is fully submitted
            handleSubmitSuccess()
            onClose()
          }}
          privacyPolicy={<div className="mt-3 text-center text-xs text-neutral-mid">
            By submitting, you agree to our <a href="/privacy" className="underline hover:text-accent-red">Privacy Policy</a>
          </div>}
        />
      </div>
    </div>
  )
}
