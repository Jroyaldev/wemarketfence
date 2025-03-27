"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { RetroButton } from "../../components/retro-button"
import { RetroSection } from "../../components/retro-section"

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
    <main className="flex min-h-screen flex-col">
      <RetroSection className="bg-white pt-32 pb-12 sm:py-16 md:py-20">
        <div className="text-center mb-10 sm:mb-16 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold relative inline-block"
          >
            <span className="neo-heading">Our Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-6 font-bold"
          >
            Check out how we've helped these fence companies 
            <span className="bg-yellow-500 px-2 mx-1 font-extrabold border-2 border-black">grow their business</span> 
            with amazing websites and marketing campaigns!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className={`${project.color} w-full h-48 sm:h-56 md:h-64 border-b-4 border-black relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 border-3 border-black px-3 py-1 font-bold transform rotate-3">
                  CASE STUDY
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-extrabold mb-3 border-b-2 border-black pb-2">{project.title}</h3>
                <p className="font-bold mb-5">{project.description}</p>
                <RetroButton 
                  size="sm" 
                  className="border-4 border-black bg-yellow-500 text-black font-extrabold hover:bg-yellow-400 transition-colors py-2 px-4 text-sm"
                >
                  View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                </RetroButton>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/#contact">
            <RetroButton size="lg" className="bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400 transition-colors py-3 px-5 text-lg">
              Ready to be our next success story?
            </RetroButton>
          </Link>
        </div>
      </RetroSection>
    </main>
  )
}
