"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Added multiple industrial client testimonials
  const testimonials = [
    {
      quote:
        "The automated lubrication systems from this team have revolutionized our production line. Downtime has been reduced by 40% and our equipment runs smoother than ever. Their expertise in industrial applications is unmatched.",
      author: "David Martin",
      role: "Operations Director",
      company: "Advanced Manufacturing Solutions",
      image: "/images/testimonial-client-1.jpg",
    },
    {
      quote:
        "Outstanding service and technical knowledge. They designed a custom dual-line lubrication system for our automotive plant that exceeded all expectations. The ROI was achieved within the first year of implementation.",
      author: "Sarah Chen",
      role: "Plant Manager",
      company: "Precision Automotive Industries",
      image: "/images/testimonial-client-2.jpg",
    },
    {
      quote:
        "Working with this team has been a game-changer for our mining operations. Their centrally managed lubrication systems have significantly improved equipment reliability and reduced maintenance costs across all our sites.",
      author: "Michael Rodriguez",
      role: "Maintenance Supervisor",
      company: "Global Mining Corporation",
      image: "/images/testimonial-client-3.jpg",
    },
    {
      quote:
        "The high-pressure pump modules they installed in our facility are performing flawlessly. Their attention to detail and commitment to quality is evident in every aspect of the project. Highly recommended.",
      author: "Jennifer Thompson",
      role: "Engineering Manager",
      company: "Industrial Energy Systems",
      image: "/images/testimonial-client-4.jpg",
    },
  ]

  // Added functional prev/next handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Testimonials</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our satisfied clients have to say about our industrial
          lubrication solutions and production systems.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-16 shadow-2xl relative z-10 rounded-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 items-center">
              {/* Enhanced image presentation with professional styling */}
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-52 w-52 mx-auto md:mx-0 border-8 border-gray-50 shadow-xl rounded-sm overflow-hidden"
              >
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Added decorative quotation mark */}
                    <div className="text-7xl font-serif text-gray-200 absolute -top-8 -left-6 select-none leading-none">
                      "
                    </div>
                    <p className="text-gray-600 text-base italic mb-8 leading-relaxed relative z-10">
                      {testimonials[currentIndex].quote}
                    </p>
                    {/* Enhanced author information with company name */}
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold text-xl text-gray-900 tracking-wide">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400 text-xs font-medium mt-1">{testimonials[currentIndex].company}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Added pagination dots for better UX */}
                <div className="flex gap-2 mt-8 justify-center md:justify-start">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Added click handlers to navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg hover:scale-110 transform duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg hover:scale-110 transform duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
