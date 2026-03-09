'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { AnimatedGridBackground } from './animations/animated-grid-background'
import { FloatingBlobs } from './animations/floating-blobs'
import { GlitchText } from './animations/glitch-text'
import { TechGrid3D } from './animations/tech-grid-3d'
import { TypingText } from './animations/typing-text'

export function HeroSection() {
  const technologies = ['React', 'TypeScript', 'Node.js', 'Python', 'LLMs', 'RAG', 'AI/ML', 'Web3']

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Matrix Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
        <AnimatedGridBackground className="opacity-30" />
        <div className="absolute inset-0 glitch-bg" />
        <div className="absolute inset-0 holographic-scan opacity-20" />
      </div>
      
      {/* Floating Gradient Blobs */}
      <FloatingBlobs count={3} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 glass-card px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          >
            <div className="mb-4">
              <GlitchText text="AI ENGINEER" intensity="high" className="neon-glow-cyberpunk text-5xl md:text-7xl" />
            </div>
            <div className="mb-4">
              <span className="gradient-text-cyberpunk text-5xl md:text-6xl">& Full Stack Developer</span>
            </div>
            <div className="inline-block mt-4">
              <div className="text-sm md:text-lg text-cyan-300 font-mono">
                <span className="text-magenta-400">&gt;</span> Building intelligent systems
              </div>
            </div>
          </motion.h1>

          {/* Subheading with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <div className="text-lg md:text-xl text-cyan-200 leading-relaxed font-mono mb-8">
              <TypingText
                texts={[
                  'I build AI-powered products that turn ideas into reality',
                  'Specializing in RAG, LLMs, and production-grade systems',
                  'From concept to deployment, elite solutions for the future',
                  'lets build the future together',
                ]}
                speed={40}
                delayBetween={3000}
                className="text-magenta-300"
              />
            </div>
          </motion.div>

          {/* Interactive Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-16"
          >
            <TechGrid3D technologies={technologies} className="max-w-4xl mx-auto" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient-neon flex items-center gap-2 group btn-glow-pulse enhanced-hover-lift"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon-glow flex items-center gap-2 group hover-lift enhanced-hover-lift btn-glow-pulse"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-8 justify-center text-sm text-gray-400 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>AI/ML Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Available for Projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
