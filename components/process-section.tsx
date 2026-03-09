'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Zap, Code2, Rocket } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Idea',
      description: 'Understand your vision, requirements, and goals for the project.',
    },
    {
      icon: Zap,
      title: 'Strategy',
      description: 'Plan the architecture, technology stack, and implementation approach.',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Build the product with clean code, best practices, and iterative feedback.',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploy to production and provide support for a successful launch.',
    },
  ]

  return (
    <section id="process" className="relative py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

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
            <span className="gradient-text">My Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            How I work with clients to bring ideas to life
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className={`flex gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card-hover p-8 rounded-xl"
                    >
                      <h3 className="text-2xl font-bold mb-3 gradient-text">{step.title}</h3>
                      <p className="text-gray-400 text-base leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Step Icon - Center */}
                  <div className="flex-shrink-0 z-10 hidden md:flex">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative shadow-lg shadow-primary/50"
                    >
                      <Icon className="w-8 h-8 text-background" />
                      {/* Step number */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-bold text-sm">
                        {idx + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Step Icon */}
                  <div className="md:hidden flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/50"
                    >
                      <Icon className="w-7 h-7 text-background" />
                    </motion.div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
