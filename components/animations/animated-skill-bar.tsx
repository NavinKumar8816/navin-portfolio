'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSkillBarProps {
  label: string
  percentage: number
  delay?: number
}

export function AnimatedSkillBar({ label, percentage, delay = 0 }: AnimatedSkillBarProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <motion.span
          className="text-sm font-semibold text-accent neon-glow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden border border-accent/20">
        <motion.div
          className="h-full bg-gradient-to-r from-accent via-cyan-400 to-purple-500 rounded-full shadow-lg shadow-accent/50"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            delay: delay + 0.2,
            duration: 1.5,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  )
}
