"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Fence } from "lucide-react"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

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
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/50 bg-black/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Fence className="h-6 w-6 text-emerald-400" strokeWidth={2.5} />
          <span className="font-bold text-white">We Market Fence</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium text-emerald-200 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#work" className="text-sm font-medium text-emerald-200 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#about" className="text-sm font-medium text-emerald-200 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#process" className="text-sm font-medium text-emerald-200 hover:text-white transition-colors">
            Process
          </Link>
          <Link href="#contact" className="text-sm font-medium text-emerald-200 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4">
          <Button asChild size="sm" className="bg-emerald-600 text-white hover:bg-emerald-500 border-none font-medium">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="ml-2 md:hidden">
            <Button variant="outline" size="icon" className="border-emerald-800 text-emerald-400 hover:bg-emerald-950 hover:text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-emerald-900/50">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#services" className="text-lg font-medium text-emerald-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#work" className="text-lg font-medium text-emerald-200 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-lg font-medium text-emerald-200 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#process" className="text-lg font-medium text-emerald-200 hover:text-white transition-colors">
                Process
              </Link>
              <Link href="#contact" className="text-lg font-medium text-emerald-200 hover:text-white transition-colors">
                Contact
              </Link>
              <Button asChild className="mt-4 bg-emerald-600 text-white hover:bg-emerald-500 border-none w-full font-medium">
                <Link href="#contact">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
