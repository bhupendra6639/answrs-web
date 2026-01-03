"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function AboutStory() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] border-[15px] border-gray-50"
          >
            <Image
              src="/images/about-production-machinery-workers.jpg"
              alt="Industrial workers"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary px-4 py-1 text-[10px] font-bold text-white mb-6 uppercase tracking-widest">
              OUR STORY
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Factory <br />
              Solutions <span className="italic font-script text-primary lowercase">since 1955</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium mb-6">
              We are committed to provide safe <br />
              industrial solutions to many factories.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard printer took a galley of type and scrambled it to make a type specimen book. Lorem
              ipsum is simply dummy text of the printing and typesetting Factory.
            </p>

            <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-6 h-auto font-bold text-xs tracking-widest uppercase">
              READ MORE
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
