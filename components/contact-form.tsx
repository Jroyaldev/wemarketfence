"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { Loader2 } from "lucide-react"
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
    <div className={`bg-white border-4 border-black p-6 md:p-8 w-full ${!quickMode ? 'max-w-lg mx-auto' : ''} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative`}>
      {/* Decorative elements */}
      {!quickMode && (
        <>
          <div className="absolute -top-6 -right-6 bg-yellow-500 p-3 rounded-full border-4 border-black transform rotate-12 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-black font-extrabold text-sm md:text-base">FREE!</p>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[#58CCDC] p-2 rounded-full border-3 border-black transform -rotate-6 z-10">
            <p className="text-black font-bold text-sm">Easy!</p>
          </div>
        </>
      )}
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Thanks for reaching out!</h3>
          <p className="font-bold mb-6">We'll get back to you as soon as possible.</p>
          {!quickMode && (
            <div className="mb-8 w-full max-w-xs mx-auto">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29-vU12IAN9S8r7hak7DTvSfeGhRz3UBR.png" 
                alt="We Market Fence Logo" 
                className="w-full h-auto"
              />
            </div>
          )}
          <RetroButton
            className="bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </RetroButton>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 text-center border-b-4 border-black pb-4">
            {quickMode ? "Get Started Now!" : "Get Your Free Consultation!"}
          </h3>
          
          {!quickMode && (
            <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4">
              <p className="font-bold text-sm md:text-base">
                💡 Get expert advice on how to market your fence business and attract more customers!
              </p>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 p-3 mb-4 font-bold">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-3 border-4 border-black focus:border-yellow-500 focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 font-bold">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block font-bold mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-3 border-4 border-black focus:border-yellow-500 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-bold">{errors.email.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block font-bold mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-3 border-4 border-black focus:border-yellow-500 focus:outline-none ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 font-bold">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="companyName" className="block font-bold mb-1">
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  className={`w-full px-4 py-3 border-4 border-black focus:border-yellow-500 focus:outline-none ${
                    errors.companyName ? "border-red-500" : ""
                  }`}
                  {...register("companyName", { required: "Company name is required" })}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1 font-bold">{errors.companyName.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block font-bold mb-1">
                {quickMode ? "How can we help?" : "Message"}
              </label>
              <textarea
                id="message"
                rows={quickMode ? 2 : 4}
                className={`w-full px-4 py-3 border-4 border-black focus:border-yellow-500 focus:outline-none ${
                  errors.message ? "border-red-500" : ""
                }`}
                {...register("message", { required: "Message is required" })}
                placeholder={quickMode ? "Briefly tell us about your fence business..." : ""}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 font-bold">{errors.message.message}</p>
              )}
            </div>
            
            <RetroButton
              type="submit"
              className="w-full bg-yellow-500 border-4 border-black text-black font-extrabold hover:bg-yellow-400 py-3 px-5 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                quickMode ? "Get My Growth Plan!" : "Get My Free Consultation!"
              )}
            </RetroButton>
          </form>
        </>
      )}
    </div>
  )
}
