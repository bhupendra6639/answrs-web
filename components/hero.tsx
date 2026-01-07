"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Settings } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative h-[520px] sm:h-[620px] md:h-[700px] lg:h-[760px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-industrial-lubrication-facility.jpg"
          alt="Industrial workers background"
          fill
          className="object-cover object-top brightness-[0.85]"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Fast and Reliable
            <br />
            Electrical services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/90 mb-6 sm:mb-10 max-w-xl leading-relaxed"
          >
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-10 h-14 font-bold rounded-none uppercase tracking-wider"
            >
              ABOUT US
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary text-white border-none hover:bg-primary/90 px-10 h-14 font-bold rounded-none uppercase tracking-wider"
            >
              OUR SERVICES
            </Button>
          </motion.div>
        </div>
      </div>

      <button className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white/50 hover:text-white transition-colors">
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white/50 hover:text-white transition-colors">
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Setting indicator wheels on side */}
      <div className="hidden sm:flex absolute left-0 top-1/3 z-30 p-2 bg-white/10 backdrop-blur-sm border-y border-r border-white/20">
        <Settings className="w-5 h-5 text-white animate-spin-slow" />
      </div>
    </section>
  )
}
