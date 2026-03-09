'use client'

import { useEffect, useState } from 'react'

interface CodeSnippetProps {
  code: string
  language?: string
  className?: string
  animated?: boolean
  speed?: number
}

export function CodeSnippet({
  code,
  language = 'typescript',
  className = '',
  animated = true,
  speed = 30,
}: CodeSnippetProps) {
  const [displayCode, setDisplayCode] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (!animated) {
      setDisplayCode(code)
      return
    }

    let timer: NodeJS.Timeout
    if (charIndex < code.length) {
      timer = setTimeout(() => {
        setDisplayCode(code.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [charIndex, code, animated, speed])

  const syntaxHighlight = (code: string) => {
    const keywords = ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type', 'import', 'export', 'async', 'await']
    const strings = code.match(/"[^"]*"|'[^']*'|`[^`]*`/g) || []
    const comments = code.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []

    let highlighted = code
    
    comments.forEach(comment => {
      highlighted = highlighted.replace(comment, `<span class="text-green-400">${comment}</span>`)
    })
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g')
      highlighted = highlighted.replace(regex, `<span class="text-magenta-400">${keyword}</span>`)
    })
    
    strings.forEach(str => {
      highlighted = highlighted.replace(str, `<span class="text-cyan-300">${str}</span>`)
    })

    return highlighted
  }

  return (
    <pre className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg p-6 overflow-auto border border-cyan-500/30 backdrop-blur-sm ${className}`}>
      <code
        className="text-sm font-mono text-foreground"
        dangerouslySetInnerHTML={{
          __html: syntaxHighlight(displayCode),
        }}
      />
      {animated && charIndex < code.length && (
        <span className="animate-pulse text-cyan-400 text-lg">▌</span>
      )}
    </pre>
  )
}
