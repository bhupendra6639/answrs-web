import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { RedBanner } from "@/components/red-banner"
import { IndustryTabs } from "@/components/industry-tabs"
import { AboutStory } from "@/components/about-story"
import { ServicesGrid } from "@/components/services-grid"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { TeamSection } from "@/components/team-section"
import { Testimonials } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <RedBanner />
      <IndustryTabs />
      <AboutStory />
      <ServicesGrid />
      <ProjectsShowcase />
      <TeamSection />
      <Testimonials />
      <BlogSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
