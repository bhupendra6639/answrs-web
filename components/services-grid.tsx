"use client"

import { Cog, Construction, Container, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesGrid() {
  const services = [
    {
      title: "Agricultural Engineering",
      icon: <Cog className="w-10 h-10" />,
    },
    {
      title: "Petroleum Engineering",
      icon: <Construction className="w-10 h-10" />,
    },
    {
      title: "Material Engineering",
      icon: <Container className="w-10 h-10" />,
    },
    {
      title: "Power and Energy",
      icon: <Zap className="w-10 h-10" />,
    },
  ]

  return (
    <section id="services" className="scroll-mt-[65px]
    md:scroll-mt-[90px] py-14 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            We design and engineer lubrication solutions that keep your critical machinery running longer and safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
