import type { ReactNode } from 'react'
import './Eyebrow.css'

interface EyebrowProps {
  children: ReactNode
}

// Small rule + label used above a page's main heading to mark progress
// ("Step 1 of 2", "Step 2 of 2 · Rewind ready").
export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="eyebrow">
      <span className="eyebrow__rule" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
