"use client"

import React from "react"
import Link from "next/link"
import { Phone, Mail, Instagram, Facebook, ArrowUp } from "lucide-react"
import { FenceLogo } from "./fence-logo"
import { RetroButton } from "./retro-button"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-neutral-light border-t-4 border-neutral-dark pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FenceLogo size="md" withCircle className="w-20 h-20" />
              <span className="font-bold text-lg text-neutral-dark bg-accent-yellow px-2 border-4 border-neutral-dark">WE MARKET FENCE!</span>
            </Link>
            <p className="text-sm font-medium mb-4">Supercharge your fencing business with websites that attract customers!</p>
            <RetroButton 
              className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-neutral-dark font-bold hover:-translate-y-1 transition-transform duration-200 py-2 px-4 text-sm"
              onClick={scrollToTop}
              variant="secondary"
            >
              <ArrowUp className="h-4 w-4 mr-2" /> Back to Top
            </RetroButton>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-extrabold text-lg mb-4 border-b-2 border-neutral-dark pb-2">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/#services" className="font-medium text-neutral-dark hover:text-accent-red transition-colors">
                Services
              </Link>
              <Link href="/work" className="font-medium text-neutral-dark hover:text-accent-red transition-colors">
                Our Work
              </Link>
              <Link href="/#about" className="font-medium text-neutral-dark hover:text-accent-red transition-colors">
                About Us
              </Link>
              <Link href="/process" className="font-medium text-neutral-dark hover:text-accent-red transition-colors">
                Our Process
              </Link>
              <Link href="/#contact" className="font-medium text-neutral-dark hover:text-accent-red transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-extrabold text-lg mb-4 border-b-2 border-neutral-dark pb-2">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 font-medium text-neutral-dark hover:text-accent-red transition-colors"
              >
                <div className="bg-white p-1 border-4 border-neutral-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Phone className="h-4 w-4" />
                </div>
                (123) 456-7890
              </a>
              <a 
                href="mailto:jonny@wemarketfence.com" 
                className="flex items-center gap-2 font-medium text-neutral-dark hover:text-accent-red transition-colors"
              >
                <div className="bg-white p-1 border-4 border-neutral-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm md:text-base min-w-[190px]">jonny@wemarketfence.com</span>
              </a>
            </div>
          </div>
          
          {/* Social and Hours */}
          <div className="col-span-1">
            <h3 className="font-extrabold text-lg mb-4 border-b-2 border-neutral-dark pb-2">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 border-4 border-neutral-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 border-4 border-neutral-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-white border-4 border-neutral-dark p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-extrabold text-lg mb-2">Business Hours</h3>
              <p className="text-sm font-medium">Monday-Friday: 9am-5pm</p>
              <p className="text-sm font-medium">Weekends: By appointment</p>
            </div>
          </div>
        </div>
        
        {/* Copyright bar */}
        <div className="pt-6 mt-6 border-t-2 border-neutral-dark text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium"> {currentYear} We Market Fence. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-sm font-medium hover:text-accent-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm font-medium hover:text-accent-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
