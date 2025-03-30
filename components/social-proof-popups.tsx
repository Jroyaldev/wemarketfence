"use client"

import React, { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'

// Simulated recent conversions data
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

  useEffect(() => {
    // Check if the user has been on the site for at least 10 seconds
    const timer = setTimeout(() => {
      showRandomPopup()
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (currentPopup !== null) {
      // Show the popup
      setIsVisible(true)
      
      // Hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
        
        // Schedule the next popup after hiding (random time between 20-40 seconds)
        const nextPopupTimer = setTimeout(() => {
          showRandomPopup()
        }, Math.random() * 20000 + 20000)
        
        return () => clearTimeout(nextPopupTimer)
      }, 5000)
      
      return () => clearTimeout(hideTimer)
    }
  }, [currentPopup])

  const showRandomPopup = () => {
    // Choose a random action
    const randomIndex = Math.floor(Math.random() * recentActions.length)
    setCurrentPopup(randomIndex)
  }

  if (!isVisible || currentPopup === null) return null

  const action = recentActions[currentPopup]

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-xs animate-slide-in-left">
      <div className="bg-white border-2 border-neutral-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 flex items-start">
        <div className="bg-accent-yellow p-1 mr-3 flex-shrink-0 border border-neutral-dark">
          <CheckCircle className="h-5 w-5 text-neutral-dark" />
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-dark">
            <span className="font-bold">{action.name}</span> from <span className="font-bold">{action.location}</span> {action.action}
          </p>
          <p className="text-xs text-neutral-near-black">
            {action.time}
          </p>
        </div>
      </div>
    </div>
  )
}
