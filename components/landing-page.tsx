"use client"

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Add TypeScript declaration for gtag_report_conversion
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  zipCode: string;
  serviceInterest: string;
  addOns: string[];
  budget: string;
  timeline: string;
  hearAbout: string;
  message: string;
};

export default function LandingPage() {
  const router = useRouter();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    zipCode: '',
    serviceInterest: '',
    addOns: [],
    budget: '',
    timeline: '',
    hearAbout: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [partialSubmitted, setPartialSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [redirectReady, setRedirectReady] = useState(false);

  // Hide site footer, header, and navigation on this page using useEffect
  useEffect(() => {
    // Hide the footer, header, and nav when the component mounts
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (footer) footer.style.display = 'none';
    if (header) header.style.display = 'none';
    if (nav) nav.style.display = 'none';
    
    // Prevent zooming on mobile
    const metaViewport = document.querySelector('meta[name="viewport"]');
    const originalContent = metaViewport?.getAttribute('content') || '';
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    // Prevent pinch zoom on mobile
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchmove', preventZoom as EventListener, { passive: false });
    document.addEventListener('touchstart', preventZoom as EventListener, { passive: false });

    // Set body height to viewport height on mobile to reduce scrolling
    const setViewportHeight = () => {
      // Only apply viewport height restriction on mobile devices
      if (window.innerWidth < 768) {
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.height = '';
        document.body.style.overflow = '';
      }
    };
    
    // Set initial viewport height
    setViewportHeight();
    
    // Update viewport height on resize
    window.addEventListener('resize', setViewportHeight);
    
    // Restore the footer, header, nav, and body styles when the component unmounts
    return () => {
      if (footer) footer.style.display = '';
      if (header) header.style.display = '';
      if (nav) nav.style.display = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
      window.removeEventListener('resize', setViewportHeight);
      
      // Restore original meta viewport content
      if (metaViewport) {
        metaViewport.setAttribute('content', originalContent);
      }
      
      // Remove event listeners
      document.removeEventListener('touchmove', preventZoom as EventListener);
      document.removeEventListener('touchstart', preventZoom as EventListener);
    };
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox changes for add-ons
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        addOns: [...prev.addOns, name]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        addOns: prev.addOns.filter(addon => addon !== name)
      }));
    }
  };

  // Submit partial form data (step 1)
  const submitPartialForm = async () => {
    if (partialSubmitted) return; // Don't submit twice
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          zipCode: formData.zipCode,
          message: `[PARTIAL FORM SUBMISSION] Contact information captured from landing page. Zip Code: ${formData.zipCode}`
        }),
      });

      if (response.ok) {
        setPartialSubmitted(true);
        console.log('Partial form data submitted successfully');
      }
    } catch (error) {
      console.error('Error submitting partial form:', error);
    }
  };

  // Progress to next form step
  const nextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for step 1
    if (formStep === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.zipCode) {
        setSubmitError('Please fill in all required fields');
        return;
      }
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitError('Please enter a valid email address');
        return;
      }
      // Phone validation
      const phoneRegex = /^[\d\(\)\-\+\s]{10,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        setSubmitError('Please enter a valid phone number');
        return;
      }
      // Zip code validation
      const zipRegex = /^\d{5}(-\d{4})?$/;
      if (!zipRegex.test(formData.zipCode)) {
        setSubmitError('Please enter a valid zip code');
        return;
      }
      
      // Submit partial form data
      await submitPartialForm();
    }
    
    // Validation for step 2
    if (formStep === 2) {
      if (!formData.serviceInterest || !formData.budget) {
        setSubmitError('Please select a service and budget');
        return;
      }
    }

    setSubmitError('');
    setFormStep(prev => prev + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  // Submit complete form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Format add-ons with prices
    const formatAddOns = () => {
      if (formData.addOns.length === 0) return 'None';
      
      const addOnPrices = {
        'Extra Blog Content': '$150/mo',
        'Social Media Management': '$300/mo',
        'Monthly Strategy Call': '$125/mo'
      };
      
      return formData.addOns.map(addon => {
        return `${addon} (${addOnPrices[addon as keyof typeof addOnPrices]})`;
      }).join(', ');
    };
    
    // Format service interest with price
    const formatServiceInterest = () => {
      const servicePrices = {
        'Conversion-Optimized Website': '$250/mo',
        'Website + SEO': '$600/mo',
        'Full-Service Lead Gen': '$1200/mo'
      };
      
      const price = servicePrices[formData.serviceInterest as keyof typeof servicePrices] || '';
      return `${formData.serviceInterest} ${price ? `(${price})` : ''}`;
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          zipCode: formData.zipCode,
          message: `Service Interest: ${formatServiceInterest()}\n` +
                   `Add-ons: ${formatAddOns()}\n` +
                   `Budget: ${formData.budget}\n` +
                   `Timeline: ${formData.timeline}\n` +
                   `How they heard about us: ${formData.hearAbout}\n` +
                   `Additional Information: ${formData.message}`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track conversion with Google Ads after successful submission
      if (typeof window !== 'undefined' && window.gtag_report_conversion) {
        window.gtag_report_conversion();
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effect for redirect
  useEffect(() => {
    if (redirectReady) {
      router.push('/');
    }
  }, [redirectReady, router]);
  
  // Countdown effect for thank you screen
  useEffect(() => {
    if (submitSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (submitSuccess && countdown === 0) {
      // Set redirect ready instead of directly redirecting
      setRedirectReady(true);
    }
  }, [submitSuccess, countdown]);

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center px-4 py-4 sm:py-8">
      <div className="w-full max-w-lg">
        {/* Navigation bar with logo, brand name and back button */}
        <div className="mb-1.5 flex items-center justify-between bg-white shadow-sm rounded-md px-2 py-1">
          <div className="flex items-center">
            <div className="h-5 w-auto mr-2">
              <img src="/images/wmf.png" alt="WMF Logo" className="h-full w-auto object-contain" />
            </div>
            <span className="font-bold text-sm text-neutral-800">We Market Fence</span>
          </div>
          <a 
            href="/" 
            className="inline-flex items-center text-xs text-neutral-600 hover:text-accent-red transition-colors font-medium">
            <span className="mr-1">←</span> Back
          </a>
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-neutral-100">
          {/* Form Header */}
          <div className="bg-neutral-900 p-3 sm:p-5 text-white">
            <h1 className="text-lg font-bold">Fence Marketing Strategy</h1>
          </div>

          {/* Progress Steps */}
          <div className="bg-neutral-100 py-1.5 px-2 border-b border-neutral-100 flex justify-between items-center">
            <div 
              className={`text-center mx-1 ${formStep === 1 ? 'text-accent-red font-bold' : 'text-neutral-500'} text-xs`}
            >
              <span>Contact Info</span>
              {formStep > 1 && <span className="ml-0.5 inline-block text-green-500">✓</span>}
            </div>
            <div className="border-t border-neutral-200 w-1.5 sm:w-4"></div>
            <div 
              className={`text-center mx-1 ${formStep === 2 ? 'text-accent-red font-bold' : 'text-neutral-500'} text-xs`}
            >
              <span>Services</span>
              {formStep > 2 && <span className="ml-0.5 inline-block text-green-500">✓</span>}
            </div>
            <div className="border-t border-neutral-200 w-1.5 sm:w-4"></div>
            <div 
              className={`text-center mx-1 ${formStep === 3 ? 'text-accent-red font-bold' : 'text-neutral-500'} text-xs`}
            >
              <span>Details</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="pt-3 px-5 pb-3 sm:px-6">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-6 px-4 sm:p-6 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: 0.2
                    }}
                    className="w-24 h-24 mx-auto mb-5 relative"
                  >
                    <img 
                      src="/images/wmf.png" 
                      alt="WMF Logo" 
                      className="w-full h-full object-contain" 
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-accent-red"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0 }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-neutral-900 mb-2"
                  >
                    Thank You!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-5 text-neutral-600"
                  >
                    Your information has been submitted successfully. We'll be in touch with you shortly.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-neutral-500 mb-4">
                      Redirecting to homepage in {countdown} second{countdown !== 1 ? 's' : ''}...
                    </p>
                    
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 py-2 bg-accent-red text-white font-medium rounded-lg shadow-sm hover:bg-red-700 transition-colors"
                      onClick={() => setRedirectReady(true)}
                    >
                      Go to Homepage Now
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : formStep === 1 ? (
                <motion.form 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5 pb-1"
                  onSubmit={nextStep}
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-neutral-700 mb-0.5">Your Name*</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-700 mb-0.5">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-neutral-700 mb-0.5">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-xs font-medium text-neutral-700 mb-0.5">Zip Code*</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                      maxLength={10}
                      placeholder="e.g. 12345"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-neutral-700 mb-0.5">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                    />
                  </div>

                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full px-4 py-2.5 bg-accent-red hover:bg-accent-red/90 text-white font-bold rounded-lg flex items-center justify-center transition-colors shadow-sm text-sm">
                      Continue <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.form>
              ) : formStep === 2 ? (
                <motion.form 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5 pb-1"
                  onSubmit={nextStep}
                >
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-medium text-neutral-700 mb-0.5">Which service are you most interested in? *</label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Conversion-Optimized Website">Conversion-Optimized Website ($250/mo)</option>
                      <option value="Website + SEO">Website + SEO ($600/mo)</option>
                      <option value="Full-Service Lead Gen">Full-Service Lead Gen ($1200/mo)</option>
                    </select>
                  </div>

                  <div>
                    <p className="block text-xs font-medium text-neutral-700 mb-2">Would you be interested in any add-ons?</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="extra-blog"
                          name="Extra Blog Content"
                          checked={formData.addOns.includes('Extra Blog Content')}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="extra-blog" className="block text-xs font-medium text-neutral-700">Extra Blog Content ($150/mo)</label>
                          <p className="text-xs text-neutral-500">2 additional posts per month</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="social-media"
                          name="Social Media Management"
                          checked={formData.addOns.includes('Social Media Management')}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="social-media" className="block text-xs font-medium text-neutral-700">Social Media Management ($300/mo)</label>
                          <p className="text-xs text-neutral-500">Content creation and posting</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="strategy-call"
                          name="Monthly Strategy Call"
                          checked={formData.addOns.includes('Monthly Strategy Call')}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="strategy-call" className="block text-xs font-medium text-neutral-700">Monthly Strategy Call ($125/mo)</label>
                          <p className="text-xs text-neutral-500">30-minute consultation with marketing expert</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-neutral-700 mb-0.5">What's your approximate monthly marketing budget? *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="$250-$500">$250-$500 per month</option>
                      <option value="$500-$1000">$500-$1000 per month</option>
                      <option value="$1000-$2000">$1000-$2000 per month</option>
                      <option value="$2000+">$2000+ per month</option>
                    </select>
                  </div>

                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="flex justify-between pt-1">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors text-sm">
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-accent-red hover:bg-accent-red/90 text-white font-bold rounded-lg flex items-center transition-colors text-sm shadow-sm">
                      Continue <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.form 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5 pb-1"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-medium text-neutral-700 mb-0.5">When are you looking to start? *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select timeline</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Just exploring options">Just exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hearAbout" className="block text-xs font-medium text-neutral-700 mb-0.5">How did you hear about us?</label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Google">Google Search</option>
                      <option value="Facebook">Facebook/Instagram Ad</option>
                      <option value="Referral">Referral from another business</option>
                      <option value="Other Social Media">Other Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-700 mb-0.5">Anything else we should know?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="flex justify-between pt-1">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors text-sm">
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-accent-red hover:bg-accent-red/90 text-white font-bold rounded-lg flex items-center transition-colors disabled:opacity-70 shadow-sm text-sm">
                      {isSubmitting ? 'Submitting...' : 'Get Plan'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Form Footer */}
          <div className="bg-neutral-50 border-t border-neutral-100 py-2 px-3 text-xs text-neutral-500 text-center">
            By submitting, you agree to our <a href="/privacy" className="text-accent-red hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </main>
  );
}
