"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { LockKeyhole, EyeOff, ArrowRight, Clock } from "lucide-react"

import { RetroButton } from "../../components/retro-button"
import { RetroSection } from "../../components/retro-section"

export default function OurWork() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <RetroSection className="bg-white border-b-4 border-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-black [text-shadow:4px_4px_0px_#FCD34D]"
            >
              Our Client Showcase
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-10 font-bold max-w-2xl mx-auto"
            >
              At We Market Fence, we pride ourselves on delivering consistent, brand-focused 
              marketing solutions that help fence companies stand out.
            </motion.p>
          </div>
        </div>
      </RetroSection>

      {/* Client Privacy Section */}
      <RetroSection className="bg-[#f8f8f8] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-visible"
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-500 p-3 rounded-full border-4 border-black transform rotate-12 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-black font-extrabold text-sm md:text-base">COMING SOON!</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 border-b-4 border-black pb-4">
                    Client Confidentiality Matters
                  </h2>
                  <p className="text-lg mb-6">
                    We believe in <span className="font-bold">protecting our clients' competitive edge</span>. 
                    The fence industry is highly competitive, and our marketing strategies give our clients 
                    a significant advantage in their local markets.
                  </p>
                  <p className="text-lg mb-6">
                    While we're currently in the process of obtaining showcase permissions from our clients, 
                    we maintain strict confidentiality until they approve sharing their success stories.
                  </p>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="bg-yellow-100 p-4 rounded-full border-2 border-black flex-shrink-0">
                      <EyeOff size={24} className="text-black" />
                    </div>
                    <p className="font-bold">We respect the privacy of our fence company clients</p>
                  </div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="bg-yellow-100 p-4 rounded-full border-2 border-black flex-shrink-0">
                      <Clock size={24} className="text-black" />
                    </div>
                    <p className="font-bold">Check back soon – client showcases coming!</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-[#58CCDC]/20 border-4 border-[#58CCDC] p-6 md:p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-center">What You Can Expect Soon</h3>
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {[
                        "Before & After Website Transformations",
                        "Lead Generation Success Stories",
                        "Client Conversion Rate Improvements",
                        "Brand Identity Case Studies",
                        "Local SEO Ranking Results"
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          variants={itemVariants}
                          className="flex items-start"
                        >
                          <span className="text-yellow-500 mr-2 font-bold">✓</span>
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* Brand Consistency Section */}
      <RetroSection className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 inline-block relative">
                <span className="relative z-10">Why Brand Consistency Matters</span>
                <span className="absolute bottom-0 left-0 w-full h-4 bg-yellow-400 -z-10 transform -rotate-2"></span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Our approach focuses on creating a cohesive brand identity that resonates 
                with your ideal customers across all platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Visual Identity",
                  description: "We develop fence brand identities that are instantly recognizable and memorable.",
                  icon: "🎨"
                },
                {
                  title: "Messaging Strategy",
                  description: "We craft fence-specific messaging that connects with homeowners and contractors.",
                  icon: "💬"
                },
                {
                  title: "Multi-Platform Presence",
                  description: "We ensure your fence business looks professional on every platform and touchpoint.",
                  icon: "🌐"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </RetroSection>

      {/* CTA Section */}
      <RetroSection className="bg-[#58CCDC]/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Transform Your Fence Business?
            </h2>
            <p className="text-lg mb-8">
              Don't wait to stand out from your competition. 
              Let's create a marketing strategy that builds your fence brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <RetroButton className="bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400 py-3 px-6 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </RetroSection>
    </main>
  )
}
