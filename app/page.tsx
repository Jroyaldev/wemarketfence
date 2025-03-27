"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Monitor, Palette, Search, MessageCircle } from "lucide-react"

import { RetroButton } from "../components/retro-button"
import { RetroCard } from "../components/retro-card"
import { RetroSection } from "../components/retro-section"
import { FenceLogo } from "../components/fence-logo"

export default function Home() {
  const services = [
    {
      title: "Website Design",
      description: "Eye-catching websites that make your fence business stand out!",
      icon: <Monitor className="h-10 w-10" />,
      color: "primary",
    },
    {
      title: "Brand Identity",
      description: "Memorable logos and branding that customers recognize!",
      icon: <Palette className="h-10 w-10" />,
      color: "secondary",
    },
    {
      title: "SEO Strategy",
      description: "Get found by customers looking for fencing in your area!",
      icon: <Search className="h-10 w-10" />,
      color: "accent",
    },
    {
      title: "Social Media",
      description: "Engage with customers and showcase your best work!",
      icon: <MessageCircle className="h-10 w-10" />,
      color: "primary",
    },
  ]

  const features = [
    "Industry-specific expertise",
    "Mobile-friendly designs",
    "Local SEO optimization",
    "Fast turnaround times",
    "Affordable monthly plans",
    "Dedicated support team",
  ]

  const testimonials = [
    {
      quote: "Our phone started ringing off the hook after our new website launched!",
      name: "Sarah Johnson",
      company: "Elite Fence Designs",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "We've doubled our business since working with We Market Fence. Best investment ever!",
      name: "Mike Brown",
      company: "Brown's Custom Fencing",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "They understand the fencing business and know exactly how to market our services.",
      name: "Jennifer Smith",
      company: "Smith's Fencing Solutions",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <RetroSection className="bg-[#E6F2FF] pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        {/* No more clouds */}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="px-4 sm:px-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-6 sm:mb-8 inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black bg-yellow-500 border-4 border-black px-3 sm:px-4 py-1 sm:py-2 z-10 relative mb-2 sm:mb-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                WE MARKET
              </h1>
              <br />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black bg-yellow-500 border-4 border-black px-3 sm:px-4 py-1 sm:py-2 z-10 relative inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                FENCE!
              </h1>
              {/* Removed the circle background */}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-10 text-black max-w-xl mx-auto lg:mx-0"
            >
              Supercharge your fencing business with websites that attract customers and grow your business!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <RetroButton size="lg" className="bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400 transition-colors py-3 px-5 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Boost Your Business!
              </RetroButton>
              <RetroButton size="lg" className="bg-[#58CCDC] border-4 border-black text-black font-extrabold hover:bg-[#58CCDC]/90 transition-colors py-3 px-5 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                See Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </RetroButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative bg-white border-4 border-black p-4 md:p-6 rounded-xl transform rotate-3 max-w-[85%] mx-auto">
              {/* Repositioned the BOOST bubble for better mobile layout */}
              <div className="absolute -top-10 right-0 sm:-top-12 md:-top-14 lg:-top-16 sm:-right-5 md:-right-8 bg-primary p-3 rounded-xl border-3 border-black transform rotate-3 z-10">
                <p className="text-white font-extrabold text-sm md:text-base lg:text-lg">BOOST YOUR BUSINESS!</p>
              </div>
              {/* Repositioned the WOW bubble */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 lg:-bottom-10 lg:-left-10 bg-accent p-2 rounded-full border-3 border-black transform -rotate-6 z-10">
                <p className="text-black font-bold text-sm md:text-base lg:text-lg">WOW!</p>
              </div>
              <FenceLogo size="lg" animated withCircle className="w-48 h-48 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto" />
            </div>
          </motion.div>
        </div>
      </RetroSection>

      {/* Services Section */}
      <RetroSection id="services" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
            <span className="neo-heading">Our Awesome Services!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-6 font-bold">
            We help fencing companies like yours get 
            <span className="bg-yellow-500 px-2 mx-1 font-extrabold border-2 border-black">more customers</span> 
            with these fantastic marketing services!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6">
          {services.map((service, index) => (
            <RetroCard 
              key={index} 
              className="h-full border-4 border-black transform transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex flex-col items-center text-center p-5 md:p-6">
                <div className={`w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 flex items-center justify-center rounded-none border-4 border-black mb-4 ${
                  index % 4 === 0 ? "bg-[#58CCDC]" : 
                  index % 4 === 1 ? "bg-yellow-500" : 
                  index % 4 === 2 ? "bg-[#AADB1E]" :
                  "bg-[#FF9B50]"
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold mb-3 border-b-2 border-black pb-2">{service.title}</h3>
                <p className="font-bold mb-5 text-base">{service.description}</p>
                <RetroButton 
                  size="sm" 
                  className="mt-auto border-4 border-black bg-yellow-500 text-black font-extrabold hover:bg-yellow-400 transition-colors py-2 px-4 text-sm"
                >
                  Learn More!
                </RetroButton>
              </div>
            </RetroCard>
          ))}
        </div>
      </RetroSection>

      {/* Features Section */}
      <RetroSection id="about" className="bg-[#F0F8FF] py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white border-4 border-black p-5 md:p-8 rounded-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 relative inline-block">
                <span className="neo-heading">Why Choose Us?</span>
              </h2>
              <div className="space-y-4 md:space-y-5 mt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-yellow-500 rounded-none border-3 border-black p-1 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-base sm:text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 relative"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold relative inline-block">
              <span className="neo-heading">Happy Customers</span>
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white border-4 border-black p-5"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-sky p-1 border-3 border-black w-16 h-16 flex-shrink-0">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-base sm:text-lg">"{testimonial.quote}"</p>
                      <div className="border-t-2 border-black pt-2">
                        <p className="font-bold text-base">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </RetroSection>

      {/* CTA Section */}
      <RetroSection id="contact" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 relative inline-block">
            <span className="neo-heading">Ready To Grow?</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold mb-8">
            Join dozens of successful fence companies who are growing their business with our help! 
            <span className="bg-[#58CCDC] px-2 mx-1 font-extrabold border-3 border-black">Start today!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton size="lg" className="bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400 transition-colors py-3 px-5 text-lg">
              Get Your Free Consultation!
            </RetroButton>
          </div>
        </div>
      </RetroSection>
    </main>
  )
}
