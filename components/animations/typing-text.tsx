'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
  texts: string[]
  speed?: number
  delayBetween?: number
  className?: string
  cursorClassName?: string
}

export function TypingText({
  texts,
  speed = 50,
  delayBetween = 2000,
  className = '',
  cursorClassName = 'w-1 h-10 bg-accent ml-2',
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timer: NodeJS.Timeout

    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } else if (charIndex === currentText.length && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, delayBetween)
    } else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, displayText, textIndex, texts, speed, delayBetween])

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(blinkTimer)
  }, [])

  return (
    <div className="flex items-center min-h-[2.5rem] max-h-[2.5rem] overflow-hidden">
      <span className={className}>{displayText}</span>
      {showCursor && <div className={`inline-block animate-pulse ${cursorClassName}`} />}
    </div>
  )
}
