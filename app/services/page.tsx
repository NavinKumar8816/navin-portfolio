'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServicesHero } from '@/components/services/services-hero'
import { ServiceCards } from '@/components/services/service-cards'
import { PricingSection } from '@/components/services/pricing-section'
import { BookingSection } from '@/components/services/booking-section'
import { AnimatedGridBackground } from '@/components/animations/animated-grid-background'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
          <AnimatedGridBackground className="opacity-30" />
          <ServicesHero />
        </section>

        {/* Services Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <AnimatedGridBackground className="opacity-20" />
          <ServiceCards />
        </section>

        {/* Pricing Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <AnimatedGridBackground className="opacity-20" />
          <PricingSection />
        </section>

        {/* Booking Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <AnimatedGridBackground className="opacity-20" />
          <BookingSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
