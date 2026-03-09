'use client'

import { useTilt } from '@/hooks/use-tilt'
import { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const tilt = useTilt({ scale: 1.08, speed: 1000, max: 15 })

  return (
    <div
      ref={tilt.ref}
      className={`backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-xl relative ${className}`}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      {/* Glowing edge effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-accent/20 group-hover:to-purple-500/20" />
      </div>
      {children}
    </div>
  )
}
