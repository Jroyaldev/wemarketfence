"use client"

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { RetroButton } from './retro-button'
import { ContactForm } from './contact-form'

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  
  useEffect(() => {
    // Load hasShown state from localStorage
    const exitIntentShown = localStorage.getItem('exitIntentShown')
    if (exitIntentShown) {
      setHasShown(true)
    }
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to the top of the page (likely exiting)
      if (e.clientY <= 5 && !hasShown && !exitIntentShown) {
        setIsVisible(true)
        // Set flag in localStorage - only show once per session
        localStorage.setItem('exitIntentShown', 'true')
        setHasShown(true)
      }
    }
    
    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])
  
  if (!isVisible) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white border-4 border-neutral-dark shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-md relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-4 -right-4 bg-accent-red text-white border-2 border-neutral-dark p-1 rounded-full z-10 hover:bg-red-700 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <div className="absolute -top-6 -left-6 bg-accent-orange p-2 border-4 border-neutral-dark transform -rotate-12 z-10">
            <p className="text-neutral-dark font-bold text-sm uppercase">Wait!</p>
          </div>
          
          <h3 className="text-3xl font-extrabold text-neutral-dark uppercase mb-2 mt-4">BEFORE YOU GO...</h3>
          <p className="mb-4 text-neutral-near-black font-medium">
            Get a <span className="text-accent-red font-bold">FREE consultation</span> and see how we can boost your fence business by 30% or more!
          </p>
          
          <div className="bg-neutral-light p-3 border-2 border-neutral-dark mb-5">
            <h4 className="font-bold text-neutral-dark mb-2">Get in Touch</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="font-bold">Phone</p>
                <p>(559) 555-8726</p>
              </div>
              <div>
                <p className="font-bold">Address</p>
                <p>Fresno, CA 93710</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <RetroButton 
              variant="primary" 
              onClick={() => {
                // Close the popup
                setIsVisible(false)
                
                // Find and scroll to the contact form section
                setTimeout(() => {
                  const contactForm = document.querySelector('#contact') || document.querySelector('.contact-form')
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 100) // Small delay to ensure popup is closed first
              }}
              className="flex-1"
            >
              Yes, Let's Talk!
            </RetroButton>
            <RetroButton 
              variant="secondary" 
              onClick={() => setIsVisible(false)}
              className="flex-1"
            >
              Not Now
            </RetroButton>
          </div>
        </div>
      </div>
    </div>
  )
}
