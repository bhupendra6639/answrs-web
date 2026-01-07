import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-widest relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="#about" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Blog
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Services
                </Link>
              </li>
              <li>
                <Link href="#privacy-policy" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Link */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-widest relative inline-block">
              Useful Link
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="#help-desk" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Help Desk
                </Link>
              </li>
              <li>
                <Link href="#shop" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Shop
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Contact
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Portfolio
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-card transition-colors flex items-center gap-2">
                  <span className="text-card">›</span> Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-widest relative inline-block">
              Contact us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <MapPin className="w-5 h-5 text-card group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-300 mb-1">ADDRESS</p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    demo address #8901 Marmora Road Chi Minh City, Vietnam
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Phone className="w-5 h-5 text-card group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-300 mb-1">PHONE</p>
                  <p className="text-xs leading-relaxed text-gray-500">0800-123456 (24/7 Support Line)</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Mail className="w-5 h-5 text-card group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-300 mb-1">EMAIL</p>
                  <p className="text-xs leading-relaxed text-gray-500">info@example.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-widest relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed">
              Stay updated with our latest industrial solutions and lubrication technology advancements.
            </p>
            <div className="relative mb-8 group">
              <input
                type="email"
                placeholder="Your Email Id"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-16 text-sm focus:outline-none focus:border-primary transition-colors group-hover:border-white/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary px-4 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-[2px]">
          <p>Copyright © 2026 DesignZone. all rights reserved.</p>
          <div className="flex gap-6">
            {["About", "Help Desk", "Privacy Policy"].map((text, i) => (
              <Link
                key={i}
                href={`#${text.toLowerCase().replace(" ", "-")}`}
                className="hover:text-primary transition-colors relative group"
              >
                {text}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="#home"
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#222] text-white flex items-center justify-center hover:bg-primary transition-colors z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </Link>
    </footer>
  )
}
