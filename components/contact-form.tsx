"use client"

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader2, Send, CheckCircle, Phone, Mail, User, Building, ArrowRight, ArrowLeft } from "lucide-react";
import { RetroButton } from "./retro-button";
import { cn } from "../lib/utils";

// Add Facebook Pixel type declaration for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

interface ContactFormProps {
  quickMode?: boolean;
  onSubmitSuccess?: () => void;
  onStepChange?: (step: number) => void;
  privacyPolicy?: React.ReactNode;
}

export function ContactForm({ quickMode = false, onSubmitSuccess, onStepChange, privacyPolicy }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });
  
  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setError(null);
      
      try {
        console.log("Form submission started with data:", JSON.stringify(values, null, 2));
        
        // Send form data to API route
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            formType: quickMode ? "Quick Lead Form" : "Contact Form",
          }),
        });

        const result = await response.json();
        console.log("API response:", result);
        
        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit form');
        }

        console.log("Form submitted successfully!", result);

        // Track form submission with Meta Pixel
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: quickMode ? 'Quick Lead Form - Complete' : 'Contact Form - Complete',
            content_category: 'Fence Marketing Lead',
          });
          console.log("Meta Pixel conversion tracked");
        }

        setIsSubmitted(true);
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } catch (err) {
        console.error("Form submission error:", err);
        
        let errorMessage = "There was an error sending your message. Please try again.";
        
        if (err instanceof Error) {
          console.error("Error details:", err.message);
          errorMessage = `Error: ${err.message}`;
        }
        
        setError(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Handle next step button click with direct validation check
  const handleNextStep = () => {
    console.log("Next button clicked");
    
    // Focus form fields to trigger validation
    formik.setFieldTouched('name', true);
    formik.setFieldTouched('email', true);
    
    // Check values and errors directly
    if (formik.values.name && formik.values.email && !formik.errors.name && !formik.errors.email) {
      console.log("Step 1 validation passed, proceeding to step 2");
      
      // Track first-step with Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_name: quickMode ? 'Quick Lead Form - Step 1' : 'Contact Form - Step 1',
          content_category: 'Fence Marketing Lead',
        });
        console.log("First step pixel tracked");
      }
      
      // Move to step 2
      setFormStep(2);
      if (onStepChange) {
        onStepChange(2);
      }
    } else {
      console.log("Cannot proceed to step 2 - validation errors", formik.errors);
    }
  };
  
  // Handle previous step button click
  const handlePreviousStep = () => {
    setFormStep(1);
    if (onStepChange) {
      onStepChange(1);
    }
  };

  return (
    <div className={cn(
      "bg-white border border-neutral-100 p-5 sm:p-6 md:p-8 w-full rounded-lg", 
      !quickMode ? 'w-full' : '', 
      "shadow-sm transition-all duration-300 relative"
    )}>
      {!quickMode && formStep === 1 && !isSubmitted && (
        <div className="absolute -top-3 -right-3 bg-accent-red p-3 rounded-md border border-accent-red/20 z-10 shadow-sm">
          <p className="text-white font-medium text-sm">FREE QUOTE</p>
        </div>
      )}
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark">Thanks for reaching out!</h3>
          <p className="text-neutral-near-black/80 mb-8">We'll get back to you within 24 hours.</p>
          
          <div className="mb-8">
            <p className="text-neutral-dark font-medium mb-4">Know a fence contractor who needs help with marketing?</p>
            <div className="flex justify-center space-x-4">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://wemarketfence.com')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b5998] text-white p-3 rounded-md hover:opacity-90 transition-all"
                aria-label="Share on Facebook"
              >
                Share on Facebook
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just found an awesome marketing service for fence contractors! Check them out:')}&url=${encodeURIComponent('https://wemarketfence.com')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1da1f2] text-white p-3 rounded-md hover:opacity-90 transition-all"
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
            variant="primary" 
            className="mx-auto" 
            onClick={() => window.location.href = "/"}
          >
            Back to Home
          </RetroButton>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-dark">
              {quickMode ? "Quick Contact" : "Let's Talk About Your Fence Business"}
            </h3>
            <p className="text-neutral-dark/70">
              {quickMode ? "Fill out this form for a quick response." : "Fill out the form below to get started with your free consultation."}
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          {/* Form progress indicator */}
          {!quickMode && (
            <div className="mb-6 relative">
              <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full bg-accent-yellow transition-all duration-300",
                    formStep === 1 ? "w-1/2" : "w-full"
                  )}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-neutral-dark/60 mt-1">
                <span className={formStep === 1 ? "font-medium text-accent-yellow" : ""}>Basic Info</span>
                <span className={formStep === 2 ? "font-medium text-accent-yellow" : ""}>Additional Details</span>
              </div>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {formStep === 1 ? (
              // Step 1 Fields
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark">
                    Your Name <span className="text-accent-red">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="w-5 h-5 text-neutral-300" />
                    </div>
                    <input
                      id="name"
                      name="name" 
                      type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={cn(
                        "block w-full pl-10 border border-neutral-200 rounded-md p-3 shadow-sm",
                        formik.touched.name && formik.errors.name ? "border-red-300 focus:ring-red-500" : ""  
                      )}
                      placeholder="John Smith"
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <span className="text-xs text-accent-red">{formik.errors.name}</span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">
                    Email Address <span className="text-accent-red">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-neutral-300" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={cn(
                        "block w-full pl-10 border border-neutral-200 rounded-md p-3 shadow-sm",
                        formik.touched.email && formik.errors.email ? "border-red-300 focus:ring-red-500" : ""  
                      )}
                      placeholder="john@example.com"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-xs text-accent-red">{formik.errors.email}</span>
                  )}
                </div>
                
                <div className="pt-2">
                  <RetroButton 
                    type="button" 
                    onClick={handleNextStep}
                    className="w-full justify-center"
                    variant="primary"
                  >
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                  </RetroButton>
                </div>
              </div>
            ) : (
              // Step 2 Fields
              <div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone className="w-5 h-5 text-neutral-300" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-10 border border-neutral-200 rounded-md p-3 shadow-sm"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-dark">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Building className="w-5 h-5 text-neutral-300" />
                      </div>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-10 border border-neutral-200 rounded-md p-3 shadow-sm"
                        placeholder="Your Fence Company"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full border border-neutral-200 rounded-md p-3 shadow-sm"
                      placeholder="Tell us about your fence business and what you're looking for..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <RetroButton
                    type="button"
                    onClick={handlePreviousStep}
                    variant="secondary"
                    size="md"
                    className="flex-1"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </RetroButton>
                  <RetroButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="md"
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" /> Submit
                      </>
                    )}
                  </RetroButton>
                </div>
              </div>
            )}
          </form>

          {/* Privacy policy notice */}
          {privacyPolicy && (
            <div className="mt-6 text-sm text-neutral-dark/60">
              {privacyPolicy}
            </div>
          )}
        </>
      )}
    </div>
  );
}
