'use client'

import { motion } from 'framer-motion'
import { Zap, Rocket, Cpu, Code2, ArrowRight } from 'lucide-react'
import { AnimatedGridBackground } from './animations/animated-grid-background'

export function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: 'AI Product Development',
      description: 'Build AI-powered SaaS products with cutting-edge LLM technology, RAG systems, and intelligent automation.',
      features: ['Custom LLM Integration', 'RAG Architecture', 'AI Automation'],
    },
    {
      icon: Rocket,
      title: 'Startup MVP Development',
      description: 'Turn your startup ideas into real, working products with rapid prototyping and full-stack development.',
      features: ['Quick Turnaround', 'Scalable Stack', 'Production Ready'],
    },
    {
      icon: Zap,
      title: 'AI Automation Systems',
      description: 'Automate business workflows and processes using AI agents, LLMs, and intelligent automation.',
      features: ['Workflow Automation', 'AI Agents', 'Cost Optimization'],
    },
    {
      icon: Code2,
      title: 'Full Stack Web Apps',
      description: 'Build scalable, modern web applications with best practices, clean code, and excellent UX.',
      features: ['Modern Stack', 'Responsive Design', 'Performance'],
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
    <section id="services" className="relative py-20 px-6 overflow-hidden">
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
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What I can help you build and achieve
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
                className="glass-card-hover p-8 rounded-xl group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow"
                >
                  <Icon className="w-7 h-7 text-background" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="btn-primary flex items-center gap-2 mx-auto">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
