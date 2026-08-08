import type { ReactNode } from 'react'
import './IconBadge.css'

export type IconBadgeVariant = 'accent' | 'rose' | 'amber' | 'emerald'
export type IconBadgeSize = 'sm' | 'md' | 'lg'

interface IconBadgeProps {
  children: ReactNode
  variant?: IconBadgeVariant
  size?: IconBadgeSize
}

// Rounded gradient glyph used across stat tiles, section headings, and cards
// wherever a colored icon accent is needed.
export function IconBadge({ children, variant = 'accent', size = 'md' }: IconBadgeProps) {
  return <span className={`icon-badge icon-badge--${variant} icon-badge--${size}`}>{children}</span>
}
