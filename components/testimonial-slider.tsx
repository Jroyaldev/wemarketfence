"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  company: string
  image: string
  video?: boolean | string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div 
        className="absolute -top-10 -left-10 text-zinc-800 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Quote size={80} />
      </motion.div>
      
      <motion.div 
        className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {testimonials[current].video ? (
              <motion.div 
                className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-zinc-700 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <video 
                  src={testimonials[current].video as string} 
                  className="object-cover w-full h-full"
                  controls
                />
              </motion.div>
            ) : (
              <motion.div 
                className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-zinc-700 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}
            <div className="flex-1">
              <p className="text-lg md:text-xl text-zinc-300 italic mb-6 leading-relaxed">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-bold text-white">{testimonials[current].author}</p>
                <p className="text-zinc-400">{testimonials[current].company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation controls */}
        <div className="flex justify-between mt-8">
          <motion.button 
            onClick={prev}
            className="p-2 rounded-full bg-zinc-700/70 text-white hover:bg-zinc-600 transition-colors"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-white" : "bg-zinc-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          <motion.button 
            onClick={next}
            className="p-2 rounded-full bg-zinc-700/70 text-white hover:bg-zinc-600 transition-colors"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
