"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectsShowcase() {
  const projects = [
    {
      title: "Motorised Lubrication Units",
      image: "/images/m1.jpg",
    },
    {
      title: "Metering Cartidges",
      image: "/images/m2.jpg",
    },
    {
      title: "Manual Pumps ",
      image: "/images/m6.jpg",
    },
    {
      title: "Bucket Grease Pumps",
      image: "/images/m5.jpg",
    },
  ]

  return (
    <section id="projects" className="scroll-mt-[80px]
    md:scroll-mt-[80px] py-11 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Our Products</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          From pumps to metering cartridges, our hardware is built to deliver consistent lubrication in harsh
          industrial conditions.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[400px] group overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white p-4 text-center">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
