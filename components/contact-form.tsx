"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { Loader2, Send, CheckCircle, Phone, Mail, User, Building } from "lucide-react"
import { RetroButton } from "./retro-button"

// Initialize EmailJS with your public key
emailjs.init("VzrPaSgxUjIM0hI3n")

type FormData = {
  name: string
  email: string
  phone: string
  companyName: string
  message: string
}

interface ContactFormProps {
  quickMode?: boolean
  onSubmitSuccess?: () => void
}

export function ContactForm({ quickMode = false, onSubmitSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Service ID and Template ID from EmailJS dashboard
      const result = await emailjs.send(
        "service_f0gmg4e", // Your EmailJS Service ID
        "template_d197j7a", // Your EmailJS Template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.companyName,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        "VzrPaSgxUjIM0hI3n" // Your EmailJS Public Key
      )

      // Track form submission with Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: quickMode ? 'Quick Lead Form' : 'Contact Form',
          content_category: 'Fence Marketing Lead',
        });
      }

      setIsSubmitted(true)
      reset()
      if (onSubmitSuccess) {
        onSubmitSuccess()
      }
    } catch (err) {
      console.error(err)
      setError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white border-4 border-neutral-dark p-6 md:p-8 w-full ${!quickMode ? 'max-w-lg mx-auto' : ''} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative`}>
      {/* Enhanced decorative elements */}
      {!quickMode && (
        <>
          <div className="absolute -top-6 -right-6 bg-accent-red p-3 border-4 border-neutral-dark transform rotate-12 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-white font-extrabold text-sm md:text-base uppercase">FREE QUOTE!</p>
          </div>
          <div className="absolute -top-6 -left-6 bg-white p-2 border-4 border-neutral-dark transform -rotate-12 z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-neutral-dark font-bold text-sm uppercase">24 Hour Response!</p>
          </div>
        </>
      )}
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent-yellow rounded-full flex items-center justify-center border-4 border-neutral-dark">
            <CheckCircle className="h-8 w-8 text-neutral-dark" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark uppercase">Thanks for reaching out!</h3>
          <p className="font-bold mb-6 text-neutral-near-black">We'll get back to you within 24 hours.</p>
          {!quickMode && (
            <div className="mb-8 w-full max-w-xs mx-auto">
              <img 
                src="/images/wmf.png" 
                alt="We Market Fence Logo" 
                className="w-full h-auto border-4 border-neutral-dark p-2"
              />
            </div>
          )}
          <RetroButton
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
            className="shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2"
          >
            Send Another Message
          </RetroButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {!quickMode && (
            <div className="mb-6 relative">
              <h3 className="text-3xl font-bold text-neutral-dark uppercase relative inline-block">
                GET IN TOUCH
                <span className="absolute bottom-0 left-0 w-full h-2 bg-accent-red"></span>
              </h3>
              <p className="text-neutral-near-black mt-3 font-medium">Fill out this form for a <span className="font-bold underline">free marketing consultation</span>!</p>
            </div>
          )}
          
          {error && (
            <div className="text-accent-red border-4 border-accent-red p-3 mb-4 bg-red-50">
              <p className="font-bold">{error}</p>
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-neutral-dark font-bold mb-2 flex items-center">
                <User className="h-4 w-4 mr-2 inline" />
                Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-4 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow focus:outline-none transition-all duration-200"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-accent-red font-medium mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-neutral-dark font-bold mb-2 flex items-center">
                <Mail className="h-4 w-4 mr-2 inline" />
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-4 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow focus:outline-none transition-all duration-200"
                placeholder="your@email.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <p className="text-accent-red font-medium mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-neutral-dark font-bold mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2 inline" />
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border-4 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow focus:outline-none transition-all duration-200"
                placeholder="(555) 123-4567"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-accent-red font-medium mt-1">{errors.phone.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="companyName" className="block text-neutral-dark font-bold mb-2 flex items-center">
                <Building className="h-4 w-4 mr-2 inline" />
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full border-4 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow focus:outline-none transition-all duration-200"
                placeholder="Your fence company"
                {...register("companyName")}
              />
            </div>
            
            {!quickMode && (
              <div>
                <label htmlFor="message" className="block text-neutral-dark font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border-4 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow focus:outline-none transition-all duration-200 min-h-[120px]"
                  placeholder="Tell us about your marketing needs..."
                  {...register("message")}
                ></textarea>
              </div>
            )}
          </div>
          
          <div className="pt-4">
            <div className="bg-neutral-light border-4 border-neutral-dark p-3 mb-6">
              <p className="text-sm font-medium text-neutral-dark text-center">
                <span className="font-bold">✓</span> By submitting, you'll get a FREE marketing analysis for your fence business!
              </p>
            </div>
            
            <RetroButton
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span className="uppercase font-bold">{quickMode ? 'Get Started Now' : 'Send Message'}</span>
                </>
              )}
            </RetroButton>
          </div>
        </form>
      )}
    </div>
  )
}
