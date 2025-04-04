"use client"
import React, { useState } from "react"
import { ArrowRight, Check, Zap, Shield, Globe, Users, BarChart, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { RetroButton } from "../../components/retro-button"
import { RetroCard } from "../../components/retro-card"
import { RetroSection } from "../../components/retro-section"
import { ExitIntentPopup } from "../../components/exit-intent-popup"
import { cn } from "../../lib/utils"

// Animation variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")
  
  // Pricing plans with feature lists
  const pricingPlans = [
    {
      name: "Conversion-Optimized Website",
      description: "Perfect for fence pros who need a professional website without the tech headaches.",
      price: 250,
      color: "bg-accent-yellow",
      icon: <Shield className="h-6 w-6 text-neutral-dark" />,
      features: [
        "Custom-designed, mobile-friendly website",
        "Built to convert visitors into fence leads",
        "Hosting, backups, SSL, and monthly updates included",
        "Minor content changes (text, images) each month",
        "Fully managed (you never touch the backend)",
      ],
      mostPopular: false,
    },
    {
      name: "Website + SEO",
      description: "For contractors who want long-term local visibility and organic leads.",
      price: 600,
      color: "bg-[#58CCDC]",
      icon: <Globe className="h-6 w-6 text-neutral-dark" />,
      features: [
        "All features from Tier 1",
        "Local SEO setup and monthly optimization",
        "Google Business Profile optimization",
        "1 fencing-specific blog per month (for ranking)",
        "Monthly local rankings tracking + reporting",
      ],
      mostPopular: true,
    },
    {
      name: "Full-Service Lead Gen",
      description: "For fence businesses that want leads fast and consistently.",
      price: 1200,
      color: "bg-accent-red",
      icon: <Zap className="h-6 w-6 text-neutral-dark" />,
      features: [
        "All features from Tier 2",
        "Google Ads & Facebook/Instagram Ads management",
        "Conversion tracking + monthly ad optimization",
        "Custom lead-tracking dashboard",
        "Client pays their own ad spend separately",
      ],
      mostPopular: false,
    },
  ]

  // Add-ons and upsells
  const addOns = [
    {
      name: "Extra Blog Content",
      description: "2 additional posts per month",
      price: 150,
      icon: <BarChart className="h-5 w-5 text-neutral-dark" />,
    },
    {
      name: "Social Media Management",
      description: "Content creation and posting",
      price: 300,
      icon: <Users className="h-5 w-5 text-neutral-dark" />,
    },
    {
      name: "Monthly Strategy Call",
      description: "30-minute consultation with marketing expert",
      price: 125,
      icon: <Phone className="h-5 w-5 text-neutral-dark" />,
    },
  ]

  // Common features included in all plans
  const commonFeatures = [
    "Month-to-month (no contracts)",
    "Zero setup fees",
    "Built exclusively for fencing contractors",
    "Mobile-Friendly Design",
    "SSL Security Certificate",
    "Fast Loading Speed",
  ]

  // FAQ items
  const faqItems = [
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No, all our pricing plans are month-to-month with no long-term commitments. We believe in earning your business every month through results.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees.",
    },
    {
      question: "How long until I start seeing results?",
      answer: "Most fence contractors start seeing an increase in quality leads within 30-45 days. SEO results typically take 3-4 months to fully develop as we build your online presence.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "What areas do you service?",
      answer: "We work with fence contractors throughout the United States. Our marketing strategies are customized for your specific service area and target market.",
    },
    {
      question: "Do you offer any guarantees?",
      answer: "While we can't guarantee specific results due to the many variables in marketing, we do offer a satisfaction guarantee. If you're not happy with our service, we'll work with you to make it right.",
    },
  ]

  // Format price to show commas and currency symbol
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="flex min-h-screen flex-col bg-neutral-light">
      {/* Show exit intent popup for conversions */}
      <ExitIntentPopup />
      
      {/* Hero Section */}
      <RetroSection 
        className="bg-neutral-light pt-20 md:pt-28 pb-16 md:pb-24 relative overflow-hidden"
        border="none"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-yellow opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-red opacity-10 rounded-full"></div>
        </div>
        
        <div className="container px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 relative">
              <span className="inline-block text-sm font-medium bg-accent-yellow px-3 py-1 rounded-md mb-4 shadow-sm">
                FENCE MARKETING PACKAGES
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-dark leading-tight">
                SIMPLE <span className="text-accent-red">PRICING</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-neutral-near-black mb-10 max-w-2xl mx-auto">
              Transparent pricing designed specifically for fence contractors. No hidden fees, just results.
            </p>
          </div>
          
          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-3 rounded-lg shadow-sm inline-flex items-center">
              <span className="text-sm font-medium text-neutral-dark px-3">Simple monthly pricing - no contracts</span>
            </div>
          </div>
        </div>
      </RetroSection>

      {/* Pricing Section */}
      <RetroSection className="bg-white py-16 md:py-24 border-t border-neutral-200 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-yellow opacity-5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-red opacity-5 rounded-full"></div>
        </div>
        
        <div className="container px-6 sm:px-8 mx-auto relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex flex-row">
                <div className="bg-[#58CCDC] border border-r-0 border-neutral-dark px-4 py-2 font-bold text-neutral-dark rounded-l-md">
                  CHOOSE YOUR
                </div>
                <div className="bg-accent-red border border-neutral-dark px-4 py-2 font-bold text-neutral-dark rounded-r-md">
                  PERFECT PLAN
                </div>
              </div>
            </div>
            
            {/* Pricing Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {pricingPlans.map((plan) => (
                <motion.div key={plan.name} variants={itemVariants}>
                  <div className="relative h-full">
                    {plan.mostPopular && (
                      <div className="absolute -top-5 left-0 right-0 text-center z-10">
                        <span className="inline-block bg-accent-red text-white text-sm font-medium px-6 py-1 rounded-full shadow-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div 
                      className={cn(
                        "bg-white border border-neutral-dark rounded-lg p-6 md:p-8 h-full flex flex-col relative z-0",
                        plan.mostPopular ? "shadow-md" : "shadow-sm",
                        "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md"
                      )}
                    >
                      {/* Plan header */}
                      <div className="mb-6">
                        <div className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center mb-4 shadow-sm`}>
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-dark mb-2">{plan.name}</h3>
                        <p className="text-neutral-near-black mb-4">{plan.description}</p>
                        <div className="flex items-end mb-1">
                          <span className="text-4xl font-bold text-neutral-dark">{formatPrice(plan.price)}</span>
                          <span className="text-neutral-near-black ml-2 mb-1">/mo</span>
                        </div>
                        <div className="text-sm text-neutral-near-black mb-6">
                          No setup fees
                        </div>
                      </div>
                      
                      {/* Feature list */}
                      <div className="flex-grow mb-8">
                        <ul className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-accent-red mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-near-black">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Link href="/landing">
                          <RetroButton
                            variant={plan.mostPopular ? "primary" : "secondary"}
                            size="lg"
                            className="w-full justify-center"
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </RetroButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Included with all plans */}
            <div className="mt-16 md:mt-20 bg-neutral-light rounded-lg p-6 md:p-8 border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-dark mb-6 text-center">All Plans Include</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {commonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-accent-red mr-3 flex-shrink-0" />
                    <span className="text-neutral-near-black">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RetroSection>
      
      {/* Add-ons Section */}
      <div className="mt-16 md:mt-24">
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-row">
            <div className="bg-[#58CCDC] border border-r-0 border-neutral-dark px-4 py-2 font-bold text-neutral-dark rounded-l-md">
              POWER UP
            </div>
            <div className="bg-accent-red border border-neutral-dark px-4 py-2 font-bold text-neutral-dark rounded-r-md">
              YOUR PLAN
            </div>
          </div>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {addOns.map((addon, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
                <div className="flex items-start">
                  <div className="bg-neutral-light p-2 rounded-md mr-4">
                    {addon.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-dark">{addon.name}</h3>
                    <p className="text-sm text-neutral-near-black mb-3">{addon.description}</p>
                    <div className="text-accent-red font-bold">+{formatPrice(addon.price)}/mo</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* FAQ Section */}
      <RetroSection className="bg-neutral-light py-16 md:py-24 border-t border-neutral-200 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#58CCDC] opacity-5 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent-yellow opacity-5 rounded-full"></div>
        
        <div className="container px-6 sm:px-8 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
                  <h3 className="text-lg font-medium text-neutral-dark mb-3">{item.question}</h3>
                  <p className="text-neutral-near-black">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RetroSection>
      
      {/* CTA Section */}
      <RetroSection className="bg-white py-16 md:py-20 border-t border-neutral-200">
        <div className="container px-6 sm:px-8 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">Ready to Grow Your Fence Business?</h2>
            <p className="text-xl text-neutral-near-black mb-8 max-w-2xl mx-auto">
              Schedule a free discovery call to discuss your goals and see how we can help you get more fence jobs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/landing">
                <RetroButton
                  variant="primary"
                  size="lg"
                  className="px-8"
                  icon={<Phone className="h-5 w-5" />}
                >
                  Schedule Call
                </RetroButton>
              </Link>
              <Link href="/process">
                <RetroButton
                  variant="secondary"
                  size="lg"
                  className="px-8"
                >
                  Learn More
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
