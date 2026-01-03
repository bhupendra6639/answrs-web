"use client"

import { useState } from "react"
import { Gauge, Droplets, Settings, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const industries = [
  {
    id: "lubrication",
    title: "Lubrication Systems",
    icon: <Droplets className="w-8 h-8" />,
  },
  {
    id: "automation",
    title: "Production Automation",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    id: "maintenance",
    title: "Predictive Maintenance",
    icon: <Gauge className="w-8 h-8" />,
  },
  {
    id: "engineering",
    title: "Custom Engineering",
    icon: <Wrench className="w-8 h-8" />,
  },
]

export function IndustryTabs() {
  const [activeTab, setActiveTab] = useState("lubrication")

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveTab(industry.id)}
              className={cn(
                "relative flex flex-col items-center justify-center p-8 lg:p-10 transition-all duration-300 border-2 group overflow-hidden",
                activeTab === industry.id
                  ? "bg-primary text-white border-primary shadow-2xl scale-105 z-10"
                  : "bg-white text-gray-900 border-gray-200 hover:border-primary/30 hover:shadow-lg",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-500",
                  activeTab === industry.id && "scale-100",
                )}
              />

              <div
                className={cn(
                  "mb-4 transition-all duration-300 relative z-10 transform group-hover:scale-110",
                  activeTab === industry.id ? "text-white" : "text-primary",
                )}
              >
                {industry.icon}
              </div>

              <span
                className={cn(
                  "font-bold text-sm uppercase tracking-wider text-center relative z-10 leading-tight",
                  activeTab === industry.id ? "text-white" : "text-gray-900",
                )}
              >
                {industry.title}
              </span>

              {activeTab === industry.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
