"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { Button } from "./ui/button"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Show the CTA after scrolling down
  useEffect(() => {
    if (isDismissed) return

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  // Dismiss the CTA
  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="relative group">
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            ></motion.div>
            <motion.div 
              className="relative px-6 py-4 bg-black border border-emerald-900/50 rounded-lg shadow-xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <button
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-800 text-emerald-200 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
              >
                <X size={14} />
              </button>
              
              <p className="font-medium text-white mb-2">Ready to grow your fence business?</p>
              <div className="flex space-x-2">
                <Button 
                  className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => {
                    setIsDismissed(true)
                    setIsVisible(false)
                  }}
                >
                  Get In Touch 
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
