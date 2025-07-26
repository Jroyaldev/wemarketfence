"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Eye, Clock, Award, Shield, Layers, PenTool } from "lucide-react"

export default function OurWork() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-blue-50/30 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Client Work
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Professional Results for <span className="text-blue-600">Fence Companies</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We deliver consistent, brand-focused marketing solutions that help fence contractors stand out in their local markets.
            </p>
          </div>
        </div>
      </section>

      {/* Client Privacy Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Client Confidentiality
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Protecting Our Clients' Competitive Edge
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're committed to safeguarding our clients' marketing strategies and competitive advantages in their local markets.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-50 to-blue-50/30 rounded-2xl p-8 md:p-12 border border-neutral-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    Why We Keep Client Work Private
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    We believe in protecting our clients' competitive edge. The fence industry is highly competitive, 
                    and our marketing strategies give our clients a significant advantage in their local markets.
                  </p>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    While we're currently in the process of obtaining showcase permissions, we maintain strict 
                    confidentiality until clients approve sharing their success stories.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Client Privacy First</p>
                        <p className="text-sm text-neutral-600">We respect the confidentiality of our fence company clients</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Coming Soon</p>
                        <p className="text-sm text-neutral-600">Client showcases and case studies in development</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">
                    What You Can Expect Soon
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Before & After Website Transformations",
                      "Lead Generation Success Stories", 
                      "Client Conversion Rate Improvements",
                      "Brand Identity Case Studies",
                      "Local SEO Ranking Results"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Approach
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Brand Consistency That Works
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our approach focuses on creating a cohesive brand identity that resonates across all platforms and touchpoints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Visual Identity",
                description: "We develop fence brand identities that are instantly recognizable and memorable in your local market.",
                icon: <PenTool className="h-8 w-8" />,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Strategic Messaging",
                description: "We craft fence-specific messaging that connects with homeowners and commercial property managers.",
                icon: <Eye className="h-8 w-8" />,
                color: "bg-emerald-100 text-emerald-600"
              },
              {
                title: "Multi-Platform Presence",
                description: "We ensure your fence business looks professional on every platform and customer touchpoint.",
                icon: <Layers className="h-8 w-8" />,
                color: "bg-amber-100 text-amber-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center border border-neutral-200 hover:shadow-lg transition-all duration-200">
                <div className={`w-16 h-16 mx-auto ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Preview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What Our Clients Experience
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              While we respect client confidentiality, here's what fence contractors typically see when working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "2–10×",
                label: "Traffic Increase",
                description: "Average organic traffic growth"
              },
              {
                metric: "99%",
                label: "Client Renewal",
                description: "Year-over-year partnership rate"
              },
              {
                metric: "24hrs",
                label: "Response Time",
                description: "We are here for you"
              },
              {
                metric: "4.9★",
                label: "Agency Rating",
                description: "Based on client reviews"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-neutral-900 mb-2">{stat.label}</div>
                <div className="text-sm text-neutral-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fence Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a marketing strategy that builds your brand and generates consistent leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/funnel"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/pricing"
              className="border border-blue-300 text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}