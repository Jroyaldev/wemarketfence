"use client"
import React, { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare, CheckCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: "Contact Page Form",
        }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "(615) 561-0502",
      action: "tel:6155610502",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us", 
      description: "Send us a detailed message",
      contact: "jonny@wemarketfence.com",
      action: "mailto:jonny@wemarketfence.com",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Call",
      description: "Book a free consultation",
      contact: "15-30 minutes",
      action: "/funnel",
      color: "bg-amber-100 text-amber-600"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-blue-50/30 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let's Grow Your <span className="text-blue-600">Fence Business</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Ready to generate more leads and grow your fence company? We're here to help with a free consultation and custom marketing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Multiple Ways to Connect
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Choose How You'd Like to Connect
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're available through multiple channels to make it easy for you to get the help you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.action}
                className="bg-white border-2 border-neutral-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{method.title}</h3>
                <p className="text-neutral-600 mb-4 text-sm">{method.description}</p>
                <p className="font-semibold text-blue-600">{method.contact}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">Thanks for reaching out!</h3>
                  <p className="text-neutral-600 mb-8">We'll get back to you within 24 hours to discuss how we can help grow your fence business.</p>
                  
                  <Link 
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                  >
                    Back to Home
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">Send Us a Message</h3>
                    <p className="text-neutral-600">
                      Fill out the form below and we'll get back to you within 24 hours with a custom marketing strategy for your fence business.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">
                          Company
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your fence company"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-neutral-400" />
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Tell us about your fence business and what you're looking for..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  Business Hours
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">When We're Available</h3>
                
                <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-neutral-900">{schedule.day}</span>
                      <span className="text-neutral-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-blue-100 mb-6">
                  We typically respond to all inquiries within 24 hours during business days. Need faster response? Give us a call!
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Available Now</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-neutral-900">Service Area</h3>
                </div>
                <p className="text-neutral-600">
                  We proudly serve fence contractors across the entire United States with specialized marketing strategies tailored to local markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Growing Today?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to start generating more leads. Schedule your free consultation now and see how we can help your fence business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/funnel"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm inline-flex items-center justify-center"
            >
              Schedule Free Call
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/pricing"
              className="border border-blue-300 text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}