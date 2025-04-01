"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { EyeOff, ArrowRight, Clock, CheckCircle, Layers } from "lucide-react"

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
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <RetroSection 
        background="dark" 
        spacing="large"
        className="relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Client Work
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            At We Market Fence, we deliver consistent, brand-focused 
            marketing solutions that help fence companies stand out.
          </p>
        </div>
      </RetroSection>

      {/* Client Privacy Section */}
      <RetroSection background="white" spacing="large" border="both">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Confidentiality
            </h2>
            <div className="w-24 h-1 bg-accent-red mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              We're committed to protecting our clients' competitive advantage in their local markets.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-neutral-dark p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-neutral-light">
                  Why We Keep Client Work Private
                </h3>
                <p className="mb-6">
                  We believe in protecting our clients' competitive edge. 
                  The fence industry is highly competitive, and our marketing strategies 
                  give our clients a significant advantage in their local markets.
                </p>
                <p className="mb-8">
                  While we're currently in the process of obtaining showcase permissions, 
                  we maintain strict confidentiality until they approve sharing their success stories.
                </p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-neutral-light p-3 rounded-full border-2 border-neutral-dark flex-shrink-0">
                    <EyeOff size={20} className="text-neutral-dark" />
                  </div>
                  <p>We respect the privacy of our fence company clients</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-neutral-light p-3 rounded-full border-2 border-neutral-dark flex-shrink-0">
                    <Clock size={20} className="text-neutral-dark" />
                  </div>
                  <p>Check back soon – client showcases coming!</p>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="border-4 border-neutral-dark p-6 md:p-8 bg-neutral-light">
                  <h3 className="text-xl font-bold mb-6 text-center">
                    What You Can Expect Soon
                  </h3>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
                        <CheckCircle className="h-5 w-5 text-accent-red mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </RetroSection>

      {/* Brand Consistency Section */}
      <RetroSection background="light" spacing="large">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Brand Consistency Matters
            </h2>
            <div className="w-24 h-1 bg-accent-red mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              Our approach focuses on creating a cohesive brand identity across all platforms.
            </p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Visual Identity",
                description: "We develop fence brand identities that are instantly recognizable and memorable.",
                icon: "/icons/strategy.svg"
              },
              {
                title: "Messaging Strategy",
                description: "We craft fence-specific messaging that connects with homeowners and contractors.",
                icon: "/icons/customer.svg"
              },
              {
                title: "Multi-Platform Presence",
                description: "We ensure your fence business looks professional on every platform and touchpoint.",
                icon: "lucide"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border-4 border-neutral-dark p-6 flex flex-col items-center text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="w-20 h-20 bg-neutral-light flex items-center justify-center rounded-full mb-4 border-4 border-neutral-dark">
                  {item.icon === "lucide" ? 
                    <Layers size={40} className="text-neutral-dark" /> :
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  }
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-800">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RetroSection>

      {/* CTA Section */}
      <RetroSection background="dark" spacing="large">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Fence Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a marketing strategy that builds your fence brand.
          </p>
          <div className="flex justify-center">
            <Link href="/#contact">
              <RetroButton variant="primary" size="lg">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </RetroButton>
            </Link>
          </div>
        </div>
      </RetroSection>
    </main>
  )
}
