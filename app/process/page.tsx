"use client"
import React from "react"
import Link from "next/link"
import { ArrowRight, Phone, Target, Rocket, Users, BarChart3, Clock, CheckCircle } from "lucide-react"

export default function ProcessPage() {
  const processSteps = [
    {
      id: 1,
      title: "Discovery Call",
      icon: <Phone className="h-8 w-8" />,
      description: "We'll have a friendly chat to understand your business, goals, and how we can help you achieve them.",
      color: "bg-blue-100 text-blue-600",
      timeline: "15-30 minutes"
    },
    {
      id: 2,
      title: "Custom Strategy",
      icon: <Target className="h-8 w-8" />,
      description: "We'll create a tailored marketing strategy specifically for your fence business and local market.",
      color: "bg-emerald-100 text-emerald-600", 
      timeline: "2-3 business days"
    },
    {
      id: 3,
      title: "Campaign Launch",
      icon: <Rocket className="h-8 w-8" />,
      description: "We'll implement your marketing strategy, launching targeted campaigns to attract quality leads.",
      color: "bg-amber-100 text-amber-600",
      timeline: "1-2 weeks"
    },
    {
      id: 4,
      title: "Lead Generation",
      icon: <Users className="h-8 w-8" />,
      description: "Quality leads start coming in as your campaigns gain momentum in your local market.",
      color: "bg-blue-100 text-blue-600",
      timeline: "30-45 days"
    },
    {
      id: 5,
      title: "Growth & Optimization",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "We'll continuously optimize your campaigns for better performance and increased ROI.",
      color: "bg-emerald-100 text-emerald-600",
      timeline: "Ongoing"
    },
  ]

  const benefits = [
    {
      title: "No Long-term Contracts",
      description: "Month-to-month service with no binding commitments",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Quick Implementation",
      description: "Get started within 2 weeks of signing up", 
      icon: <Clock className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "Dedicated Support",
      description: "Personal account manager and ongoing optimization",
      icon: <Users className="h-6 w-6 text-amber-600" />
    }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-blue-50/30 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Fence Marketing Experts
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our Proven <span className="text-blue-600">Process</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
              A proven system that consistently delivers quality leads for fence companies across the country.
            </p>
            
            <Link 
              href="/funnel"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Step by Step
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              How We Help You Grow
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our systematic approach ensures every fence contractor gets the personalized attention they deserve.
            </p>
          </div>
          
          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.id} className="relative">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {step.id}
                </div>
                
                <div className="bg-white border-2 border-neutral-200 rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                  
                  <div className="flex items-center text-sm text-neutral-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{step.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why It Works
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Built for Fence Contractors
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We understand the unique challenges of the fence industry and have designed our process specifically around them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-neutral-200 shadow-sm">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What to Expect & When
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A clear timeline so you know exactly what happens next.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Week 1",
                  title: "Discovery & Strategy Development", 
                  description: "Initial consultation, market research, and custom strategy creation.",
                  color: "bg-blue-50 border-blue-200"
                },
                {
                  phase: "Week 2-3",
                  title: "Implementation & Launch",
                  description: "Website setup, campaign creation, and initial launch of marketing efforts.",
                  color: "bg-emerald-50 border-emerald-200"
                },
                {
                  phase: "Month 1-2",
                  title: "Lead Generation Begins",
                  description: "First leads start coming in, initial optimization based on performance data.",
                  color: "bg-amber-50 border-amber-200"
                },
                {
                  phase: "Month 3+",
                  title: "Continuous Growth",
                  description: "Ongoing optimization, scaling successful campaigns, and sustained growth.",
                  color: "bg-blue-50 border-blue-200"
                }
              ].map((item, index) => (
                <div key={index} className={`${item.color} border-2 rounded-xl p-6 flex items-start space-x-6`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-neutral-900">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-neutral-600 bg-white px-3 py-1 rounded-full">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-neutral-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Growing Your Fence Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring more qualified leads to your fence company.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/funnel"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm inline-flex items-center justify-center"
            >
              Start Today
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