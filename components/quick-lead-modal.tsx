"use client"

import React, { useState } from "react"
import { X } from "lucide-react"
import { ContactForm } from "./contact-form"

interface QuickLeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuickLeadModal({ isOpen, onClose }: QuickLeadModalProps) {
  const [step, setStep] = useState(1)
  const totalSteps = 2
  
  const handleSubmitSuccess = () => {
    // Reset step when form is closed
    setTimeout(() => {
      setStep(1)
    }, 1000)
  }
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white border-4 border-neutral-dark shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
        w-full max-w-md relative max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-neutral-light">
          <div 
            className="h-full bg-accent-red transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white border-2 border-neutral-dark p-1
          hover:bg-accent-red hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Modal content */}
        <div className="p-6 pt-10">
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl font-extrabold text-neutral-dark uppercase relative z-10">
              GET YOUR FREE QUOTE
            </h2>
            <div className="absolute -bottom-2 -left-2 w-full h-4 bg-accent-yellow z-0"></div>
          </div>
          
          <p className="text-lg mb-6 text-neutral-near-black">
            Complete this quick form to get your <span className="font-bold text-accent-red">FREE marketing consultation</span> and see how we can boost your fence business!
          </p>
          
          <div className="flex items-center mb-6 justify-between">
            <div className="flex">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div 
                  key={index}
                  className={`w-4 h-4 rounded-full mr-2 border-2 border-neutral-dark ${
                    index + 1 <= step ? 'bg-accent-yellow' : 'bg-white'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-neutral-dark">Step {step} of {totalSteps}</span>
          </div>
          
          <ContactForm 
            quickMode={true} 
            onSubmitSuccess={() => {
              handleSubmitSuccess()
              onClose()
            }} 
          />
        </div>
      </div>
    </div>
  )
}
