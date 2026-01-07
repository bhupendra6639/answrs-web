import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-[70px]
    md:scroll-mt-[100px]relative py-12 md:py-16 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80">Your Name</Label>
                <Input id="name" placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Your Email</Label>
                <Input id="email" type="email" placeholder="Your Email" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
                <Input id="phone" placeholder="Phone Number" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white/80">Subject</Label>
                <Input id="subject" placeholder="Subject" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message" className="text-white/80">Your Message</Label>
                <Textarea id="message" placeholder="Your Message" className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-11 md:h-12 font-semibold">Send Message</Button>
              </div>
            </div>
          </div>

          <div className="text-white">
            <p className="text-xs tracking-widest uppercase text-primary font-bold mb-2">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Connect With Our Expertise
              <br /> Anytime Today
            </h2>
            <p className="text-white/80 max-w-xl mb-8">
              Have a question or need a consultation? Our team of experts is ready to help you find the perfect solution for your industrial needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-card">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Visit Us</p>
                  <p className="font-medium">258 Main Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-card">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Call Us</p>
                  <p className="font-medium">+123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-card">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email Us</p>
                  <p className="font-medium">info@indro.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <img src="/images/yy.jpeg" alt="Customer" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="italic text-white/80 text-sm">“Exceptional service and expertise!”</p>
                <p className="text-sm font-semibold">Sarah Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
