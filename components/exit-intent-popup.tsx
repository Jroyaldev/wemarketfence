"use client"

import React, { useState, useEffect } from 'react'
import { X, ArrowRight, CheckCircle } from 'lucide-react'
import { RetroButton } from './retro-button'
import { cn } from '../lib/utils'

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
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

  const validateEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setEmailError('Please enter your email')
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email')
      return
    }
    
    setIsSubmitting(true)
    setEmailError('')
    
    // Track conversion with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Exit Intent Form',
        content_category: 'Fence Marketing Lead',
      })
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
        
        // Reset the form after hiding
        setTimeout(() => {
          setIsSubmitted(false)
          setEmail('')
        }, 300)
      }, 5000)
    }, 1000)
  }
  
  if (!isVisible) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-md relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 bg-white border-2 border-neutral-dark p-1.5 
          hover:bg-accent-red hover:text-white transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>
        
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent-green rounded-full flex items-center justify-center border-4 border-neutral-dark">
              <CheckCircle className="h-8 w-8 text-neutral-dark" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-dark">Thanks for joining!</h3>
            <p className="font-medium mb-8 text-neutral-near-black">
              We'll send you our fence marketing tips shortly. Keep an eye on your inbox!
            </p>
          </div>
        ) : (
          <div className="p-6">
            <div className="absolute -top-5 -left-5 bg-accent-yellow p-3 border-3 border-neutral-dark z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-neutral-dark font-bold text-sm uppercase">Wait!</p>
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-dark mt-4 mb-2">
              Before You Go...
              <div className="h-1 bg-accent-red w-16 mt-2"></div>
            </h3>
            
            <p className="mb-5 text-neutral-near-black">
              Get our <span className="text-accent-red font-bold">FREE fence marketing guide</span> and learn how to increase your leads by 30% or more!
            </p>
            
            {/* Social proof element */}
            <div className="bg-neutral-light border-2 border-neutral-dark p-3 mb-5">
              <p className="text-sm font-medium text-neutral-dark flex items-start">
                <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                <span>Join <strong>150+ fence contractors</strong> who doubled their business with our strategies</span>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="exit-intent-email" className="block text-neutral-dark font-bold mb-2 text-sm">
                  Your Email Address
                </label>
                <input
                  id="exit-intent-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError('')
                  }}
                  className={cn(
                    "w-full border-3 p-3 bg-white text-neutral-dark transition-all duration-200",
                    emailError 
                      ? "border-accent-red focus:border-accent-red" 
                      : "border-neutral-dark focus:border-accent-yellow"
                  )}
                  placeholder="your@email.com"
                />
                {emailError && (
                  <p className="text-accent-red font-medium mt-1 text-sm">{emailError}</p>
                )}
              </div>
              
              <div className="flex space-x-4">
                <RetroButton 
                  type="submit"
                  variant="primary" 
                  disabled={isSubmitting}
                  className="flex-1"
                  icon={!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Me The Guide'}
                </RetroButton>
                <RetroButton 
                  type="button"
                  variant="secondary" 
                  onClick={() => setIsVisible(false)}
                  className="flex-1"
                >
                  No Thanks
                </RetroButton>
              </div>
              
              <p className="text-xs text-center text-neutral-near-black">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
