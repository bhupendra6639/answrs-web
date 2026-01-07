"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectsShowcase() {
  const projects = [
    {
      title: "Power and Energy",
      image: "/images/project-power-energy-lubrication.jpg",
    },
    {
      title: "Oil and Gas",
      image: "/images/project-oil-gas-systems.jpg",
    },
    {
      title: "Agricultural Engineering",
      image: "/images/project-agricultural-machinery.jpg",
    },
    {
      title: "Rocky Forge Refinary",
      image: "/images/project-refinery-lubrication.jpg",
    },
  ]

  return (
    <section id="projects" className="scroll-mt-[80px]
    md:scroll-mt-[80px] py-11 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Our Project</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard
          dummy text ever since the been when an unknown printer.
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
