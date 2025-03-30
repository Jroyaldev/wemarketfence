"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export function FooterCopyright() {
  const [year, setYear] = useState<number>(new Date().getFullYear()) // Initialize directly

  return (
    <div className="w-full bg-white border-t-4 border-neutral-dark pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="border-4 border-neutral-dark p-4 mb-6 inline-block bg-accent-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold uppercase text-neutral-dark">We Market Fence</h3>
            </div>
            
            <p className="text-neutral-near-black mb-6">
              Specialized marketing solutions designed exclusively for fence contractors.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-dark font-medium">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:jonny@wemarketfence.com" 
                  className="text-neutral-dark font-medium hover:text-accent-red transition-colors"
                >
                  jonny@wemarketfence.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-red mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-dark font-medium">Serving fence contractors nationwide</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <div className="border-4 border-neutral-dark p-4 mb-6 inline-block bg-[#58CCDC] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold uppercase text-neutral-dark">Quick Links</h3>
            </div>
            
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="flex items-center text-neutral-dark font-medium hover:text-accent-red transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/our-work"
                  className="flex items-center text-neutral-dark font-medium hover:text-accent-red transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Our Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/process"
                  className="flex items-center text-neutral-dark font-medium hover:text-accent-red transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy"
                  className="flex items-center text-neutral-dark font-medium hover:text-accent-red transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <div className="border-4 border-neutral-dark p-4 mb-6 inline-block bg-accent-red shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold uppercase text-white">Get Updates</h3>
            </div>
            
            <p className="text-neutral-near-black mb-4">
              Subscribe to get the latest fence marketing tips and strategies.
            </p>
            
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full border-4 border-neutral-dark p-3 bg-white text-neutral-dark focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="w-full bg-accent-yellow border-4 border-neutral-dark p-3 font-bold text-neutral-dark hover:bg-accent-red hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transform transition-all"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t-2 border-dashed border-neutral-dark pt-8 text-center">
          <p className="font-bold text-sm uppercase tracking-wider text-neutral-dark pb-2 inline-block">
            &copy; {year} WE MARKET FENCE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  )
}
