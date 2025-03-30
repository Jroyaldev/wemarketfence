"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { ArrowDown } from 'lucide-react'
import { RetroButton } from './retro-button'

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
          href: "#contact"
        }
      case 'testimonials':
        return {
          message: "Join 150+ fence companies we've helped grow!",
          buttonText: "Get Started",
          href: "#contact"
        }
      case 'final':
        return {
          message: "Ready to boost your fence business?",
          buttonText: "Contact Us Today",
          href: "#contact"
        }
      default:
        return {
          message: "Learn how we can help your fence business",
          buttonText: "Let's Talk",
          href: "#contact"
        }
    }
  }
  
  const content = getTriggerContent()
  
  return (
    <div className="fixed bottom-24 md:bottom-4 right-4 z-40 max-w-xs animate-fade-in">
      <div className="bg-white border-2 border-neutral-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
        <p className="text-sm font-bold text-neutral-dark mb-3">{content.message}</p>
        <div className="flex justify-between items-center">
          <RetroButton
            size="sm"
            variant="primary"
            onClick={() => {
              document.querySelector(content.href)?.scrollIntoView({ behavior: 'smooth' })
              // Also dismiss after click
              if (activeTrigger) dismissTrigger(activeTrigger)
            }}
            className="w-full text-center"
          >
            {content.buttonText} <ArrowDown className="ml-1 h-4 w-4 inline" />
          </RetroButton>
          <button 
            onClick={() => {
              if (activeTrigger) dismissTrigger(activeTrigger)
            }}
            className="ml-2 text-xs underline hover:text-accent-red"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
