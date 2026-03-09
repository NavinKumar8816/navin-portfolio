'use client'

import { useRef, useEffect, useState } from 'react'

interface TechGridProps {
  technologies: string[]
  className?: string
}

export function TechGrid3D({ technologies, className = '' }: TechGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    containerRef.current?.addEventListener('mousemove', handleMouseMove)
    return () => containerRef.current?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const cols = 4
  const rows = Math.ceil(technologies.length / cols)

  return (
    <div
      ref={containerRef}
      className={`grid gap-4 perspective ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        perspective: '1000px',
      }}
    >
      {technologies.map((tech, idx) => {
        const row = Math.floor(idx / cols)
        const col = idx % cols
        const centerX = col - cols / 2
        const centerY = row - rows / 2
        
        const rotateX = (mousePos.y - 0.5) * 20 + centerY * 5
        const rotateY = (mousePos.x - 0.5) * 20 + centerX * 5

        return (
          <div
            key={idx}
            className="h-32 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-magenta-900/10 to-purple-900/20 flex items-center justify-center cursor-pointer group overflow-hidden relative"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
              transition: 'transform 0.1s ease-out',
              borderColor: `hsl(${300 + idx * 10}, 100%, 50%, 0.5)`,
            }}
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-magenta-500/20 group-hover:via-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
            
            {/* Tech name */}
            <span className="relative z-10 text-sm font-bold text-cyan-300 group-hover:text-magenta-300 transition-colors duration-300">
              {tech}
            </span>

            {/* Border glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg border border-magenta-500/50 transition-opacity duration-300" />
          </div>
        )
      })}
    </div>
  )
}
