'use client'

import { motion } from 'framer-motion'
import { Code2, Lightbulb, Zap } from 'lucide-react'
import { AnimatedGridBackground } from './animations/animated-grid-background'

export function AboutSection() {
  const expertise = [
    {
      icon: Zap,
      title: 'AI Engineering',
      description: 'Expertise in building intelligent systems with LLMs, RAG architectures, and AI automation.',
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern tech stacks and best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Product Innovation',
      description: 'Turning complex AI concepts into practical, user-friendly products.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground className="opacity-30" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group enhanced-hover-lift"
              >
                <div className="glass-card-hover p-8 rounded-xl relative overflow-hidden animate-card-glow">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 relative z-10 neon-glow-lg"
                    >
                      <Icon className="w-6 h-6 text-background" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 rounded-xl border border-white/10 mb-12"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm an AI Engineer with a passion for building innovative AI-powered products. My journey spans from developing intelligent systems using cutting-edge LLM technologies to architecting full-stack solutions that scale.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Currently focused on developing AI products that leverage RAG systems, agentic AI, and prompt engineering to create real-world impact. I believe in writing clean, maintainable code and delivering solutions that solve actual problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
