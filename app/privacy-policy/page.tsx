"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { RetroSection } from "../../components/retro-section"

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <RetroSection className="bg-white py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 sm:px-6"
        >
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary retro-text mb-8">Privacy Policy</h1>
            <p className="text-lg font-bold mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to We Market Fence! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website wemarketfence.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and business information that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat, contact forms, and newsletter sign-ups. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              We Market Fence!<br />
              Email: <a href="mailto:jonny@wemarketfence.com" className="text-primary hover:underline">jonny@wemarketfence.com</a><br />
              Phone: (615) 561-0502
            </p>

            <div className="mt-10">
              <Link 
                href="/"
                className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </RetroSection>
    </div>
  )
}
