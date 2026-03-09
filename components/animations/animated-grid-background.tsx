'use client'

import { motion } from 'framer-motion'

interface AnimatedGridBackgroundProps {
  className?: string
}

export function AnimatedGridBackground({ className = '' }: AnimatedGridBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main grid */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06d6ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Vertical lines */}
        {Array.from({ length: 13 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="800"
            stroke="url(#gridGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
        
        {/* Horizontal lines */}
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 100}
            x2="1200"
            y2={i * 100}
            stroke="url(#gridGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3,
              delay: i * 0.15,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.svg>

      {/* Animated glow lines */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 214, 255, 0.3) 50%, transparent 100%)',
        }}
        animate={{
          x: [-1200, 1200],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
