'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ServicesHero() {
  return (
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <motion.span
            className="inline-block gradient-text neon-glow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Turn Your Idea
          </motion.span>
          <br />
          <span className="text-foreground">Into Reality</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          I transform your vision into powerful AI-driven products that solve real problems and drive growth
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="#pricing">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient-neon flex items-center gap-2 group"
            >
              View Pricing Plans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="#booking">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon-glow flex items-center gap-2 group hover-lift"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
