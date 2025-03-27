"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { FenceLogo } from "./fence-logo"
import { RetroButton } from "./retro-button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white border-b-4 border-black shadow-md" 
        : "bg-sky border-b-4 border-black"
    )}>
      <div className="container flex h-16 sm:h-16 md:h-20 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-1 sm:gap-2">
          <div className="relative flex items-center">
            <FenceLogo size="sm" animated withCircle className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          <span className="font-bold text-lg sm:text-lg md:text-2xl text-black bg-yellow-500 px-2 border-2 border-black">WE MARKET FENCE!</span>
        </Link>
        <div className="flex items-center">
          <nav className="ml-auto hidden md:flex gap-8 mr-6">
            <Link href="/#services" className="font-medium text-black hover:text-yellow-500 transition-colors">
              Services
            </Link>
            <Link href="/work" className="font-medium text-black hover:text-yellow-500 transition-colors">
              Work
            </Link>
            <Link href="/#about" className="font-medium text-black hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="/process" className="font-medium text-black hover:text-yellow-500 transition-colors">
              Process
            </Link>
            <Link href="/#contact" className="font-medium text-black hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <RetroButton className="hidden sm:flex bg-yellow-500 hover:bg-yellow-400 text-black border-3 border-black font-bold text-sm py-2 px-4">
              <Link href="/#contact">Get Started!</Link>
            </RetroButton>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden border-3 border-black hover:bg-yellow-500 bg-yellow-500 rounded-none p-2 mobile-touch-target">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-l-4 border-black p-0 w-full sm:w-[320px] max-w-full">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b-4 border-black">
                    <FenceLogo size="md" animated withCircle />
                  </div>
                  <nav className="flex flex-col p-6 gap-6">
                    <Link 
                      href="/#services" 
                      className="font-medium text-black hover:text-yellow-500 transition-colors text-lg py-2 border-b-2 border-black mobile-touch-target"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <Link 
                      href="/work" 
                      className="font-medium text-black hover:text-yellow-500 transition-colors text-lg py-2 border-b-2 border-black mobile-touch-target"
                      onClick={() => setIsOpen(false)}
                    >
                      Work
                    </Link>
                    <Link 
                      href="/#about" 
                      className="font-medium text-black hover:text-yellow-500 transition-colors text-lg py-2 border-b-2 border-black mobile-touch-target"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/process" 
                      className="font-medium text-black hover:text-yellow-500 transition-colors text-lg py-2 border-b-2 border-black mobile-touch-target"
                      onClick={() => setIsOpen(false)}
                    >
                      Process
                    </Link>
                    <Link 
                      href="/#contact" 
                      className="font-medium text-black hover:text-yellow-500 transition-colors text-lg py-2 border-b-2 border-black mobile-touch-target"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="mt-auto p-6 border-t-4 border-black">
                    <RetroButton className="w-full bg-yellow-500 hover:bg-yellow-400 text-black border-4 border-black font-bold py-3">
                      <Link href="/#contact">Get Started!</Link>
                    </RetroButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
