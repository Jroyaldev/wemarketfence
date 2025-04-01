"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { RetroButton } from "../../components/retro-button"
import { RetroSection } from "../../components/retro-section"
import { cn } from "../../lib/utils"

export default function Work() {
  const projects = [
    {
      title: "Elite Fence Designs",
      description: "Complete website redesign with SEO optimization that increased leads by 125%",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-[#58CCDC]"
    },
    {
      title: "Brown's Custom Fencing",
      description: "Brand identity refresh and new website that doubled their online conversions",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-yellow-500"
    },
    {
      title: "Smith's Fencing Solutions",
      description: "Local SEO campaign that put them on the first page of Google for 15 key search terms",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-[#AADB1E]"
    },
    {
      title: "Reliable Fence Co.",
      description: "Social media strategy that generated 45 qualified leads in the first month",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-[#FF9B50]"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-neutral-light">
      <RetroSection className="bg-white pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-yellow opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-red opacity-10 rounded-full"></div>
        </div>
        
        <div className="container px-6 sm:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-bold bg-accent-yellow px-3 py-1 border-2 border-neutral-dark mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              CLIENT SUCCESS STORIES
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-dark leading-tight"
            >
              OUR <span className="text-accent-red">WORK</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mx-auto mt-6 font-medium"
            >
              Check out how we've helped these fence companies 
              <span className="bg-yellow-500 px-2 mx-1 font-extrabold border-2 border-black inline-block transform -rotate-1">grow their business</span> 
              with strategic websites and targeted marketing campaigns.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all duration-200"
              >
                <div className={`${project.color} w-full h-56 md:h-64 border-b-4 border-black relative overflow-hidden`}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-yellow border-2 border-black px-3 py-1 font-bold transform rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    CASE STUDY
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-3 border-b-3 border-neutral-dark pb-2">{project.title}</h3>
                  <p className="font-medium mb-5">{project.description}</p>
                  <RetroButton 
                    variant="secondary"
                    size="sm" 
                    className="border-3 border-black bg-yellow-500 text-black font-extrabold hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1"
                  >
                    View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                  </RetroButton>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link href="/#contact">
              <RetroButton 
                variant="primary" 
                size="lg" 
                className="border-4 border-black text-white font-extrabold py-3 px-6 text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all duration-200"
              >
                Ready to be our next success story?
              </RetroButton>
            </Link>
          </div>
        </div>
      </RetroSection>
    </main>
  )
}
