"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import Image from "next/image"

import { cn } from "../lib/utils" 
import { RetroButton } from "./retro-button" 
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet" 

// Define nav items directly here since siteConfig is missing
const navItems = [
  { title: "Services", href: "/#services" },
  { title: "Our Work", href: "/our-work" }, 
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
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
    <header className={`sticky top-0 z-50 w-full border-b-4 border-neutral-dark bg-white transition-all duration-300 ${scrolled ? 'shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]' : ''}`}>
      <div className="container flex h-16 items-center sm:h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="/images/wmf.png" 
            alt="We Market Fence Logo" 
            width={180} 
            height={72} 
            className="h-14 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-lg font-semibold text-neutral-dark transition-colors hover:text-accent-red relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Header Actions (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
          {/* Phone number for desktop */}
          <a href="tel:6155610502" className="flex items-center text-neutral-dark hover:text-accent-red transition-colors">
            <div className="bg-accent-yellow p-1 border-2 border-neutral-dark rounded-full mr-2 flex-shrink-0">
              <Phone className="h-4 w-4 text-neutral-dark" />
            </div>
            <span className="font-semibold">(615) 561-0502</span>
          </a>
          
          <Link href="/#contact" legacyBehavior passHref>
            <RetroButton
              size="sm"
              variant="primary"
              className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200"
            >
              [ FREE QUOTE ]
            </RetroButton>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-neutral-dark hover:text-accent-red border-2 border-neutral-dark hover:border-accent-red rounded-none transition-colors">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-neutral-light border-l-4 border-neutral-dark p-6">
              <div className="mb-8">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/images/wmf.png" 
                    alt="We Market Fence Logo" 
                    width={220} 
                    height={88} 
                    className="h-18 w-auto" 
                  />
                </Link>
              </div>
              <nav className="flex flex-col space-y-5">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-semibold text-neutral-dark hover:text-accent-red uppercase group flex items-center"
                  >
                    <span className="opacity-0 group-hover:opacity-100 mr-1 transition-opacity">→</span>
                    {item.title}
                  </Link>
                ))}
                
                <div className="pt-4 border-t-2 border-dashed border-neutral-dark mt-2">
                  <a 
                    href="tel:6155610502" 
                    className="flex items-center text-neutral-dark hover:text-accent-red transition-colors my-4"
                  >
                    <Phone className="h-5 w-5 mr-2 text-accent-red" />
                    <span className="font-bold">(615) 561-0502</span>
                  </a>
                  
                  <Link href="/#contact" legacyBehavior passHref>
                    <RetroButton
                      size="md"
                      variant="primary"
                      className="mt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 w-full"
                    >
                      GET FREE QUOTE
                    </RetroButton>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
