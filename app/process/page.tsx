"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, BarChart, Lightbulb, Rocket, Settings } from "lucide-react"
import Link from "next/link"
import { RetroButton } from "../../components/retro-button"
import { RetroSection } from "../../components/retro-section"

export default function Process() {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Discovery Call",
      description: "We learn about your fence business, customers, and goals during a friendly chat.",
      color: "bg-[#58CCDC]"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategy Session",
      description: "Our team puts together a custom marketing plan designed specifically for your fence business.",
      color: "bg-yellow-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Design & Development",
      description: "We create your website and marketing materials with a focus on attracting new customers.",
      color: "bg-[#AADB1E]"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch & Optimize",
      description: "We launch your new marketing assets and continuously improve them for maximum results.",
      color: "bg-[#FF9B50]"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Measure & Grow",
      description: "We track performance and make data-driven improvements to grow your fence business.",
      color: "bg-[#58CCDC]"
    }
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
            <span className="neo-heading">Our Process</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-6 font-bold"
          >
            Here's how we transform your fence company's online presence from 
            <span className="bg-[#FF9B50] px-2 mx-1 font-extrabold border-2 border-black">meh</span> 
            to 
            <span className="bg-[#AADB1E] px-2 mx-1 font-extrabold border-2 border-black">amazing!</span>
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 sm:mb-12 last:mb-0"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-16 bottom-0 w-1 bg-black border-l-2 border-dashed hidden sm:block" />
              )}
              
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className={`${step.color} w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-4 border-black z-10 flex-shrink-0`}>
                  {step.icon}
                </div>
                
                <div className="bg-white border-4 border-black p-5 sm:p-6 flex-grow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-3 pb-2 border-b-2 border-black">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="font-bold">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/#contact">
            <RetroButton size="lg" className="bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400 transition-colors py-3 px-5 text-lg">
              Ready to get started? <ArrowRight className="ml-2 h-5 w-5" />
            </RetroButton>
          </Link>
        </div>
      </RetroSection>
    </main>
  )
}
