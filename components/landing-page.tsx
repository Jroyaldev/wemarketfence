"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-neutral-200">
          {/* Form Header */}
          <div className="bg-neutral-900 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Get Your Fence Marketing Strategy</h1>
            <p className="text-neutral-300">Complete this quick form to see how we can help grow your fence business</p>
          </div>

          {/* Progress Steps */}
          <div className="flex bg-neutral-50 border-b border-neutral-200">
            <div 
              className={`flex-1 text-center py-3 ${formStep === 1 ? 'text-accent-red font-bold' : 'text-neutral-500'}`}
            >
              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 ${formStep === 1 ? 'bg-accent-red text-white' : 'bg-neutral-200'}`}>
                1
              </span>
              Contact Info
            </div>
            <div 
              className={`flex-1 text-center py-3 ${formStep === 2 ? 'text-accent-red font-bold' : 'text-neutral-500'}`}
            >
              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 ${formStep === 2 ? 'bg-accent-red text-white' : 'bg-neutral-200'}`}>
                2
              </span>
              Services
            </div>
            <div 
              className={`flex-1 text-center py-3 ${formStep === 3 ? 'text-accent-red font-bold' : 'text-neutral-500'}`}
            >
              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 ${formStep === 3 ? 'bg-accent-red text-white' : 'bg-neutral-200'}`}>
                3
              </span>
              Details
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                  <p className="mb-6 text-neutral-600">
                    Your information has been submitted successfully. We'll be in touch with you shortly.
                  </p>
                </motion.div>
              ) : formStep === 1 ? (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={nextStep}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">Zip Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                      maxLength={10}
                      placeholder="e.g. 12345"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                    />
                  </div>

                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent-red hover:bg-accent-red/90 text-white font-bold rounded-md flex items-center transition-colors"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </motion.form>
              ) : formStep === 2 ? (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={nextStep}
                >
                  <div className="mb-5">
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-neutral-700 mb-1">Which service are you most interested in? *</label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Conversion-Optimized Website">Conversion-Optimized Website ($250/mo)</option>
                      <option value="Website + SEO">Website + SEO ($600/mo)</option>
                      <option value="Full-Service Lead Gen">Full-Service Lead Gen ($1200/mo)</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <p className="block text-sm font-medium text-neutral-700 mb-2">Would you be interested in any add-ons?</p>
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
                          <label htmlFor="extra-blog" className="block text-sm font-medium text-neutral-700">Extra Blog Content ($150/mo)</label>
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
                          <label htmlFor="social-media" className="block text-sm font-medium text-neutral-700">Social Media Management ($300/mo)</label>
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
                          <label htmlFor="strategy-call" className="block text-sm font-medium text-neutral-700">Monthly Strategy Call ($125/mo)</label>
                          <p className="text-xs text-neutral-500">30-minute consultation with marketing expert</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">What's your approximate monthly marketing budget? *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
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

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-white border border-neutral-300 text-neutral-700 font-medium rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent-red hover:bg-accent-red/90 text-white font-bold rounded-md flex items-center transition-colors"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.form
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-5">
                    <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-1">When are you looking to start? *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select timeline</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Just exploring options">Just exploring options</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-neutral-700 mb-1">How did you hear about us?</label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Google">Google Search</option>
                      <option value="Facebook">Facebook/Instagram Ad</option>
                      <option value="Referral">Referral from another business</option>
                      <option value="Other Social Media">Other Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Anything else we should know?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-white border border-neutral-300 text-neutral-700 font-medium rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-accent-red hover:bg-accent-red/90 text-white font-bold rounded-md flex items-center transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My Marketing Plan'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Form Footer */}
          <div className="bg-neutral-50 border-t border-neutral-200 p-4 text-xs text-neutral-500 text-center">
            By submitting this form, you agree to our <a href="/privacy" className="text-accent-red hover:underline">Privacy Policy</a>. We'll never share your information.
          </div>
        </div>
      </div>
    </main>
  );
}
