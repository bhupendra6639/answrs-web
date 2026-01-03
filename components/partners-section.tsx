"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PartnersSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          We Work With Our Partners To Provide Project Perfection,
        </h2>
        <p className="text-primary font-bold text-2xl uppercase tracking-tighter">Join With Our Parnership.</p>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between gap-8 border-y border-gray-200 py-12 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex-1 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-40 h-16 border-2 border-gray-900 flex flex-col items-center justify-center text-gray-900">
                <span className="font-black text-xl leading-none">UNIQUE</span>
                <span className="text-[8px] font-bold tracking-[4px] mt-1">QUALITY DESIGN</span>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
