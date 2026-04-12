'use client'

import { motion } from 'framer-motion'

interface FloatingBlobsProps {
  count?: number
  className?: string
}

export function FloatingBlobs({ count = 3, className = '' }: FloatingBlobsProps) {
  const blobs = Array.from({ length: count }, (_, i) => ({
    id: i,
    duration: 8 + i * 2,
    delay: i * 0.5,
    size: 200 + i * 100,
    colors: [
      'from-cyan-500/30 to-blue-500/20',
      'from-purple-500/30 to-pink-500/20',
      'from-indigo-500/30 to-cyan-500/20',
    ],
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full blur-3xl bg-gradient-to-r ${blob.colors[blob.id % 3]} opacity-40 pointer-events-none`}
          style={{
            width: blob.size,
            height: blob.size,
            left: `${20 + blob.id * 25}%`,
            top: `${10 + blob.id * 20}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
