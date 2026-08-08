import type { ReactNode } from 'react'
import '../styles/app-shell.css'

interface GradientTextProps {
  children: ReactNode
}

// Inline accent-gradient text, e.g. the highlighted word in a page heading.
export function GradientText({ children }: GradientTextProps) {
  return <span className="gradient-text">{children}</span>
}
