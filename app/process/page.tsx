"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RetroSection } from "../../components/retro-section"
import { RetroButton } from "../../components/retro-button"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Target, Rocket, Users, BarChart3 } from "lucide-react"

// Animation variants for the process steps
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ProcessPage() {
  const processSteps = [
    {
      id: 1,
      title: "Discovery Call",
      icon: "phone",
      description:
        "We'll have a quick chat to understand your business, your goals, and how we can help you achieve them.",
      color: "bg-accent-yellow",
    },
    {
      id: 2,
      title: "Custom Strategy",
      icon: "target",
      description:
        "We'll create a tailored marketing strategy specifically for your fence business and local market.",
      color: "bg-[#58CCDC]",
    },
    {
      id: 3,
      title: "Campaign Launch",
      icon: "rocket",
      description:
        "We'll implement your marketing strategy, launching targeted campaigns to attract quality leads.",
      color: "bg-accent-red",
    },
    {
      id: 4,
      title: "Lead Generation",
      icon: "users",
      description:
        "Quality leads start coming in as your campaigns gain traction in your local market.",
      color: "bg-accent-yellow",
    },
    {
      id: 5,
      title: "Growth & Optimization",
      icon: "chart",
      description:
        "We'll continuously optimize your campaigns for better performance and increased ROI.",
      color: "bg-[#58CCDC]",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-neutral-light">
      {/* Hero Section */}
      <RetroSection className="bg-neutral-light pt-20 md:pt-28 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-yellow opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-red opacity-10 rounded-full"></div>
        </div>
        
        <div className="container px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 relative">
              <span className="inline-block text-sm font-bold bg-accent-yellow px-3 py-1 border-2 border-neutral-dark mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                FENCE MARKETING EXPERTS
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-dark leading-tight">
                OUR <span className="text-accent-red">PROCESS</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-neutral-near-black mb-10 max-w-2xl mx-auto">
              A proven system that consistently delivers quality leads for fence companies across the country.
            </p>
            <div className="flex justify-center">
              <Link href="/funnel">
                <RetroButton 
                  variant="primary" 
                  size="lg"
                  className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 font-bold"
                >
                  GET STARTED
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </RetroSection>

      {/* Process Steps First Row */}
      <RetroSection className="bg-white py-20 md:py-28 border-y-4 border-neutral-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-yellow opacity-5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-red opacity-5 rounded-full"></div>
        </div>
        
        <div className="container px-6 sm:px-8 mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section header in home page style */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex flex-row">
                <div className="bg-[#58CCDC] border-4 border-neutral-dark px-4 py-2 font-extrabold text-neutral-dark">
                  OUR PROVEN APPROACH
                </div>
                <div className="bg-accent-red border-4 border-l-0 border-neutral-dark px-4 py-2 font-extrabold text-neutral-dark">
                  STEP BY STEP
                </div>
              </div>
            </div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {processSteps.slice(0, 3).map((step) => (
                <motion.div
                  key={step.id}
                  className="bg-white border-4 border-neutral-dark p-6 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  variants={itemVariants}
                >
                  <div className={`w-20 h-20 ${step.color} flex items-center justify-center rounded-full mb-4 border-4 border-neutral-dark`}>
                    {step.icon === "phone" ? (
                      <Phone size={36} className="text-neutral-dark" />
                    ) : step.icon === "target" ? (
                      <Target size={36} className="text-neutral-dark" />
                    ) : step.icon === "rocket" ? (
                      <Rocket size={36} className="text-neutral-dark" />
                    ) : step.icon === "users" ? (
                      <Users size={36} className="text-neutral-dark" />
                    ) : (
                      <BarChart3 size={36} className="text-neutral-dark" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-neutral-near-black">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* Process Steps Second Row */}
      <RetroSection className="bg-neutral-light py-16 md:py-24 relative overflow-hidden">
        {/* Background shape */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-accent-yellow opacity-5 -skew-x-12 transform origin-top-right"></div>
        
        <div className="container px-6 sm:px-8 mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {processSteps.slice(3).map((step) => (
                <motion.div
                  key={step.id}
                  className="bg-white border-4 border-neutral-dark p-6 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  variants={itemVariants}
                >
                  <div className={`w-20 h-20 ${step.color} flex items-center justify-center rounded-full mb-4 border-4 border-neutral-dark`}>
                    {step.icon === "phone" ? (
                      <Phone size={36} className="text-neutral-dark" />
                    ) : step.icon === "target" ? (
                      <Target size={36} className="text-neutral-dark" />
                    ) : step.icon === "rocket" ? (
                      <Rocket size={36} className="text-neutral-dark" />
                    ) : step.icon === "users" ? (
                      <Users size={36} className="text-neutral-dark" />
                    ) : (
                      <BarChart3 size={36} className="text-neutral-dark" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-neutral-near-black">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* CTA Section */}
      <RetroSection className="bg-white py-16 md:py-20 border-t-4 border-neutral-dark">
        <div className="container px-6 sm:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-6">
              Ready to Grow Your Fence Business?
            </h2>
            <p className="text-lg text-neutral-near-black mb-8">
              Let's work together to bring more qualified leads to your fence company.
            </p>
            <div className="flex justify-center">
              <Link href="/funnel">
                <RetroButton 
                  variant="primary" 
                  size="lg"
                  className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 font-bold"
                >
                  START TODAY
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
