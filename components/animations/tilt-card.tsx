'use client'

import { useTilt } from '@/hooks/use-tilt'
import { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const tilt = useTilt({ scale: 1.04, speed: 500, max: 10 })

  return (
    <div
      ref={tilt.ref}
      className={`relative rounded-xl ${className}`}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div
        style={tilt.style}
        className="pointer-events-auto backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-primary/50 rounded-xl"
      >
        {children}
      </div>
    </div>
  )
}