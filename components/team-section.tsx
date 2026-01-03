"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  const team = [
    {
      name: "NASHID MARTINES",
      role: "Director",
      image: "/images/team-expert-1.jpg",
    },
    {
      name: "KONNE BACKFIELD",
      role: "Manager",
      image: "/images/team-expert-2.jpg",
    },
    {
      name: "HACKSON WILLINGHAM",
      role: "Engineer",
      image: "/images/team-expert-3.jpg",
    },
    {
      name: "KONNE BACKFIELD",
      role: "Designer",
      image: "/images/team-expert-4.jpg",
    },
  ]

  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Meet The Team</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard
          dummy text ever since the been when an unknown printer.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative h-80 flex bg-gray-100 overflow-hidden shadow-sm">
                <div className="w-12 bg-primary flex items-center justify-center">
                  <span className="rotate-[-90deg] whitespace-nowrap text-white text-xs font-bold tracking-widest uppercase">
                    {member.name}
                  </span>
                </div>
                <div className="flex-1 relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
