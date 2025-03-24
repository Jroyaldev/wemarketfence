"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

interface HorizontalScrollProps {
  items: {
    title: string
    description: string
    number: string
  }[]
}

export function HorizontalScroll({ items }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  // Check if mobile on mount and update scroll dimensions
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    const updateScrollDimensions = () => {
      if (containerRef.current) {
        setMaxScroll(containerRef.current.scrollWidth - containerRef.current.clientWidth)
      }
    }

    checkMobile()
    updateScrollDimensions()
    
    window.addEventListener("resize", () => {
      checkMobile()
      updateScrollDimensions()
    })
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  
  // Update scroll position for the indicator
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft)
      }
    }
    
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const translateX = useTransform(scrollXProgress, [0, 1], ["0%", "-75%"])
  
  // Calculate progress percentage for the indicator
  const scrollPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0

  return (
    <div className="relative overflow-hidden pb-8">
      {/* Mobile scroll hint overlay (shows on initial load only for mobile) */}
      {isMobile && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-emerald-950/10 z-10 pointer-events-none flex items-center justify-end px-4"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: 3, duration: 0.8 }}
            className="bg-background/80 text-emerald-600 p-2 rounded-full border border-emerald-800/20 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.div>
        </motion.div>
      )}
    
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex pl-[max(1rem,calc((100vw-1280px)/2+1rem))] md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] pr-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[350px] h-[320px] md:h-[400px] snap-start mr-4 md:mr-8 flex-shrink-0 group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-full w-full p-5 md:p-8 rounded-lg bg-emerald-950/30 border border-emerald-800/50 flex flex-col transition-all duration-300 relative overflow-hidden">
                {/* Number with refined design */}
                <div className="text-4xl md:text-6xl font-bold text-emerald-800/70 mb-auto tracking-tighter font-mono">{item.number}</div>
                
                {/* Title with improved typography */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description with refined text */}
                <p className="text-sm md:text-base text-emerald-200/70 mb-5 md:mb-7 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Learn more link with subtle animation */}
                <div className="flex items-center text-sm font-medium text-emerald-400 group-hover:text-white transition-colors">
                  <span className="relative">
                    Learn more
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-600/80 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator bar */}
      <div className="max-w-[200px] h-1 bg-emerald-900/50 mx-auto mt-5 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-emerald-500 rounded-full" 
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Scroll indicator text */}
      <div className="flex justify-center mt-2">
        <p className="text-xs text-emerald-400 flex items-center font-light tracking-wide">
          {isMobile ? "Swipe" : "Scroll"} to explore <ArrowRight className="inline h-3 w-3 ml-1" />
        </p>
      </div>
    </div>
  )
}
