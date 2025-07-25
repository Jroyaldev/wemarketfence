"use client"
import React, { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Computer, PenTool, Search, MessageCircle, ArrowDownCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"

import { cn } from "../lib/utils"

// SEO-focused page component
export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Service offerings with modern descriptions
  const services = [
    { 
      title: "Website Design", 
      description: "Professional websites that showcase your work and convert visitors into customers.", 
      icon: <Computer className="h-8 w-8" />,
    },
    { 
      title: "Brand Identity", 
      description: "Stand out from competitors with memorable branding that builds trust.", 
      icon: <PenTool className="h-8 w-8" />,
    },
    { 
      title: "SEO Strategy", 
      description: "Rank higher on Google when customers search for fence services in your area.", 
      icon: <Search className="h-8 w-8" />,
    },
    { 
      title: "Social Media", 
      description: "Showcase your best projects and engage with potential customers online.", 
      icon: <MessageCircle className="h-8 w-8" />,
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

      <main className="flex min-h-screen flex-col bg-neutral-50">
        
        {/* Hero Section - Mobile-first modern layout */}
        <section aria-label="Hero section" className="bg-gradient-to-br from-neutral-50 to-blue-50/30 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text content - mobile optimized */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fence Marketing Specialists
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    Get More <span className="text-blue-600">Fence Jobs</span>
                  </h1>
                  
                  <p className="text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Professional marketing services designed exclusively for fence contractors. No fluff, just results.
                  </p>
                </div>
                
                {/* Trust indicators - simplified */}
                <div className="grid grid-cols-3 gap-6 py-6 border-y border-neutral-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-neutral-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-neutral-600">Avg Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">5★</div>
                    <div className="text-sm text-neutral-600">Rating</div>
                  </div>
                </div>
                
                {/* CTA buttons - mobile optimized */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/funnel"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm text-center"
                  >
                    Get Free Quote
                  </Link>
                  
                  <Link 
                    href="/our-work"
                    className="border border-neutral-300 hover:border-blue-300 hover:bg-blue-50 text-neutral-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-center flex items-center justify-center"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Image area - mobile optimized */}
              <div className="order-first lg:order-last">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 flex items-center justify-center">
                    <Image 
                      src="/images/wmf.png" 
                      alt="We Market Fence - Professional marketing for fence contractors" 
                      width={300} 
                      height={200} 
                      priority
                      className="w-full h-auto max-w-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Mobile-first clean layout */}
        <section id="services" aria-label="Fence marketing services" className="bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Services
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Marketing Built for Fence Companies
              </h2>
              
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Specialized solutions designed to help fence contractors generate more leads and grow their business.
              </p>
            </div>
            
            {/* Service cards - mobile optimized grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center transition-all duration-200 hover:shadow-lg hover:border-blue-200">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <div className="text-blue-600">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center mx-auto transition-colors">
                      Learn More 
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/funnel"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm"
              >
                Get Your Custom Marketing Plan
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Clean and professional */}
        <section aria-label="Why choose us" className="py-16 md:py-24 bg-neutral-50">
          <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Why Choose Us
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Specialized Expertise for Fence Companies
              </h2>
              
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Unlike generic marketing agencies, we focus exclusively on fence contractors and understand your unique business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description: "Deep understanding of the fence industry and what drives customer decisions.",
                  icon: "⚡"
                },
                {
                  title: "Mobile-First Design", 
                  description: "All our websites are optimized for mobile devices where most customers browse.",
                  icon: "📱"
                },
                {
                  title: "Local SEO Focus",
                  description: "We help you rank higher for local fence installation searches in your area.",
                  icon: "🎯"
                },
                {
                  title: "Fast Turnaround",
                  description: "Quick project delivery so you can start generating leads sooner.",
                  icon: "⚡"
                },
                {
                  title: "Dedicated Support",
                  description: "Personal account management and ongoing optimization for better results.",
                  icon: "🤝"
                },
                {
                  title: "Proven Results",
                  description: "Track record of helping fence contractors grow their business sustainably.",
                  icon: "📈"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section - Clean and professional */}
        <section id="contact" aria-label="Contact us" className="bg-white py-16 md:py-24">        
          <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Get Started
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Ready to Grow Your <span className="text-blue-600">Fence Business?</span>
              </h2>
              
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Let's discuss how we can help you generate more leads and grow your fence installation business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Contact Options */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-600">Phone</p>
                        <a href="tel:6155610502" className="text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors">
                          (615) 561-0502
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-600">Email</p>
                        <a href="mailto:jonny@wemarketfence.com" className="text-lg font-semibold text-neutral-900 hover:text-emerald-600 transition-colors">
                          jonny@wemarketfence.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-medium text-green-700">Available Now</span>
                  </div>
                  <p className="text-neutral-600">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
              </div>
              
              {/* Simple CTA */}
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h3>
                <p className="text-neutral-600 mb-8">
                  Schedule a free consultation to discuss your fence marketing needs and get a custom strategy.
                </p>
                
                <div className="space-y-4">
                  <Link 
                    href="/funnel"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Quote
                  </Link>
                  
                  <Link 
                    href="/our-work"
                    className="block w-full border border-neutral-300 hover:border-blue-300 hover:bg-blue-50 text-neutral-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
