"use client"
import React, { useState } from "react"
// import { motion } from "framer-motion" // Remove framer-motion
import { ArrowRight, CheckCircle, Computer, PenTool, Search, MessageCircle } from "lucide-react" // Keep icons for now, replace later if needed
import Link from "next/link"
import Image from "next/image" // Add Image import

import { RetroButton } from "../components/retro-button"
import { RetroCard } from "../components/retro-card"
import { RetroSection } from "../components/retro-section"
import { ContactForm } from "../components/contact-form"
import { QuickLeadModal } from "../components/quick-lead-modal"

export default function Home() {
  const [isQuickLeadModalOpen, setIsQuickLeadModalOpen] = useState(false)

  const services = [
    { 
      title: "Website Design", 
      description: "Eye-catching websites that make your fence business stand out!", 
      icon: <Computer className="h-8 w-8 text-neutral-dark" />,
      color: "bg-accent-yellow"
    },
    { 
      title: "Brand Identity", 
      description: "Memorable logos and branding that customers recognize!", 
      icon: <PenTool className="h-8 w-8 text-neutral-dark" />,
      color: "bg-[#58CCDC]"
    },
    { 
      title: "SEO Strategy", 
      description: "Get found by customers looking for fencing in your area!", 
      icon: <Search className="h-8 w-8 text-neutral-dark" />,
      color: "bg-accent-red"
    },
    { 
      title: "Social Media", 
      description: "Engage with customers and showcase your best work!", 
      icon: <MessageCircle className="h-8 w-8 text-neutral-dark" />,
      color: "bg-[#A3E635]"
    },
  ]

  const features = [
    "Industry-specific expertise",
    "Mobile-friendly designs",
    "Local SEO optimization",
    "Fast turnaround times",
    "Dedicated support team",
    "Affordable monthly plans",
  ]

  const testimonials = [
    {
      quote: "We've seen a 50% increase in qualified leads since working with We Market Fence.",
      name: "Robert Chen",
      company: "Elite Fence Designs",
      image: "/images/testimonials/robert-chen.png",
      avatar: "/images/testimonials/robert-chen.png",
      position: "Owner",
    },
    {
      quote: "We've doubled our business since working with We Market Fence. Best investment ever!",
      name: "Mike Brown",
      company: "Brown's Custom Fencing",
      image: "/images/testimonials/mike-brown.png",
      avatar: "/images/testimonials/mike-brown.png",
      position: "Owner",
    },
    {
      quote: "They understand the fencing business and know exactly how to market our services.",
      name: "Thomas Anderson",
      company: "Smith's Fencing Solutions",
      image: "/images/testimonials/thomas-anderson.png",
      avatar: "/images/testimonials/thomas-anderson.png",
      position: "Marketing Director",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-neutral-light"> {/* Set base bg here */}
      {/* Hero Section */}
      <RetroSection className="bg-neutral-light pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text content div */}
            <div className="text-center md:text-left">
              {/* Headline: Larger, bolder, uppercase, no inline background/border */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-dark uppercase mb-4">
                GET MORE <span className="text-accent-red">FENCE JOBS.</span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-dark uppercase mb-6">
                FASTER.
              </h1>
              
              {/* Sub-headline: Updated text, regular weight */}
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-near-black mb-10 max-w-xl mx-auto md:mx-0">
                No fluff. Just leads. Websites & marketing built for fence pros.
              </p>
              
              {/* Buttons: Updated text, using RetroButton defaults, added wrapper for spacing */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start md:justify-start">
                <RetroButton 
                  size="lg" 
                  variant="primary" 
                  onClick={() => setIsQuickLeadModalOpen(true)} 
                  className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[280px] flex items-center justify-center"
                >
                  <span className="mx-auto">[ GET STARTED ]</span>
                </RetroButton>
                <Link href="/our-work" className="block">
                  {/* Use secondary/default RetroButton style */}
                  <RetroButton 
                    size="lg" 
                    variant="secondary" 
                    className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[280px] flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center w-full">
                      <span>[ SEE HOW</span>
                      <ArrowRight className="ml-1 h-5 w-5" />
                      <span>]</span>
                    </div>
                  </RetroButton>
                </Link>
              </div>
            </div>

            {/* Visual/Image div: Simplified container */}
            <div className="relative flex justify-center items-center mt-10 md:mt-0">
              <div className="bg-white border-4 border-neutral-dark p-6 max-w-md w-full">
                <Image 
                  src="/images/wmf.png" 
                  alt="We Market Fence Logo" 
                  width={400} 
                  height={300} 
                  priority
                  className="w-full h-auto max-w-[350px] mx-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </RetroSection>

      {/* Services Section - Clean & Consistent */}
      <RetroSection className="bg-white py-16 sm:py-20 md:py-24 relative overflow-hidden border-t-4 border-b-4 border-neutral-dark">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-24 h-24 bg-accent-yellow border-l-4 border-b-4 border-neutral-dark hidden md:block" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>
        <div className="absolute left-0 bottom-0 w-24 h-24 bg-[#58CCDC] border-r-4 border-t-4 border-neutral-dark hidden md:block"></div>
        
        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-dark uppercase tracking-tight relative z-10">
                OUR SERVICES
              </h2>
              <div className="absolute -bottom-3 -left-3 w-full h-5 bg-accent-red z-0"></div>
            </div>
            <p className="text-xl md:text-2xl text-neutral-near-black max-w-2xl mx-auto font-medium mt-6">
              We offer specialized marketing solutions designed exclusively for fence contractors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div 
                  className="border-4 border-neutral-dark bg-white p-8 flex flex-col h-full 
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className={`w-16 h-16 mb-6 flex items-center justify-center border-4 border-neutral-dark ${service.color}`}>
                    {service.icon || <span className="text-2xl font-bold text-neutral-dark">+</span>}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">{service.title}</h3>
                  <p className="text-neutral-near-black mb-8 flex-grow">{service.description}</p>
                  
                  <div className="mt-auto pt-4 border-t-2 border-dashed border-neutral-dark">
                    <a 
                      href="#"
                      className={`inline-block border-3 border-neutral-dark px-4 py-2 font-bold text-neutral-dark
                      ${service.color} 
                      transform transition-transform group-hover:translate-x-1`}
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RetroSection>

      {/* Why Choose Us Section - Clean & Consistent */}
      <RetroSection className="py-16 sm:py-20 md:py-24 bg-neutral-light relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-accent-red border-l-4 border-b-4 border-neutral-dark hidden md:block" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>
        {/* Bottom-right decorative element - triangle shape to complement the top-right triangle */}
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-accent-yellow border-4 border-neutral-dark hidden md:block" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}></div>
        
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="border-4 border-neutral-dark bg-white p-6 
                      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                      transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border-4 border-neutral-dark ${
                        index === 0 || index === 3 ? "bg-accent-red" : 
                        index === 1 || index === 4 ? "bg-[#58CCDC]" : 
                        "bg-accent-yellow"
                      }`}>
                        <CheckCircle className="h-6 w-6 text-neutral-dark" />
                      </div>
                      <p className="font-bold text-lg text-neutral-dark mt-1">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="relative inline-block mb-8 w-full max-w-full overflow-hidden">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-neutral-dark uppercase tracking-tight relative z-10 whitespace-nowrap">
                  WHY CHOOSE US
                </h2>
                {/* Match the heading underline to the top-right corner accent color for consistency */}
                <div className="absolute -bottom-3 -left-3 w-full h-5 bg-accent-red z-0"></div>
              </div>
              <p className="text-xl md:text-2xl text-neutral-near-black mb-10 max-w-2xl mx-auto md:mx-0">
                We understand the fencing industry inside and out. Our specialized approach delivers real results for fence contractors.
              </p>
              <div className="bg-white border-4 border-neutral-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 max-w-sm mx-auto md:mx-0 relative">
                {/* Match the square accent to the bottom-left corner accent for color consistency */}
                <div className="absolute -top-4 -left-4 bg-accent-red w-8 h-8 border-4 border-neutral-dark transform rotate-12"></div>
                <p className="text-xl font-bold text-neutral-dark mb-4">
                  "Since working with We Market Fence, our leads have increased by 210%!"
                </p>
                <p className="font-medium text-accent-red italic">- Actual Customer</p>
              </div>
            </div>
          </div>
        </div>
      </RetroSection>

      {/* Testimonials Section - Clean & Consistent */}
      <RetroSection className="bg-white py-16 sm:py-20 md:py-24 border-t-4 border-b-4 border-neutral-dark overflow-hidden">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-dark uppercase tracking-tight relative z-10">
                TESTIMONIALS
              </h2>
              <div className="absolute -bottom-3 -left-3 w-full h-5 bg-[#58CCDC] z-0"></div>
            </div>
            <p className="text-xl md:text-2xl text-neutral-near-black max-w-2xl mx-auto font-medium mt-6">
              Hear what our clients have to say about our fence marketing services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className={`absolute -top-8 -left-2 text-7xl font-serif opacity-80 ${
                  index === 0 ? "text-accent-red" : 
                  index === 1 ? "text-accent-yellow" : 
                  "text-[#58CCDC]"
                }`}>"</div>
                <div className="bg-white border-4 border-neutral-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <div className={`absolute -top-6 -right-6 w-12 h-12 border-4 border-neutral-dark transform rotate-12 ${
                    index === 0 ? "bg-accent-red" : 
                    index === 1 ? "bg-white" : 
                    "bg-[#58CCDC]"
                  }`}></div>
                  <p className="text-lg md:text-xl font-medium text-neutral-near-black mb-6 relative italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-full overflow-hidden border-4 border-neutral-dark mr-4 flex-shrink-0 ${
                      index === 0 ? "border-accent-red" : 
                      index === 1 ? "border-accent-yellow" : 
                      "border-[#58CCDC]"
                    }`}>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg ${
                        index === 0 ? "text-accent-red" : 
                        index === 1 ? "text-accent-yellow" : 
                        "text-[#58CCDC]"
                      }`}>{testimonial.name}</h4>
                      <p className="text-neutral-near-black">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <RetroButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 font-bold text-lg px-10 py-4"
              variant="primary"
            >
              GET STARTED TODAY
            </RetroButton>
          </div>
        </div>
      </RetroSection>
      
      {/* Contact Section - Clean & Consistent */}
      <RetroSection id="contact" className="bg-neutral-light py-16 sm:py-20 md:py-24 relative">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-32 h-32 bg-[#58CCDC] border-r-4 border-b-4 border-neutral-dark hidden md:block"></div>
        <div className="absolute right-0 bottom-0 w-24 h-24 bg-accent-yellow border-l-4 border-t-4 border-neutral-dark hidden md:block"></div>
        
        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-dark uppercase tracking-tight relative z-10">
                CONTACT US
              </h2>
              <div className="absolute -bottom-3 -left-3 w-full h-5 bg-accent-red z-0"></div>
            </div>
            <p className="text-xl md:text-2xl text-neutral-near-black max-w-2xl mx-auto font-medium mt-6">
              Ready to grow your fence business? Let's talk about how we can help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white border-4 border-neutral-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full">
                <h3 className="text-2xl font-bold text-neutral-dark mb-8 uppercase relative inline-block">
                  Get in Touch
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-red"></span>
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border-4 border-neutral-dark flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-dark">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Phone</h4>
                      <a href="tel:5595558726" className="text-lg text-neutral-near-black hover:text-accent-red transition-colors">
                        (559) 555-8726
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border-4 border-neutral-dark flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-dark">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Address</h4>
                      <p className="text-lg text-neutral-near-black">
                        Fresno, CA 93710
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white border-4 border-neutral-dark flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-dark">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-neutral-dark">Email</h4>
                      <a href="mailto:jonny@wemarketfence.com" className="text-base sm:text-lg text-neutral-near-black hover:text-accent-red transition-colors whitespace-nowrap overflow-x-auto inline-block">
                        jonny@wemarketfence.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-red border-4 border-neutral-dark flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Hours</h4>
                      <p className="text-lg text-neutral-near-black">
                        Mon-Fri: 9am - 6pm
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-dashed border-neutral-dark">
                    <h4 className="font-bold text-neutral-dark mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-white border-3 border-neutral-dark flex items-center justify-center transition-transform hover:-translate-y-1"
                        aria-label="Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-white border-3 border-neutral-dark flex items-center justify-center transition-transform hover:-translate-y-1"
                        aria-label="Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-white border-3 border-neutral-dark flex items-center justify-center transition-transform hover:-translate-y-1"
                        aria-label="LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </RetroSection>

      {/* Modal */} 
      <QuickLeadModal 
        isOpen={isQuickLeadModalOpen} 
        onClose={() => setIsQuickLeadModalOpen(false)}
      />
    </main>
  )
}
