"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Search, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin, Factory, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Project", href: "#projects" },
    { name: "Meet The Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
  ]

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      
      {/* Main navbar */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <img src="/answrs-r logo.png" alt="Logo" className="w-30 h-20" />
            </Link>

            <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold text-gray-900 uppercase tracking-wider">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#" className="hover:text-primary flex items-center gap-1">
                Contact Us
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-900 hidden sm:flex">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl uppercase tracking-widest text-primary">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex flex-col gap-6 font-bold text-sm uppercase tracking-wider text-gray-900">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-primary transition-colors border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors border-b border-gray-100 pb-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
