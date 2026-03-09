'use client'

import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrameId: number
    
    const updateMousePosition = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return mousePosition
}
