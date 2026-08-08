import { useId } from 'react'
import './CircularProgress.css'

interface CircularProgressProps {
  percent: number
  label: string
  done?: boolean
  size?: number
}

const RADIUS = 21
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

// Radial ring with a label in the center — used for any long-running mocked
// or real background task (upload, export, processing).
export function CircularProgress({ percent, label, done = false, size = 52 }: CircularProgressProps) {
  const gradientId = `circular-progress-gradient-${useId().replace(/:/g, '')}`
  const offset = CIRCUMFERENCE * (1 - Math.min(100, Math.max(0, percent)) / 100)

  return (
    <div className={`circular-progress${done ? ' circular-progress--done' : ''}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 52 52" width={size} height={size} className="circular-progress__ring" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF2E63" />
            <stop offset="0.5" stopColor="#FF6B3D" />
            <stop offset="1" stopColor="#FFB13D" />
          </linearGradient>
        </defs>
        <circle className="circular-progress__track" cx="26" cy="26" r={RADIUS} fill="none" strokeWidth="4" />
        <circle
          cx="26"
          cy="26"
          r={RADIUS}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          stroke={`url(#${gradientId})`}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="circular-progress__arc"
        />
      </svg>
      <span className="circular-progress__label">{label}</span>
    </div>
  )
}
