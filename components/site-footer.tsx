"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Instagram, Facebook, ArrowUp } from "lucide-react"
import { RetroButton } from "./retro-button"
import { cn } from "../lib/utils"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-neutral-light border-t-4 border-neutral-dark">
      {/* Main Footer Content */}
      <div className="border-b-4 border-neutral-dark py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
            {/* Logo and about */}
            <div className="col-span-1 md:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <Image 
                  src="/images/wmf.png" 
                  alt="We Market Fence Logo" 
                  width={220} 
                  height={88} 
                  className="h-20 w-auto"
                />
              </Link>
              <p className="text-base font-medium mb-6 max-w-sm">Helping fence companies attract more customers with powerful websites and marketing strategies.</p>
              <RetroButton 
                onClick={scrollToTop}
                variant="secondary"
                size="sm"
                className="mt-2"
                icon={<ArrowUp className="h-4 w-4" />}
              >
                Back to Top
              </RetroButton>
            </div>
            
            {/* Quick Links */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-bold text-lg mb-5 pb-2 border-b-4 border-neutral-dark/30">Navigation</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/#services" className="font-bold text-neutral-dark hover:text-accent-red transition-colors hover:translate-x-1 duration-200">
                  Services
                </Link>
                <Link href="/our-work" className="font-bold text-neutral-dark hover:text-accent-red transition-colors hover:translate-x-1 duration-200">
                  Our Work
                </Link>
                <Link href="/#about" className="font-bold text-neutral-dark hover:text-accent-red transition-colors hover:translate-x-1 duration-200">
                  About Us
                </Link>
                <Link href="/process" className="font-bold text-neutral-dark hover:text-accent-red transition-colors hover:translate-x-1 duration-200">
                  Our Process
                </Link>
                <Link href="/#contact" className="font-bold text-neutral-dark hover:text-accent-red transition-colors hover:translate-x-1 duration-200">
                  Contact
                </Link>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="font-bold text-lg mb-5 pb-2 border-b-4 border-neutral-dark/30">Contact Us</h3>
              <div className="space-y-4">
                <a 
                  href="tel:6155610502" 
                  className="flex items-center gap-3 font-bold text-neutral-dark hover:text-accent-red transition-colors group"
                >
                  <div className="bg-accent-green p-2 border-4 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all duration-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  (615) 561-0502
                </a>
                <a 
                  href="mailto:jonny@wemarketfence.com" 
                  className="flex items-center gap-3 font-bold text-neutral-dark hover:text-accent-red transition-colors group"
                >
                  <div className="bg-accent-green p-2 border-4 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all duration-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  jonny@wemarketfence.com
                </a>
              </div>
            </div>
            
            {/* Social and Hours */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="font-bold text-lg mb-5 pb-2 border-b-4 border-neutral-dark/30">Connect With Us</h3>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 border-4 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 border-4 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <div className="bg-white border-4 border-neutral-dark p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-bold text-lg mb-2 border-b-2 border-neutral-dark/20 pb-2">Business Hours</h3>
                <p className="font-medium">Monday-Friday: 9am-5pm</p>
                <p className="font-medium">Weekends: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-medium"> {currentYear} We Market Fence. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="font-medium hover:text-accent-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-medium hover:text-accent-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
