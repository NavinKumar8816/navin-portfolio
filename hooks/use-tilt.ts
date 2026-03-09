'use client'

import { useState, useRef, useCallback } from 'react'

interface TiltValues {
  rotateX: number
  rotateY: number
}

interface TiltOptions {
  scale?: number
  speed?: number
  max?: number
}

export function useTilt(options: TiltOptions = {}) {
  const { scale = 1.05, speed = 1000, max = 25 } = options
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * max
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * max

    setTilt({
      rotateX: -rotateX,
      rotateY: rotateY,
    })
  }, [max])

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  return {
    ref: elementRef,
    style: {
      transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${scale})`,
      transition: `transform 0.1s linear`,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }
}
