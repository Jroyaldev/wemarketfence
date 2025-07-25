"use client"
import React, { useState } from "react"
import { ArrowRight, Check, Zap, Shield, Globe, Users, BarChart, Phone, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  // Pricing plans with modern design
  const pricingPlans = [
    {
      name: "Website Essentials",
      description: "Perfect for fence contractors who need a professional online presence without the tech headaches.",
      price: 250,
      color: "border-blue-200 hover:border-blue-300",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
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
      name: "Website + Local SEO",
      description: "For contractors who want long-term local visibility and organic lead generation.",
      price: 600,
      color: "border-emerald-200 hover:border-emerald-300",
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      features: [
        "All features from Website Essentials",
        "Local SEO setup and monthly optimization",
        "Google Business Profile optimization",
        "1 fencing-specific blog per month (for ranking)",
        "Monthly local rankings tracking + reporting",
      ],
      mostPopular: true,
    },
    {
      name: "Full Lead Generation",
      description: "For fence businesses that want leads fast and consistently through paid advertising.",
      price: 1200,
      color: "border-amber-200 hover:border-amber-300",
      icon: <Zap className="h-6 w-6 text-amber-600" />,
      features: [
        "All features from Website + Local SEO",
        "Google Ads & Facebook/Instagram Ads management",
        "Conversion tracking + monthly ad optimization",
        "Custom lead-tracking dashboard",
        "Client pays their own ad spend separately",
      ],
      mostPopular: false,
    },
  ]

  // Add-ons
  const addOns = [
    {
      name: "Extra Blog Content",
      description: "2 additional posts per month for better SEO rankings",
      price: 150,
      icon: <BarChart className="h-5 w-5 text-blue-600" />,
    },
    {
      name: "Social Media Management", 
      description: "Content creation and posting across platforms",
      price: 300,
      icon: <Users className="h-5 w-5 text-emerald-600" />,
    },
    {
      name: "Monthly Strategy Call",
      description: "30-minute consultation with marketing expert",
      price: 125,
      icon: <Phone className="h-5 w-5 text-amber-600" />,
    },
  ]

  // Common features included in all plans
  const commonFeatures = [
    "Month-to-month (no contracts)",
    "Zero setup fees", 
    "Built exclusively for fencing contractors",
    "Mobile-first responsive design",
    "SSL security certificate",
    "Fast loading speed optimization",
  ]

  // FAQ items
  const faqItems = [
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No, all our pricing plans are month-to-month with no long-term commitments. We believe in earning your business every month through results.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You pay only the monthly service fee.",
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

  // Format price to show currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-blue-50/30 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Fence Marketing Packages
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Simple <span className="text-blue-600">Pricing</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing designed specifically for fence contractors. No hidden fees, just results.
            </p>
          </div>
          
          {/* Trust indicator */}
          <div className="flex justify-center mt-12">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-neutral-200 inline-flex items-center">
              <Clock className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-neutral-700">Simple monthly pricing - no contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Choose Your Plan
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Built for Fence Contractors
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Each plan is designed to help fence companies grow their business at different stages.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="relative">
                {plan.mostPopular && (
                  <div className="absolute -top-5 left-0 right-0 text-center z-10">
                    <span className="inline-block bg-blue-600 text-white text-sm font-medium px-6 py-1 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-white border-2 ${plan.color} rounded-xl p-8 h-full flex flex-col relative transition-all duration-300 hover:shadow-lg ${plan.mostPopular ? 'shadow-md' : 'shadow-sm'}`}>
                  {/* Plan header */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      {plan.icon}
                      <h3 className="text-2xl font-bold text-neutral-900 ml-3">{plan.name}</h3>
                    </div>
                    <p className="text-neutral-600 mb-6 leading-relaxed">{plan.description}</p>
                    
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-neutral-900">{formatPrice(plan.price)}</span>
                      <span className="text-neutral-600 ml-2 mb-1">/month</span>
                    </div>
                    <div className="text-sm text-neutral-500">
                      No setup fees • Cancel anytime
                    </div>
                  </div>
                  
                  {/* Feature list */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link href="/funnel">
                      <button className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors ${plan.mostPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border border-neutral-300 hover:border-blue-300 hover:bg-blue-50 text-neutral-700 hover:text-blue-600'} inline-flex items-center justify-center`}>
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* All plans include */}
          <div className="mt-16 bg-gradient-to-br from-neutral-50 to-blue-50/30 rounded-xl p-8 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">All Plans Include</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {commonFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Add-On Services
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Power Up Your Marketing
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Enhance any plan with these additional services for even better results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-neutral-50 rounded-lg mr-4">
                    {addon.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{addon.name}</h3>
                    <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{addon.description}</p>
                    <div className="text-blue-600 font-bold">+{formatPrice(addon.price)}/month</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-neutral-50 to-blue-50/30 p-8 rounded-xl border border-neutral-200">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.question}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Fence Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call to discuss your goals and see how we can help you get more fence jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/funnel"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Call
            </Link>
            
            <Link 
              href="/our-work"
              className="border border-blue-300 text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}