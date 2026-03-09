'use client'

import { useState, useEffect, useRef } from 'react'

interface ParallaxValues {
  y: number
}

export function useParallax(speed: number = 0.5): ParallaxValues {
  const [parallax, setParallax] = useState<ParallaxValues>({ y: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const elementTop = elementRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      
      // Calculate parallax offset based on element position
      const offset = (elementTop - windowHeight) * speed
      setParallax({ y: offset })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ...parallax, ref: elementRef } as ParallaxValues & { ref: React.RefObject<HTMLDivElement> }
}
