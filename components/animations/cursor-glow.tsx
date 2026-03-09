'use client'

import { useMousePosition } from '@/hooks/use-mouse-position'
import { useEffect, useState } from 'react'

export function CursorGlow() {
  const { x, y } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)
  const [clickEffect, setClickEffect] = useState({ active: false, x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleClick = (e: MouseEvent) => {
      setClickEffect({ active: true, x: e.clientX, y: e.clientY })
      setTimeout(() => setClickEffect({ active: false, x: 0, y: 0 }), 600)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor glow - larger and more prominent */}
      <div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.6) 0%, rgba(255, 0, 110, 0.3) 35%, rgba(0, 217, 255, 0.1) 70%, transparent 100%)',
          filter: 'blur(25px)',
          transition: 'all 0.1s ease-out',
          boxShadow: '0 0 40px rgba(0, 217, 255, 0.4), 0 0 80px rgba(255, 0, 110, 0.2)',
        }}
      />

      {/* Secondary glow layer - cyan accent */}
      <div
        className="pointer-events-none fixed z-49 rounded-full mix-blend-screen"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(6, 214, 255, 0.8) 0%, transparent 80%)',
          filter: 'blur(15px)',
          transition: 'all 0.15s ease-out',
          opacity: 0.6,
        }}
      />

      {/* Tertiary glow layer - magenta accent */}
      <div
        className="pointer-events-none fixed z-48 rounded-full mix-blend-screen"
        style={{
          left: `${x - 20}px`,
          top: `${y - 20}px`,
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, rgba(255, 0, 110, 0.6) 0%, transparent 70%)',
          filter: 'blur(10px)',
          transition: 'all 0.2s ease-out',
          opacity: 0.5,
        }}
      />

      {/* Click effect - burst animation */}
      {clickEffect.active && (
        <div
          className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
          style={{
            left: `${clickEffect.x}px`,
            top: `${clickEffect.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '30px',
            height: '30px',
            background: 'radial-gradient(circle, rgba(0, 217, 255, 1) 0%, transparent 70%)',
            filter: 'blur(8px)',
            animation: 'pulse-burst 0.6s ease-out forwards',
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)',
          }}
        />
      )}

      <style jsx>{`
        @keyframes pulse-burst {
          0% {
            width: 30px;
            height: 30px;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
