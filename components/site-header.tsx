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
        "sticky top-0 z-50 w-full border-b border-neutral-200 bg-white transition-all duration-300", 
        scrolled ? "shadow-sm" : ""
      )}
    >
      <div className="container flex h-16 items-center sm:h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="/images/wmf.png" 
            alt="We Market Fence Logo" 
            width={180} 
            height={72} 
            className="h-14 w-auto" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-10 text-sm font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-lg font-medium text-neutral-dark transition-colors hover:text-accent-red relative group uppercase"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent-red transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Header Actions (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
          {/* Phone number for desktop */}
          <a href="tel:6155610502" className="flex items-center text-neutral-dark hover:text-accent-red transition-colors">
            <div className="bg-accent-green p-1.5 rounded-full mr-2 flex-shrink-0 group-hover:bg-accent-red transition-colors">
              <Phone className="h-4 w-4 text-neutral-dark" />
            </div>
            <span className="font-medium">(615) 561-0502</span>
          </a>
          
          <Link href="/funnel" legacyBehavior passHref>
            <RetroButton
              size="sm"
              variant="primary"
              className="min-w-[120px] text-center"
            >
              FREE QUOTE
            </RetroButton>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center w-12 h-12 text-neutral-dark rounded-md hover:bg-neutral-100 hover:text-accent-red transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-neutral-light border-l border-neutral-200 p-0">
              <div className="flex flex-col h-full">
                {/* Adding SheetTitle for accessibility - visually hidden */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                  <Link href="/" className="flex items-center">
                    <Image 
                      src="/images/wmf.png" 
                      alt="We Market Fence Logo" 
                      width={150} 
                      height={60} 
                      className="h-12 w-auto" 
                    />
                  </Link>
                  <SheetClose className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-neutral-200 transition-colors">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </SheetClose>
                </div>
                
                <nav className="flex flex-col p-6">
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.href}
                        className="text-xl font-medium text-neutral-dark hover:text-accent-red uppercase py-3 border-b border-neutral-200 flex items-center group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">→</span>
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                
                <div className="mt-auto p-6 bg-white border-t border-neutral-200">
                  <a 
                    href="tel:6155610502" 
                    className="flex items-center text-neutral-dark font-medium hover:text-accent-red transition-colors mb-4"
                  >
                    <div className="flex items-center justify-center bg-accent-green p-2 mr-3 rounded-md">
                      <Phone className="h-5 w-5 text-neutral-dark" />
                    </div>
                    <span>(615) 561-0502</span>
                  </a>
                  
                  <SheetClose asChild>
                    <Link href="/funnel" className="block w-full">
                      <RetroButton
                        size="md"
                        variant="primary"
                        className="w-full justify-center"
                      >
                        GET FREE QUOTE
                      </RetroButton>
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
