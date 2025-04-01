"use client"
import React, { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Computer, PenTool, Search, MessageCircle, ArrowDownCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"

import { RetroButton } from "../components/retro-button"
import { RetroCard } from "../components/retro-card"
import { RetroSection } from "../components/retro-section"
import { ContactForm } from "../components/contact-form"
import { QuickLeadModal } from "../components/quick-lead-modal"
import { ExitIntentPopup } from "../components/exit-intent-popup"
import { cn } from "../lib/utils"

// SEO-focused page component
export default function Home() {
  const [isQuickLeadModalOpen, setIsQuickLeadModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Service offerings with keyword-rich descriptions
  const services = [
    { 
      title: "Fence Website Design", 
      description: "Eye-catching websites that showcase your fence installation projects and generate more leads!", 
      icon: <Computer className="h-8 w-8 text-neutral-dark" />,
      color: "bg-accent-yellow"
    },
    { 
      title: "Fence Brand Identity", 
      description: "Stand out from competitors with professional fence company branding that customers remember!", 
      icon: <PenTool className="h-8 w-8 text-neutral-dark" />,
      color: "bg-[#58CCDC]"
    },
    { 
      title: "Fence SEO Strategy", 
      description: "Rank higher on Google when local customers search for fence installation in your service area!", 
      icon: <Search className="h-8 w-8 text-neutral-dark" />,
      color: "bg-accent-red"
    },
    { 
      title: "Fence Social Media", 
      description: "Showcase your best fence projects and engage with potential customers through strategic social media!", 
      icon: <MessageCircle className="h-8 w-8 text-neutral-dark" />,
      color: "bg-[#A3E635]"
    },
  ]

  const features = [
    "Fence industry expertise",
    "Mobile-friendly fence websites",
    "Local fence company SEO",
    "Fast turnaround for fence contractors",
    "Dedicated fence marketing support",
    "Affordable fence marketing plans",
  ]

  const testimonials = [
    {
      quote: "We Market Fence helped us improve our website and Google rankings. We're now getting consistent fence installation leads every month.",
      name: "Mike Larson",
      company: "Precision Fence Co.",
      image: "/images/testimonials/mike-larson.png",
      avatar: "/images/testimonials/mike-larson.png",
      position: "Owner",
    },
    {
      quote: "Their social media strategy helped us showcase our best fence projects. We've seen a noticeable increase in quality fence installation inquiries.",
      name: "Sarah Thompson",
      company: "Valley Fencing Solutions",
      image: "/images/testimonials/sarah-thompson.png",
      avatar: "/images/testimonials/sarah-thompson.png",
      position: "Marketing Manager",
    },
    {
      quote: "The targeted ads they created for us have brought in more qualified fence installation leads. Our sales team is much happier with the prospect quality.",
      name: "Robert Johnson",
      company: "Metro Fence & Deck",
      image: "/images/testimonials/robert-johnson.png",
      avatar: "/images/testimonials/robert-johnson.png",
      position: "Sales Director",
    },
  ]

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "We Market Fence",
    "description": "Specialized marketing agency for fence contractors and fence installation companies",
    "url": "https://wemarketfence.com",
    "telephone": "(615) 561-0502",
    "email": "jonny@wemarketfence.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "name": "United States"
    },
    "image": "https://wemarketfence.com/images/wmf.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61574417921000",
      "https://twitter.com/wemarketfence",
      "https://instagram.com/wemarketfence"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fence Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence Website Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence SEO Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence Social Media Marketing"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <Head>
        <title>We Market Fence - Professional Marketing for Fence Contractors</title>
        <meta name="description" content="We Market Fence is a specialized marketing agency for fence contractors and fence installation companies. Get more fence jobs with our expert marketing services." />
        <meta name="keywords" content="fence marketing, fence contractors, fence installation, fence website design, fence SEO, fence social media" />
      </Head>

      <main className="flex min-h-screen flex-col bg-neutral-light">
        {/* Show conversion components */}
        <ExitIntentPopup />
        
        {/* Hero Section - Simplified with cleaner layout */}
        <section aria-label="Hero section" className="bg-neutral-light pt-16 md:pt-24 pb-12 md:pb-20 relative overflow-hidden">
          {/* Single background element - reduced visual noise */}
          <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-accent-yellow opacity-5 rounded-full"></div>
          
          <div className="container px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Text content with enhanced typography and animations */}
              <div className="text-center md:text-left">
                <div className="mb-6 relative">
                  <span className="inline-block text-sm font-bold bg-accent-yellow px-3 py-1 border-2 border-neutral-dark mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    #1 FENCE MARKETING
                  </span>
                  <h1 className={cn(
                    "text-5xl sm:text-6xl font-extrabold text-neutral-dark leading-tight",
                    "transition-all duration-500 ease-out",
                  )}>
                    GET MORE <span className="text-accent-red">FENCE JOBS</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl text-neutral-near-black mb-6 max-w-xl mx-auto md:mx-0">
                  No fluff. Just leads. Websites & marketing built specifically for fence professionals.
                </p>
                
                {/* Stats bar - simplified with rounded corners */}
                <div className="mb-8 bg-white border-3 border-neutral-dark p-3 grid grid-cols-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-sm">
                  <div className="text-center border-r-2 border-neutral-light px-2">
                    <div className="text-2xl font-bold text-accent-red">150+</div>
                    <div className="text-sm font-medium">Contractors</div>
                  </div>
                  <div className="text-center border-r-2 border-neutral-light px-2">
                    <div className="text-2xl font-bold text-accent-red">30%</div>
                    <div className="text-sm font-medium">Avg. Growth</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-2xl font-bold text-accent-red">5★</div>
                    <div className="text-sm font-medium">Rating</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <RetroButton 
                    size="lg" 
                    variant="primary" 
                    onClick={() => setIsQuickLeadModalOpen(true)}
                    className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto px-8 font-bold"
                    aria-label="Get started with fence marketing"
                  >
                    GET STARTED
                  </RetroButton>
                  
                  <Link href="/our-work" aria-label="See our fence marketing portfolio">
                    <RetroButton 
                      size="lg" 
                      variant="secondary" 
                      className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto px-8 font-bold"
                      icon={<ArrowRight className="ml-2 h-5 w-5" />}
                    >
                      SEE OUR WORK
                    </RetroButton>
                  </Link>
                </div>
              </div>

              {/* Image area - simplified without excessive decorative elements */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <Image 
                    src="/images/wmf.png" 
                    alt="We Market Fence - Professional marketing for fence companies and contractors" 
                    width={400} 
                    height={300} 
                    priority
                    className="w-full h-auto max-w-md relative z-10" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Cleaner layout */}
        <section id="services" aria-label="Fence marketing services" className="bg-white py-16 md:py-24 border-y-4 border-neutral-dark relative">
          <div className="container px-6 sm:px-8 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              {/* Simplified heading with single color background */}
              <div className="inline-block mb-6 bg-accent-red border-3 border-neutral-dark px-5 py-2">
                <span className="font-bold text-white">OUR SERVICES</span>
              </div>
              
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                Specialized Marketing For Fence Companies
              </h2>
              
              <p className="text-lg text-neutral-near-black max-w-2xl mx-auto">
                We offer specialized marketing solutions designed exclusively for fence contractors to generate more leads and grow your fence business.
              </p>
            </div>
            
            {/* Service cards with consistent styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <article className="flex flex-col h-full border-3 border-neutral-dark bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    {/* Colored square with icon at top */}
                    <div className="pt-6 px-6 text-center">
                      <div className={`w-12 h-12 mx-auto ${service.color} border-3 border-neutral-dark flex items-center justify-center mb-3`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-dark mb-2">{service.title}</h3>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 pt-2 flex flex-col flex-grow">
                      <p className="text-sm text-neutral-near-black mb-4 flex-grow">{service.description}</p>
                      
                      <div className="mt-auto pt-3 border-t border-neutral-light">
                        <Link 
                          href="#contact"
                          className="flex items-center font-medium text-neutral-dark hover:text-accent-red transition-colors"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          Learn More 
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1 duration-200" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <RetroButton 
                size="lg" 
                variant="primary" 
                onClick={() => setIsQuickLeadModalOpen(true)}
                className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 font-bold"
                aria-label="Get a custom fence marketing plan"
              >
                GET YOUR CUSTOM MARKETING PLAN
              </RetroButton>
            </div>
          </div>
        </section>

        {/* Benefits & Social Proof Section - Combined for more focus */}
        <section aria-label="Benefits and testimonials" className="py-16 md:py-24 bg-neutral-light relative">
          <div className="container px-6 sm:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="order-2 lg:order-1">
                {/* Left side content - Marketing features */}
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  {/* Simplified header */}
                  <div className="inline-block mb-5 bg-accent-red border-3 border-neutral-dark px-4 py-2">
                    <span className="font-bold text-white">
                      WHY CHOOSE US
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-dark mb-5">
                    We understand the unique challenges of marketing fence businesses
                  </h3>
                  
                  <p className="text-base text-neutral-near-black mb-8">
                    Unlike generic marketing agencies, we focus exclusively on fence companies. This specialization means we know exactly what works in your fence industry.
                  </p>
                </div>
              
                {/* Feature cards in a cleaner 2x3 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="border-3 border-neutral-dark bg-white p-3 flex items-start transition-all duration-200 hover:translate-y-[-2px]"
                    >
                      <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border-3 border-neutral-dark mr-3 ${
                        index % 2 === 0 ? "bg-accent-red" : "bg-[#58CCDC]"
                      }`}>
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <p className="font-medium text-neutral-dark mt-2">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 mb-8 lg:mb-0">
                {/* Right side content - Featured testimonial */}
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  {/* Simplified header */}
                  <div className="inline-block mb-5 bg-[#58CCDC] border-3 border-neutral-dark px-4 py-2">
                    <span className="font-bold text-neutral-dark">
                      WHAT OUR CLIENTS SAY
                    </span>
                  </div>
                  
                  <p className="text-base text-neutral-near-black mb-6 mx-auto lg:mx-0 max-w-lg">
                    Hear from fence contractors who have transformed their businesses with our specialized fence marketing.
                  </p>
                  
                  {/* Featured testimonial */}
                  <div className="bg-white border-3 border-neutral-dark p-5 mb-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-3xl font-extrabold text-accent-red mb-2">"</div>
                    <blockquote className="text-lg text-neutral-dark mb-4">
                      We Market Fence helped us improve our website and Google rankings. We're now getting consistent fence installation leads every month.
                    </blockquote>
                    <footer className="flex items-center">
                      <div className="w-10 h-10 rounded-full border-3 border-neutral-dark mr-3 flex items-center justify-center bg-accent-red">
                        <span className="text-white font-bold text-xs">ML</span>
                      </div>
                      <cite className="text-sm not-italic">
                        Mike Larson, <span className="text-accent-red font-semibold">Precision Fence Co.</span>
                      </cite>
                    </footer>
                  </div>

                  {/* Second testimonial - simplified version */}
                  <div className="bg-white border-3 border-neutral-dark p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-3xl font-extrabold text-accent-red mb-2">"</div>
                    <blockquote className="text-lg text-neutral-dark mb-4">
                      The targeted ads they created for us have brought in more qualified fence installation leads. Our sales team is much happier with the prospect quality.
                    </blockquote>
                    <footer className="flex items-center">
                      <div className="w-10 h-10 rounded-full border-3 border-neutral-dark mr-3 flex items-center justify-center bg-[#58CCDC]">
                        <span className="text-white font-bold text-xs">RJ</span>
                      </div>
                      <cite className="text-sm not-italic">
                        Robert Johnson, <span className="text-accent-red font-semibold">Metro Fence & Deck</span>
                      </cite>
                    </footer>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <RetroButton
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      variant="primary"
                      size="lg"
                      className="font-bold"
                      icon={<ArrowRight className="ml-2 h-5 w-5" />}
                      aria-label="Speak with a fence marketing specialist"
                    >
                      SPEAK WITH A SPECIALIST
                    </RetroButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section - Simplified and focused */}
        <section id="contact" aria-label="Contact us" className="bg-white py-16 md:py-24 border-t-4 border-neutral-dark">        
          <div className="container px-6 sm:px-8 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
                READY TO GET MORE FENCE JOBS?
              </h2>
              
              <p className="text-lg text-neutral-near-black max-w-2xl mx-auto">
                Let's talk about how we can help grow your fence business.
              </p>
            </div>
            
            {/* Cleaner card layout */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-light border-3 border-neutral-dark p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Contact Information */}
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold text-neutral-dark mb-6 uppercase relative inline-block">
                      Get in Touch
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-red"></span>
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-accent-red border-3 border-neutral-dark flex items-center justify-center flex-shrink-0 rounded-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-dark">Phone</h4>
                          <a href="tel:6155610502" className="text-lg text-neutral-near-black hover:text-accent-red transition-colors">
                            (615) 561-0502
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#58CCDC] border-3 border-neutral-dark flex items-center justify-center flex-shrink-0 rounded-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-dark">Email</h4>
                          <a href="mailto:jonny@wemarketfence.com" className="text-lg text-neutral-near-black hover:text-accent-red transition-colors">
                            jonny@wemarketfence.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <div className="order-1 lg:order-2">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QuickLeadModal */}
        <QuickLeadModal 
          isOpen={isQuickLeadModalOpen} 
          onClose={() => setIsQuickLeadModalOpen(false)} 
        />
      </main>
    </>
  )
}
