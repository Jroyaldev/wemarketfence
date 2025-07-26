"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import Image from "next/image"

import { cn } from "../lib/utils" 
import { RetroButton } from "./retro-button" 
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle
} from "./ui/sheet" 

// Define nav items directly here since siteConfig is missing
const navItems = [
  { title: "Services", href: "/#services" },
  { title: "Our Work", href: "/our-work" }, 
  { title: "About", href: "/#about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Process", href: "/process" },
  { title: "Contact", href: "/funnel" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 transition-all duration-300", 
        scrolled ? "shadow-lg bg-white/98" : ""
      )}
    >
      <div className="container flex h-16 items-center sm:h-18 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="mr-8 flex items-center space-x-3">
          <Image 
            src="/images/wmf.png" 
            alt="We Market Fence Logo" 
            width={160} 
            height={64} 
            className="h-10 w-auto" 
            priority
          />
          <span className="hidden sm:block font-bold text-xl text-neutral-900">
            We Market Fence
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm font-medium text-neutral-700 hover:text-blue-600 transition-colors relative group whitespace-nowrap"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Header Actions (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Phone number for desktop */}
          <a 
            href="tel:6155610502" 
            className="flex items-center text-sm text-neutral-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md hover:bg-neutral-50 whitespace-nowrap"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">(615) 561-0502</span>
          </a>
          
          <Link href="/funnel">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm whitespace-nowrap">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 text-neutral-700 rounded-md hover:bg-neutral-100 transition-colors">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white border-l border-neutral-200 p-0">
              <div className="flex flex-col h-full">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image 
                      src="/images/wmf.png" 
                      alt="We Market Fence Logo" 
                      width={120} 
                      height={48} 
                      className="h-8 w-auto" 
                    />
                    <span className="font-bold text-lg text-neutral-900">WMF</span>
                  </Link>
                  <SheetClose className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-neutral-100 transition-colors">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close menu</span>
                  </SheetClose>
                </div>
                
                <nav className="flex flex-col p-6 space-y-1">
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-neutral-700 hover:text-blue-600 py-3 px-3 rounded-md hover:bg-neutral-50 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                
                <div className="mt-auto p-6 bg-neutral-50 border-t border-neutral-100">
                  <a 
                    href="tel:6155610502" 
                    className="flex items-center text-neutral-700 font-medium hover:text-blue-600 transition-colors mb-4 p-3 rounded-md hover:bg-white"
                  >
                    <Phone className="h-5 w-5 mr-3 text-blue-600" />
                    <span>(615) 561-0502</span>
                  </a>
                  
                  <SheetClose asChild>
                    <Link href="/funnel" className="block w-full">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Get Free Quote
                      </button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
