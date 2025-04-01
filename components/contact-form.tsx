"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { Loader2, Send, CheckCircle, Phone, Mail, User, Building, ArrowRight, ArrowLeft } from "lucide-react"
import { RetroButton } from "./retro-button"
import { cn } from "../lib/utils"

// Add Facebook Pixel type declaration for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

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
  onStepChange?: (step: number) => void
  privacyPolicy?: React.ReactNode
}

export function ContactForm({ quickMode = false, onSubmitSuccess, onStepChange, privacyPolicy }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  })

  const emailValue = watch("email")
  const nameValue = watch("name")
  const phoneValue = watch("phone")

  const goToNextStep = async () => {
    if (formStep === 1 && nameValue && emailValue && !errors.email) {
      // Send the partial form data on step 1 completion
      try {
        // Track first-step submission with Meta Pixel
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'InitiateCheckout', {
            content_name: quickMode ? 'Quick Lead Form - Step 1' : 'Contact Form - Step 1',
            content_category: 'Fence Marketing Lead',
          });
        }

        // Send the partial data via EmailJS
        await emailjs.send(
          "service_f0gmg4e", // Your EmailJS Service ID
          "template_d197j7a", // Your EmailJS Template ID
          {
            name: nameValue,
            email: emailValue,
            phone: "Not provided yet",
            company: "Not provided yet",
            message: "Initial contact - Form step 1 completed",
            time: new Date().toLocaleString(),
            form_stage: "Step 1 - Initial Contact",
          },
          "VzrPaSgxUjIM0hI3n" // Your EmailJS Public Key
        );
        
        console.log("Step 1 form data sent successfully");
      } catch (err) {
        console.error("Error sending step 1 data:", err);
        // Don't show error to user, still proceed to next step
      }

      // Move to step 2
      setFormStep(2);
      // Notify parent component of step change
      if (onStepChange) {
        onStepChange(2);
      }
    }
  }

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
          phone: data.phone || "Not provided",
          company: data.companyName || "Not provided",
          message: data.message || "No specific message",
          time: new Date().toLocaleString(),
          form_stage: "Step 2 - Complete Submission",
        },
        "VzrPaSgxUjIM0hI3n" // Your EmailJS Public Key
      )

      // Track form submission with Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: quickMode ? 'Quick Lead Form - Complete' : 'Contact Form - Complete',
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

  const goToPreviousStep = () => {
    if (formStep === 2) {
      setFormStep(1);
      if (onStepChange) {
        onStepChange(1);
      }
    }
  }

  return (
    <div className={cn(
      "bg-white border-4 border-neutral-dark p-6 md:p-8 w-full", 
      !quickMode ? 'max-w-lg mx-auto' : '', 
      "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative"
    )}>
      {/* Decorative elements - simplified and reduced */}
      {!quickMode && formStep === 1 && !isSubmitted && (
        <div className="absolute -top-5 -right-5 bg-accent-red p-3 border-4 border-neutral-dark z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-white font-bold text-sm uppercase">FREE QUOTE</p>
        </div>
      )}
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-accent-green rounded-full flex items-center justify-center border-4 border-neutral-dark">
            <CheckCircle className="h-8 w-8 text-neutral-dark" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark">Thanks for reaching out!</h3>
          <p className="font-medium mb-8 text-neutral-near-black">We'll get back to you within 24 hours.</p>
          
          {/* Social sharing buttons - simplified */}
          <div className="mb-8">
            <p className="text-neutral-dark font-bold mb-4">Know a fence contractor who needs help with marketing?</p>
            <div className="flex justify-center space-x-4">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://wemarketfence.com')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b5998] text-white p-3 border-2 border-neutral-dark hover:brightness-110 transition-all"
                aria-label="Share on Facebook"
              >
                Share on Facebook
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just found an awesome marketing service for fence contractors! Check them out:')}&url=${encodeURIComponent('https://wemarketfence.com')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1da1f2] text-white p-3 border-2 border-neutral-dark hover:brightness-110 transition-all"
                aria-label="Share on Twitter"
              >
                Share on Twitter
              </a>
            </div>
          </div>
          
          {!quickMode && (
            <div className="mb-8 w-full max-w-xs mx-auto">
              <img 
                src="/images/wmf.png" 
                alt="We Market Fence Logo" 
                className="w-full h-auto"
              />
            </div>
          )}
          <RetroButton
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
            size="md"
          >
            Send Another Message
          </RetroButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {!quickMode && (
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-dark">
                GET IN TOUCH
                <div className="h-1 bg-accent-red w-16 mt-2"></div>
              </h3>
              <p className="text-neutral-near-black mt-3 font-medium">Fill out this form for a <span className="font-bold text-accent-red">free marketing consultation</span></p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border-l-4 border-accent-red p-4">
              <p className="font-bold text-accent-red">{error}</p>
            </div>
          )}

          {/* Step indicator - cleaner design */}
          {!quickMode && (
            <div className="flex items-center mb-6 justify-center">
              <div className="flex items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2 border-neutral-dark font-bold transition-colors",
                  formStep === 1 ? 'bg-accent-yellow text-neutral-dark' : 'bg-neutral-light'
                )}>1</div>
                <div className={cn(
                  "w-16 h-1 transition-colors",
                  formStep === 2 ? 'bg-accent-yellow' : 'bg-neutral-light'
                )}></div>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2 border-neutral-dark font-bold transition-colors",
                  formStep === 2 ? 'bg-accent-yellow text-neutral-dark' : 'bg-neutral-light'
                )}>2</div>
              </div>
            </div>
          )}
          
          {formStep === 1 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-neutral-dark font-bold mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={cn(
                    "w-full border-3 p-3 bg-white text-neutral-dark transition-all duration-200",
                    errors.name 
                      ? "border-accent-red focus:border-accent-red" 
                      : "border-neutral-dark focus:border-accent-yellow"
                  )}
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-accent-red font-medium mt-1 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-neutral-dark font-bold mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={cn(
                    "w-full border-3 p-3 bg-white text-neutral-dark transition-all duration-200",
                    errors.email 
                      ? "border-accent-red focus:border-accent-red" 
                      : "border-neutral-dark focus:border-accent-yellow"
                  )}
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
                  <p className="text-accent-red font-medium mt-1 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Social proof element - cleaner style */}
              <div className="bg-neutral-light border-2 border-neutral-dark p-4 mt-4">
                <p className="font-medium text-neutral-dark flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
                  <span>Join <strong>150+ fence contractors</strong> who grew their business with our help</span>
                </p>
              </div>
              
              {!quickMode ? (
                <div className="pt-4">
                  <RetroButton
                    type="button"
                    onClick={goToNextStep}
                    disabled={!nameValue || !emailValue || !!errors.email}
                    variant="primary"
                    className="w-full"
                    icon={<ArrowRight className="h-4 w-4 ml-2" />}
                  >
                    Continue
                  </RetroButton>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="phone" className="block text-neutral-dark font-bold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={cn(
                        "w-full border-3 p-3 bg-white text-neutral-dark transition-all duration-200",
                        errors.phone 
                          ? "border-accent-red focus:border-accent-red" 
                          : "border-neutral-dark focus:border-accent-yellow"
                      )}
                      placeholder="(555) 123-4567"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && (
                      <p className="text-accent-red font-medium mt-1 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                
                  <div className="pt-4">
                    <RetroButton
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <>Get Your Free Quote</>
                      )}
                    </RetroButton>
                  </div>
                </>
              )}
            </div>
          )}
          
          {formStep === 2 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="phone" className="block text-neutral-dark font-bold mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={cn(
                    "w-full border-3 p-3 bg-white text-neutral-dark transition-all duration-200",
                    errors.phone 
                      ? "border-accent-red focus:border-accent-red" 
                      : "border-neutral-dark focus:border-accent-yellow"
                  )}
                  placeholder="(555) 123-4567"
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && (
                  <p className="text-accent-red font-medium mt-1 text-sm">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="companyName" className="block text-neutral-dark font-bold mb-2 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  className="w-full border-3 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:outline-none transition-all duration-200"
                  placeholder="Your fence company"
                  {...register("companyName")}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-neutral-dark font-bold mb-2">
                  Tell us about your goals
                </label>
                <select
                  id="message"
                  className="w-full border-3 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:outline-none transition-all duration-200"
                  {...register("message")}
                >
                  <option value="">Select your primary goal...</option>
                  <option value="I need more leads for my fence business">I need more leads for my fence business</option>
                  <option value="I need a new website for my fence company">I need a new website for my fence company</option>
                  <option value="I want to improve my online presence">I want to improve my online presence</option>
                  <option value="I need help with social media marketing">I need help with social media marketing</option>
                  <option value="I'm just exploring options">I'm just exploring options</option>
                </select>
              </div>
              
              {/* Trust indicators - cleaner design */}
              <div className="bg-neutral-light border-2 border-neutral-dark p-4 mt-2">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
                  <span className="text-neutral-dark font-medium text-sm">Your information is secure and never shared</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
                  <span className="text-neutral-dark font-medium text-sm">No obligation, 100% free consultation</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <RetroButton
                  type="button"
                  onClick={goToPreviousStep}
                  variant="secondary"
                  size="md"
                  className="flex-1"
                  icon={<ArrowLeft className="h-4 w-4 mr-2" />}
                >
                  Back
                </RetroButton>
                <RetroButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  className="flex-1"
                  icon={!isSubmitting && <Send className="h-4 w-4 mr-2" />}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </RetroButton>
              </div>
            </div>
          )}
          
          {!isSubmitted ? (
            <RetroButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>Send Message</>
              )}
            </RetroButton>
          ) : null}
          
          {privacyPolicy}
        </form>
      )}
    </div>
  )
}
