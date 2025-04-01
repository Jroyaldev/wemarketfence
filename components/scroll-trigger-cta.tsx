"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { ArrowDown, X } from 'lucide-react'
import { RetroButton } from './retro-button'
import { cn } from '../lib/utils'

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

type TriggerType = 'services' | 'testimonials' | 'final' | null;

export function ScrollTriggerCTA() {
  const [activeTrigger, setActiveTrigger] = useState<TriggerType>(null)
  const [dismissedTriggers, setDismissedTriggers] = useState<Record<string, boolean>>({})
  
  // Load dismissed triggers from localStorage only once on mount
  useEffect(() => {
    try {
      const savedDismissed = localStorage.getItem('dismissedScrollTriggers')
      if (savedDismissed) {
        setDismissedTriggers(JSON.parse(savedDismissed))
      }
    } catch (e) {
      console.error('Error loading dismissed triggers', e)
    }
  }, []) // Empty dependency array - only run on mount
  
  // Memoize the dismiss function to avoid recreating it on every render
  const dismissTrigger = useCallback((trigger: string) => {
    setDismissedTriggers(prev => {
      const newDismissed = { ...prev, [trigger]: true }
      
      // Save to localStorage
      try {
        localStorage.setItem('dismissedScrollTriggers', JSON.stringify(newDismissed))
      } catch (e) {
        console.error('Error saving dismissed triggers', e)
      }
      
      return newDismissed
    })
    
    setActiveTrigger(null)
  }, [])
  
  // Handle scroll events with stable references to state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const pageHeight = document.body.scrollHeight
      
      // Define trigger points based on scroll percentage
      const scrollPercentage = (scrollPosition / (pageHeight - windowHeight)) * 100
      
      let newTrigger: TriggerType = null
      
      if (scrollPercentage > 25 && scrollPercentage < 40) {
        newTrigger = 'services'
      } else if (scrollPercentage > 60 && scrollPercentage < 75) {
        newTrigger = 'testimonials'  
      } else if (scrollPercentage > 80) {
        newTrigger = 'final'
      }
      
      // Only set active trigger if it hasn't been dismissed and it's different from current
      if (newTrigger && !dismissedTriggers[newTrigger] && newTrigger !== activeTrigger) {
        setActiveTrigger(newTrigger)
        
        // Track impressions with Meta Pixel
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('trackCustom', 'ScrollCTAImpression', {
            trigger_type: newTrigger
          });
        }
      } else if (!newTrigger && activeTrigger) {
        setActiveTrigger(null)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissedTriggers, activeTrigger]) // Only re-attach scroll handler when these change
  
  if (!activeTrigger) return null
  
  const getTriggerContent = () => {
    switch (activeTrigger) {
      case 'services':
        return {
          message: "Still exploring? Book a free 15-minute consultation!",
          buttonText: "Book Now",
          href: "#contact",
          color: "accent-yellow"
        }
      case 'testimonials':
        return {
          message: "Join 150+ fence companies we've helped grow!",
          buttonText: "Get Started",
          href: "#contact",
          color: "[#58CCDC]"
        }
      case 'final':
        return {
          message: "Ready to boost your fence business?",
          buttonText: "Contact Us Today",
          href: "#contact",
          color: "accent-red"
        }
      default:
        return {
          message: "Learn how we can help your fence business",
          buttonText: "Let's Talk",
          href: "#contact",
          color: "accent-yellow"
        }
    }
  }
  
  const content = getTriggerContent()
  const handleClick = () => {
    document.querySelector(content.href)?.scrollIntoView({ behavior: 'smooth' });
    
    // Track click with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ScrollCTAClick', {
        trigger_type: activeTrigger
      });
    }
    
    // Dismiss after click
    if (activeTrigger) dismissTrigger(activeTrigger);
  };
  
  return (
    <div className="fixed bottom-5 md:bottom-5 right-5 z-40 max-w-xs animate-fade-in">
      <div className={cn(
        "bg-white border-3 border-neutral-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 relative",
        "transition-all duration-300 hover:-translate-y-1"
      )}>
        <button 
          onClick={() => {
            if (activeTrigger) dismissTrigger(activeTrigger)
          }}
          className="absolute top-1 right-1 text-neutral-dark hover:text-accent-red transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        
        <div className={`absolute -top-2 -right-2 bg-${content.color} px-2 py-1 border-2 border-neutral-dark text-xs font-bold`}>
          {activeTrigger === 'final' ? 'LIMITED TIME' : 'FREE'}
        </div>
        
        <p className="text-base font-bold text-neutral-dark mb-3 pr-3">{content.message}</p>
        
        <RetroButton
          size="sm"
          variant="primary"
          onClick={handleClick}
          className="w-full text-center"
          icon={<ArrowDown className="h-4 w-4 ml-1" />}
        >
          {content.buttonText}
        </RetroButton>
      </div>
    </div>
  )
}
