'use client'

import { AboutSection } from '@/components/about-section'
import { CursorGlow } from '@/components/animations/cursor-glow'
import { ParticleBackground } from '@/components/animations/particle-background'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'
import { PageTransition } from '@/components/page-transition'
import { ProcessSection } from '@/components/process-section'
import { ProjectsSection } from '@/components/projects-section'
import { ServicesSection } from '@/components/services-section'
import { SkillsSection } from '@/components/skills-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main className="page-slide-in">
        <PageTransition>
          <div className="animate-section-fade">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ServicesSection />
            <ProcessSection />
            <TestimonialsSection />
            <ContactSection />
          </div>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
