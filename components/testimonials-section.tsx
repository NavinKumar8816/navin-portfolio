'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedGridBackground } from './animations/animated-grid-background'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Startup Founder',
      content: 'Navin turned our AI product vision into reality. The attention to detail and technical expertise was exceptional.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'Tech Lead',
      content: 'Working with Navin was seamless. Great communication, rapid iteration, and delivered on time.',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      role: 'Product Manager',
      content: 'The quality of code and architectural decisions were top-notch. Highly recommend for any AI/ML project.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="testimonials" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground className="opacity-30" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
              className="glass-card-hover p-8 rounded-xl flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-white/10">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
