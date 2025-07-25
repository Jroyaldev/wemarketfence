import React from "react"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Award, Clock, Users } from "lucide-react"

export function ModernFooter() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 border-t border-neutral-700">
      {/* Main Footer Content */}
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info - Takes up more space */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Image 
                  src="/images/wmf.png" 
                  alt="We Market Fence Logo" 
                  width={32} 
                  height={32} 
                  className="h-8 w-8 brightness-0 invert" 
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">We Market Fence</h3>
                <p className="text-blue-400 text-sm font-medium">Marketing Agency</p>
              </div>
            </div>
            
            <p className="text-neutral-300 text-base leading-relaxed pr-8">
              We're the leading marketing agency specializing exclusively in fence contractors. 
              Our data-driven strategies help fence companies generate qualified leads and grow 
              their business sustainably.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-700">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-blue-400 mb-1">
                  <Users className="h-4 w-4" />
                  <span className="font-bold text-lg">150+</span>
                </div>
                <p className="text-neutral-400 text-xs">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-emerald-400 mb-1">
                  <Award className="h-4 w-4" />
                  <span className="font-bold text-lg">5+</span>
                </div>
                <p className="text-neutral-400 text-xs">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-amber-400 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-bold text-lg">24hr</span>
                </div>
                <p className="text-neutral-400 text-xs">Response Time</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61574417921000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-neutral-800 hover:bg-blue-600 rounded-lg transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com/company/wemarketfence" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-neutral-800 hover:bg-blue-700 rounded-lg transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/wemarketfence" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-neutral-800 hover:bg-blue-400 rounded-lg transition-all duration-200 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-lg relative">
              Services
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Website Design', href: '/#services' },
                { name: 'SEO Optimization', href: '/#services' },
                { name: 'Lead Generation', href: '/#services' },
                { name: 'Brand Identity', href: '/#services' },
                { name: 'Social Media', href: '/#services' },
                { name: 'Content Marketing', href: '/#services' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-lg relative">
              Company
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-600"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Work', href: '/our-work' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Blog', href: '/blog' },
                { name: 'Careers', href: '/careers' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-white text-lg relative">
              Get In Touch
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-600"></div>
            </h4>
            
            <div className="space-y-4">
              <a 
                href="tel:6155610502" 
                className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors group"
              >
                <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs font-medium">Call Us</p>
                  <p className="text-white font-semibold">(615) 561-0502</p>
                </div>
              </a>
              
              <a 
                href="mailto:jonny@wemarketfence.com" 
                className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors group"
              >
                <div className="p-2 bg-emerald-600 rounded-lg group-hover:bg-emerald-500 transition-colors">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs font-medium">Email Us</p>
                  <p className="text-white font-semibold text-sm">jonny@wemarketfence.com</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg">
                <div className="p-2 bg-amber-600 rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-neutral-300 text-xs font-medium">Serving</p>
                  <p className="text-white font-semibold">United States</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg">
              <p className="text-white font-semibold text-sm mb-2">Ready to grow?</p>
              <p className="text-blue-100 text-xs mb-3">Get your free marketing audit today</p>
              <a 
                href="/funnel" 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-950 border-t border-neutral-800">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <p>© {new Date().getFullYear()} We Market Fence. All rights reserved.</p>
              <span className="hidden md:block">•</span>
              <p className="hidden md:block">Specialized Marketing for Fence Professionals</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="/privacy-policy" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="/sitemap" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}