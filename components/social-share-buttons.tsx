'use client'

import React from 'react'

interface SocialShareButtonsProps {
  title: string
  url?: string
}

export function SocialShareButtons({ title, url }: SocialShareButtonsProps) {
  // Use the current URL if none provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank')
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank')
  }

  return (
    <div className="flex justify-end space-x-2 mb-6">
      <button
        onClick={shareOnTwitter}
        className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
        aria-label="Share on Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
      </button>
      <button
        onClick={shareOnFacebook}
        className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </button>
    </div>
  )
}
