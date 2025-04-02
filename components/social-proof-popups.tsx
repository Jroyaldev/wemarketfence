"use client"

import React, { useState, useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'
import { cn } from '../lib/utils'

// Simulated recent conversions data - updated to seem more authentic
const recentActions = [
  { name: 'Mike D.', location: 'Florida', action: 'requested a quote', time: '2 minutes ago' },
  { name: 'James T.', location: 'Texas', action: 'signed up', time: '4 minutes ago' },
  { name: 'Robert T.', location: 'Georgia', action: 'got a free consultation', time: '7 minutes ago' },
  { name: 'David B.', location: 'Tennessee', action: 'started a project', time: '12 minutes ago' },
  { name: 'John S.', location: 'Alabama', action: 'requested a quote', time: '18 minutes ago' },
  { name: 'Chris M.', location: 'Mississippi', action: 'signed up', time: '25 minutes ago' },
  { name: 'Thomas W.', location: 'Louisiana', action: 'requested a quote', time: '32 minutes ago' },
  { name: 'Steve K.', location: 'North Carolina', action: 'got a free consultation', time: '38 minutes ago' },
  { name: 'Jason R.', location: 'South Carolina', action: 'signed up', time: '45 minutes ago' },
  { name: 'Brian P.', location: 'Kentucky', action: 'started a project', time: '52 minutes ago' },
  { name: 'Kevin L.', location: 'Ohio', action: 'requested a quote', time: '58 minutes ago' },
  { name: 'Mark H.', location: 'Virginia', action: 'signed up', time: '1 hour ago' },
  { name: 'Greg F.', location: 'Indiana', action: 'requested a quote', time: '1.5 hours ago' },
  { name: 'Eric W.', location: 'Illinois', action: 'got a free consultation', time: '2 hours ago' },
  { name: 'Daniel M.', location: 'Missouri', action: 'signed up', time: '2.5 hours ago' },
  { name: 'Patrick C.', location: 'Arizona', action: 'started a project', time: '3 hours ago' },
  { name: 'Scott H.', location: 'Nevada', action: 'requested a quote', time: '3.5 hours ago' },
  { name: 'Joe B.', location: 'New Mexico', action: 'signed up', time: '4 hours ago' },
]

export function SocialProofPopups() {
  const [currentPopup, setCurrentPopup] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show first popup after 15 seconds (give user time to engage with site first)
    const timer = setTimeout(() => {
      if (!isDismissed) showRandomPopup()
    }, 15000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  useEffect(() => {
    if (currentPopup !== null && !isDismissed) {
      // Show the popup
      setIsVisible(true)
      
      // Hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
        
        // Schedule the next popup after hiding (random time between 30-60 seconds)
        const nextPopupTimer = setTimeout(() => {
          if (!isDismissed) showRandomPopup()
        }, Math.random() * 30000 + 30000)
        
        return () => clearTimeout(nextPopupTimer)
      }, 6000)
      
      return () => clearTimeout(hideTimer)
    }
  }, [currentPopup, isDismissed])

  const showRandomPopup = () => {
    // Choose a random action
    const randomIndex = Math.floor(Math.random() * recentActions.length)
    setCurrentPopup(randomIndex)
  }
  
  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    
    // Store in session storage to prevent showing up again in this session
    sessionStorage.setItem('socialProofDismissed', 'true')
  }

  // Check session storage on client side
  useEffect(() => {
    const dismissed = sessionStorage.getItem('socialProofDismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
    }
  }, [])

  if (!isVisible || currentPopup === null || isDismissed) return null

  const action = recentActions[currentPopup]

  // Determine which color to use based on the current popup index
  const getBgColor = () => {
    switch (currentPopup % 4) {
      case 0: return "bg-accent-yellow";
      case 1: return "bg-[#58CCDC]";
      case 2: return "bg-accent-red";
      case 3: return "bg-accent-green";
      default: return "bg-accent-yellow";
    }
  };

  return (
    <div className={cn(
      "fixed z-[60]", // Higher z-index to ensure visibility
      "w-full sm:w-auto", 
      "sm:left-5 sm:bottom-5", // Bottom left on desktop
      "top-16", // Below header on mobile
      "transition-all duration-300 ease-out"
    )}>
      <div className={cn(
        "bg-white border border-neutral-200",
        "shadow-sm rounded-lg",
        "sm:max-w-[320px]",
        "p-4",
        "transform transition-transform hover:translate-y-[-2px] hover:shadow-md" // Subtle hover effect
      )}>
        {/* Top accent bar */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-1 rounded-t-lg",
          getBgColor()
        )}></div>
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 bg-white hover:bg-neutral-50 text-neutral-400 hover:text-accent-red transition-colors w-6 h-6 rounded-full flex items-center justify-center"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start">
          {/* Icon box */}
          <div className={cn(
            "p-2 mr-4 flex-shrink-0 rounded-full",
            getBgColor() + "/10" 
          )}>
            <CheckCircle className={cn(
              "h-5 w-5",
              currentPopup % 4 === 0 ? "text-accent-yellow" :
              currentPopup % 4 === 1 ? "text-[#58CCDC]" :
              currentPopup % 4 === 2 ? "text-accent-red" : "text-accent-green"
            )} />
          </div>
          
          {/* Content */}
          <div className="flex-1 pr-5">
            <p className="font-medium text-sm text-neutral-dark mb-1">
              {action.name}
            </p>
            <p className="text-sm text-neutral-dark mb-1 line-clamp-2">
              from <span className="font-medium">{action.location}</span> {action.action}
            </p>
            <p className="text-xs font-medium text-neutral-near-black/70">
              {action.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
