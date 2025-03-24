"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog"
import { Button } from "./ui/button"
import { Fence } from "lucide-react"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the popup
      const hasSeenPopup = localStorage.getItem("hasSeenPopup")
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    setSubmitted(true)
    // Mark that user has seen the popup
    localStorage.setItem("hasSeenPopup", "true")
    
    // Close the popup after 2 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  }

  const handleClose = () => {
    setIsOpen(false)
    // Mark that user has seen the popup
    localStorage.setItem("hasSeenPopup", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-black border border-emerald-900/50 p-0 overflow-hidden max-w-md w-[90vw] rounded-lg">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black to-emerald-950 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 p-6">
            <DialogHeader className="mb-4 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-900/50 p-3 rounded-full border border-emerald-700">
                  <Fence className="h-8 w-8 text-emerald-400" strokeWidth={2.5} />
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold text-white">Get Fence Marketing Tips</DialogTitle>
              <p className="text-emerald-200/90 mt-2">
                Join our newsletter for exclusive fence marketing strategies and industry insights.
              </p>
            </DialogHeader>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6"
                >
                  <div className="mb-4">
                    <motion.div 
                      whileHover={{ y: -2 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full px-4 py-3 rounded-md bg-emerald-950/70 border border-emerald-800 text-white placeholder:text-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Button type="submit" className="w-full bg-emerald-600 text-white hover:bg-emerald-500 border-none rounded-md py-6 h-auto font-medium">
                        Subscribe Now
                      </Button>
                    </motion.div>
                    
                    <Button 
                      variant="ghost" 
                      onClick={handleClose}
                      className="text-emerald-400 hover:text-white hover:bg-transparent"
                    >
                      No thanks
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-800 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thanks for subscribing!</h3>
                  <p className="text-emerald-200/90">We'll send you the best fence marketing tips straight to your inbox.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
