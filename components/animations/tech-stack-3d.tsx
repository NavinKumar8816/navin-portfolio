'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface TechStackProps {
  technologies: Array<{ name: string; icon: string }>
  className?: string
}

export function TechStack3D({ technologies, className = '' }: TechStackProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientY - rect.top - rect.height / 2) * 0.05
      const y = (e.clientX - rect.left - rect.width / 2) * 0.05
      setRotation({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    animate: {
      rotateX: rotation.x,
      rotateY: rotation.y,
      transition: { type: 'spring', stiffness: 50, damping: 30 },
    },
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-80 flex items-center justify-center perspective ${className}`}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        variants={containerVariants}
        animate="animate"
        className="relative w-64 h-64"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {technologies.map((tech, idx) => {
          const angle = (idx / technologies.length) * Math.PI * 2
          const x = Math.cos(angle) * 120
          const z = Math.sin(angle) * 120

          return (
            <motion.div
              key={idx}
              className="absolute w-24 h-24 flex items-center justify-center rounded-lg bg-gradient-to-br from-magenta-500/20 via-cyan-500/10 to-purple-500/20 border border-cyan-500/40 backdrop-blur-sm cursor-pointer group"
              style={{
                x,
                z,
                left: '50%',
                top: '50%',
                marginLeft: '-3rem',
                marginTop: '-3rem',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)',
                borderColor: 'rgba(255, 0, 110, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <span className="text-4xl mb-2 block group-hover:animate-bounce">{tech.icon}</span>
                <span className="text-xs text-cyan-300 font-bold">{tech.name}</span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
