'use client'

import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function GlitchText({ text, className = '', intensity = 'medium' }: GlitchTextProps) {
  const glitchAmount = intensity === 'low' ? 2 : intensity === 'medium' ? 4 : 6
  
  const glitchVariants = {
    normal: {
      textShadow: 'none',
      transform: 'translate(0)',
    },
    glitch: {
      textShadow: [
        `${glitchAmount}px 0 #ff006e, -${glitchAmount}px 0 #00d9ff`,
        `-${glitchAmount}px 0 #ff006e, ${glitchAmount}px 0 #00d9ff`,
        `${glitchAmount}px 0 #00d9ff, -${glitchAmount}px 0 #ff006e`,
        `0 0 #ff006e, 0 0 #00d9ff`,
      ],
      transform: [
        `translate(${glitchAmount}px, ${glitchAmount}px)`,
        `translate(-${glitchAmount}px, -${glitchAmount}px)`,
        `translate(${glitchAmount}px, -${glitchAmount}px)`,
        `translate(-${glitchAmount}px, ${glitchAmount}px)`,
        'translate(0, 0)',
      ],
    },
  }

  return (
    <motion.div
      variants={glitchVariants}
      initial="normal"
      animate="glitch"
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut',
      }}
      className={`inline-block ${className}`}
      style={{ position: 'relative' }}
    >
      {text}
    </motion.div>
  )
}
