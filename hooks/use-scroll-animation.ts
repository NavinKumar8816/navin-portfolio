'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Optional: stop observing after animation triggers
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isInView }
}
