"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const posts = [
    {
      title: "Seven Doubts You Should",
      date: "10 AUG 2016",
      author: "JACK",
      image: "/images/blog-lubrication-1.jpg",
    },
    {
      title: "The Shocking Revelation",
      date: "11 AUG 2016",
      author: "ZACHARY",
      image: "/images/blog-lubrication-2.jpg",
    },
    {
      title: "The Story Of Industry",
      date: "12 AUG 2016",
      author: "CHARLOTTE",
      image: "/images/blog-lubrication-3.jpg",
    },
  ]

  return (
    <section id="blog" className="scroll-mt-[70px]
    md:scroll-mt-[80px] py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Latest Blog</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard
          dummy text ever since the been when an unknown printer.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group"
            >
              <div className="relative h-64 overflow-hidden mb-6">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-primary mb-3 uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="text-gray-300">|</span>
                <span>BY {post.author}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true.
              </p>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                READ MORE <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
