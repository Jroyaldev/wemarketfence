"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Fence, CheckCircle2, ChevronRight, Info } from "lucide-react"

import { Button } from "../components/ui/button"
import { HorizontalScroll } from "../components/horizontal-scroll"
import { MarqueeScroll } from "../components/marquee-scroll"
import { TestimonialSlider } from "../components/testimonial-slider"
import { FeatureCard } from "../components/feature-card"

interface Service {
  title: string
  description: string
  number: string
}

interface Feature {
  title: string
  description: string
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  
  // Added for parallax effect on background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const services: Service[] = [
    {
      title: "Website Design",
      description: "Premium websites crafted specifically for fencing companies.",
      number: "01",
    },
    {
      title: "SEO Optimization",
      description: "Get found by customers searching for fencing services in your area.",
      number: "02",
    },
    {
      title: "Content Creation",
      description: "Engaging content that showcases your fencing expertise and projects.",
      number: "03",
    },
    {
      title: "Lead Generation",
      description: "Convert website visitors into qualified leads for your business.",
      number: "04",
    },
    {
      title: "Social Media",
      description: "Build your brand presence across all major social platforms.",
      number: "05",
    },
  ]

  const features: Feature[] = [
    {
      title: "Industry Expertise",
      description: "We understand the unique needs of fence companies and create websites that address them.",
    },
    {
      title: "Mobile Responsive",
      description: "Your website will look great and function perfectly on all devices.",
    },
    {
      title: "SEO Optimized",
      description: "We build your site with search engines in mind to help you rank higher.",
    },
    {
      title: "Fast Loading",
      description: "Quick loading speeds for better user experience and higher search rankings.",
    },
  ]

  const clients = [
    "Premium Fencing Co.",
    "Modern Fence Solutions",
    "Architectural Barriers",
    "Elite Fence Designs",
    "Urban Boundary",
    "Heritage Fencing",
    "Precision Installations",
  ]

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center"
      >
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "linear-gradient(to bottom, #000000, #050505, #0a120a)",
              "linear-gradient(to bottom, #000000, #0a120a, #0f2210)",
              "linear-gradient(to bottom, #000000, #050505, #0a120a)"
            ]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Parallax decorative elements */}
        <motion.div 
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-emerald-900/10 blur-3xl opacity-30"
          style={{ y: bgY1 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-[10%] w-40 h-40 rounded-full bg-emerald-900/10 blur-3xl opacity-20"
          style={{ y: bgY2 }}
        ></motion.div>
        
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-50/70">Transform Your</span>{" "}
            <motion.div className="inline-block">
              <span className="text-white">Fence Business</span>{" "}
              <motion.div 
                className="h-1 bg-emerald-500/80 mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.2 }}
              />
            </motion.div>{" "}
            <span className="text-emerald-50/70">with a</span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative inline-block"
            >
              Premium Website
              <motion.span 
                className="absolute bottom-0 left-0 h-[3px] bg-emerald-500/80"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.3 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-emerald-50/80 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We create stunning websites specifically designed for fence companies that convert visitors into customers.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild size="lg" className="bg-emerald-700 text-white hover:bg-emerald-600 border-none rounded-md px-8 py-6 h-auto font-medium">
                <Link href="#contact">Get Started</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild variant="outline" size="lg" className="bg-emerald-900/40 border border-emerald-600 text-emerald-300 hover:bg-emerald-800 hover:text-white rounded-md px-8 py-6 h-auto font-medium">
                <Link href="#services" className="flex items-center justify-center">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Enhanced stats section with micro-interactions */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl p-8 bg-black/40 rounded-lg backdrop-blur-sm border border-emerald-900/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { stat: '100+', label: 'Fence Companies', tooltip: 'Over 100 fence companies trust us with their web presence' },
              { stat: '95%', label: 'Satisfaction Rate', tooltip: '95% of our clients report increased leads and conversions' },
              { stat: '24/7', label: 'Support', tooltip: 'Round-the-clock support for all your website needs' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{item.stat}</p>
                <p className="text-sm text-emerald-100/70">{item.label}</p>
                
                {/* Tooltip on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 text-emerald-400/80 hover:text-white cursor-help"
                  whileHover={{ scale: 1.2 }}
                >
                  <Info size={16} />
                  <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/80 text-xs text-emerald-100/80 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    {item.tooltip}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 mx-auto w-max flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
          >
            <p className="text-emerald-200/40 text-sm mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight size={20} className="text-emerald-200/40 transform rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Client Logos */}
      <section className="py-16 md:py-24 border-y border-emerald-900/30 bg-black relative overflow-hidden">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mb-8">
          <motion.h2 
            className="text-2xl font-bold text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Leading Fence Companies
          </motion.h2>
        </div>
        <MarqueeScroll items={clients} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
        
        {/* Background decorative elements */}
        <div className="absolute top-40 right-[5%] w-64 h-64 rounded-full bg-emerald-900/20 blur-3xl"></div>
        <div className="absolute bottom-40 left-[5%] w-80 h-80 rounded-full bg-emerald-900/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-3 px-4 py-1 bg-emerald-900/30 rounded-full backdrop-blur-sm text-emerald-400 text-sm font-medium"
            >
              Our Expertise
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-emerald-100/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We offer a range of services to help your fence business stand out online and attract more customers.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <HorizontalScroll items={services} />
          </motion.div>
          
          {/* Process Visualization */}
          <motion.div 
            className="mt-24 max-w-4xl mx-auto bg-emerald-900/20 rounded-xl p-8 border border-emerald-900/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Our Design Process</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-emerald-800"></div>
              
              {[
                { step: "1", title: "Consultation", description: "We learn about your fence business goals and needs." },
                { step: "2", title: "Design", description: "We create a custom website design tailored to your business." },
                { step: "3", title: "Development", description: "We build your website with cutting-edge technology." },
                { step: "4", title: "Launch", description: "We deploy your website and provide training on management." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-center mb-8 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-800 border-2 border-emerald-700 flex items-center justify-center">
                    <span className="text-emerald-300 text-sm font-bold">{item.step}</span>
                  </div>
                  
                  {/* Content - alternate sides */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 ml-auto'}`}>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-emerald-100/70 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-emerald-950 relative overflow-hidden">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full bg-emerald-900/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-3 px-4 py-1 bg-emerald-900/30 rounded-full backdrop-blur-sm text-emerald-400 text-sm font-medium"
            >
              Benefits
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="text-emerald-100/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our websites are designed to showcase your fence business and generate more leads.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <FeatureCard 
                  icon={<CheckCircle2 className="h-8 w-8 text-emerald-400" />}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Before/After Website Transformations */}
          <motion.div 
            className="mt-24 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-white">See The Transformation</h3>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden border border-emerald-800 shadow-xl">
              {/* Before image */}
              <Image 
                src="/before-after-placeholder.jpg" 
                alt="Website transformation" 
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              
              {/* Slider effect would be implemented with JavaScript in a real component */}
              <div className="absolute inset-y-0 left-1/2 right-0 bg-gradient-to-r from-transparent to-emerald-950/90 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-emerald-900/80 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-white font-bold">After</p>
                </div>
              </div>
              <div className="absolute inset-y-0 right-1/2 left-0 flex items-center justify-center">
                <div className="bg-emerald-900/80 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-white font-bold">Before</p>
                </div>
              </div>
              
              {/* Divider line */}
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-grab">
                <ChevronRight className="w-4 h-4 text-emerald-950 transform -rotate-90" />
                <ChevronRight className="w-4 h-4 text-emerald-950 transform rotate-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced with video capability */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-3 px-4 py-1 bg-emerald-900/30 rounded-full backdrop-blur-sm text-emerald-400 text-sm font-medium"
            >
              Testimonials
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="text-emerald-100/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it. Here's what fence companies we've worked with have to say.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TestimonialSlider 
              testimonials={[
                {
                  quote: "Our website leads have increased by 150% since working with We Market Fence. Their understanding of the fence industry is impressive.",
                  author: "John Smith",
                  company: "Smith's Fencing",
                  image: "/testimonial-1.jpg",
                  video: false
                },
                {
                  quote: "The website they created for us perfectly showcases our work and has helped us expand into new markets.",
                  author: "Sarah Johnson",
                  company: "Johnson Fence Co.",
                  image: "/testimonial-2.jpg",
                  video: false
                },
                {
                  quote: "Not only did they build us a beautiful website, but they also provided valuable marketing advice specific to our fence business.",
                  author: "Michael Brown",
                  company: "Brown's Custom Fencing",
                  image: "/testimonial-3.jpg",
                  video: false
                }
              ]}
            />
          </motion.div>
          
          {/* Micro case studies */}
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { metric: "+156%", label: "More Leads", period: "in 3 months" },
              { metric: "4.2×", label: "Return on Investment", period: "average" },
              { metric: "1st Page", label: "Google Ranking", period: "for target keywords" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-emerald-900/20 border border-emerald-900/30 rounded-lg p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-white mb-2">{item.metric}</p>
                <p className="text-emerald-400 font-medium">{item.label}</p>
                <p className="text-emerald-100/70 text-sm">{item.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with conversion optimization */}
      <section id="contact" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black via-black to-emerald-950"
          animate={{ 
            background: [
              "linear-gradient(to bottom right, #000000, #000000, #0a120a)",
              "linear-gradient(to bottom right, #000000, #0a120a, #0f2210)",
              "linear-gradient(to bottom right, #000000, #000000, #0a120a)"
            ]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container relative mx-auto px-4 z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-emerald-900/30 border border-emerald-900/30 rounded-xl p-8 md:p-12 backdrop-blur-sm shadow-xl">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="inline-block mb-3 px-4 py-1 bg-emerald-900/30 rounded-full backdrop-blur-sm text-emerald-400 text-sm font-medium"
                >
                  Get Started
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Fence Business?</h2>
                <p className="text-emerald-100/70 mb-8 text-lg">
                  Let's create a website that showcases your work and brings in more customers.
                </p>
              </div>
              
              {/* Social proof badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Trusted Partner", "5-Star Service", "Industry Experts"].map((badge, index) => (
                  <motion.div 
                    key={index}
                    className="bg-emerald-800 px-4 py-2 rounded-full text-sm text-emerald-300 border border-emerald-700 flex items-center gap-2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {badge}
                  </motion.div>
                ))}
              </div>
              
              <motion.form 
                className="max-w-md mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Progress indicator */}
                <div className="mb-6 flex items-center justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-emerald-600 text-white' : 'bg-emerald-900 text-emerald-500'} border ${step === 1 ? 'border-emerald-500' : 'border-emerald-700'}`}>
                        {step}
                      </div>
                      <div className="text-xs mt-1 text-emerald-500">
                        {step === 1 ? 'Info' : step === 2 ? 'Details' : 'Success'}
                      </div>
                    </div>
                  ))}
                  <div className="h-px bg-emerald-800 absolute w-1/3 left-1/3 z-0"></div>
                </div>
                
                <div className="flex flex-col space-y-4 mb-6">
                  {/* Name input with floating label */}
                  <div className="relative">
                    <motion.input 
                      type="text" 
                      id="name-input"
                      placeholder=" "
                      className="peer w-full px-4 py-3 pt-6 rounded-md bg-emerald-900/40 border border-emerald-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      whileHover={{ y: -2 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <label 
                      htmlFor="name-input" 
                      className="absolute left-4 top-2 text-xs text-emerald-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  {/* Email input with floating label */}
                  <div className="relative">
                    <motion.input 
                      type="email" 
                      id="email-input"
                      placeholder=" "
                      className="peer w-full px-4 py-3 pt-6 rounded-md bg-emerald-900/40 border border-emerald-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      whileHover={{ y: -2 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <label 
                      htmlFor="email-input" 
                      className="absolute left-4 top-2 text-xs text-emerald-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs"
                    >
                      Your Email
                    </label>
                  </div>
                  
                  {/* Message input with floating label */}
                  <div className="relative">
                    <motion.textarea 
                      id="message-input"
                      placeholder=" "
                      rows={4}
                      className="peer w-full px-4 py-3 pt-6 rounded-md bg-emerald-900/40 border border-emerald-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
                      whileHover={{ y: -2 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                    ></motion.textarea>
                    <label 
                      htmlFor="message-input" 
                      className="absolute left-4 top-2 text-xs text-emerald-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs"
                    >
                      Tell us about your fence business
                    </label>
                  </div>
                </div>
                
                {/* Magnetic button effect */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Button className="w-full bg-emerald-700 text-white hover:bg-emerald-600 border-none rounded-md py-6 h-auto font-medium">
                    Get Started
                  </Button>
                </motion.div>
                
                {/* Privacy notice */}
                <p className="text-center text-emerald-500 text-xs mt-4">
                  By submitting, you agree to our <Link href="#" className="text-emerald-500 hover:text-white underline">Privacy Policy</Link>
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
