// "use client"
// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const CLIENT_LOGOS = [
//   "icn-clnt-1.jpg",
//   "icn-clnt-2.jpg",
//   "icn-clnt-3.jpg",
//   "icn-clnt-4.jpg",
//   "icn-clnt-5.jpg",
//   "icn-clnt-6.jpg",
//   "icn-clnt-7.jpg",
//   "icn-clnt-8.jpg",
//   "icn-clnt-9.jpg",
//   "icn-clnt-10.jpg",
//   "icn-clnt-11.jpg",
//   "icn-clnt-12.jpg",
// ]

// const VISIBLE_COUNT = 5

// export function PartnersSection() {
//   const [startIndex, setStartIndex] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)

//   const total = CLIENT_LOGOS.length

//   const next = () => {
//     setStartIndex((prev) => (prev + 1) % total)
//   }

//   const prev = () => {
//     setStartIndex((prev) => (prev - 1 + total) % total)
//   }

//   useEffect(() => {
//     if (isHovered) return

//     const interval = setInterval(() => {
//       setStartIndex((prev) => (prev + 1) % total)
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [isHovered, total])

//   const visibleLogos = Array.from({ length: VISIBLE_COUNT }, (_, idx) => {
//     const index = (startIndex + idx) % total
//     return CLIENT_LOGOS[index]
//   })

//   return (
//     <section className="py-24 bg-gray-50 overflow-hidden">
//       <div className="container mx-auto px-4 text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
//           We Work With Our Partners To Provide Project Perfection,
//         </h2>
//         <p className="text-primary font-bold text-2xl uppercase tracking-tighter">Join With Our Parnership.</p>
//       </div>
//       <div className="container mx-auto px-4 relative">
//         <div
//           className="flex items-center justify-between gap-8 border-y border-gray-200 py-12 overflow-hidden"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {visibleLogos.map((logo, idx) => (
//             <div
//               key={`${logo}-${idx}`}
//               className="flex-1 flex items-center justify-center hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//             >
//               <div className="w-40 h-16 flex items-center justify-center">
//                 <Image
//                   src={`/clients-images/${logo}`}
//                   alt={logo.replace("icn-clnt-", "Client ").replace(".jpg", "")}
//                   width={160}
//                   height={64}
//                   className="object-contain max-h-16"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={prev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           type="button"
//           onClick={next}
//           className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, } from "swiper/modules"
import "swiper/css"

const CLIENT_LOGOS = [
  "icn-clnt-1.jpg",
  "icn-clnt-2.jpg",
  "icn-clnt-3.jpg",
  "icn-clnt-4.jpg",
  "icn-clnt-5.jpg",
  "icn-clnt-6.jpg",
  "icn-clnt-7.jpg",
  "icn-clnt-8.jpg",
  "icn-clnt-9.jpg",
  "icn-clnt-10.jpg",
  "icn-clnt-11.jpg",
  "icn-clnt-12.jpg",
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          We Work With Our Partners To Provide Project Perfection,
        </h2>
        <p className="text-primary font-bold text-2xl uppercase tracking-tighter">
          Join With Our Partnership.
        </p>
      </div>

      {/* Swiper */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={40}
          speed={150}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // ✅ hover pause like your old logic
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className=" py-12"
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-40 h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/clients-images/${logo}`}
                  alt={`Client ${index + 1}`}
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
