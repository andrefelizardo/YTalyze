import { useId } from 'react'

interface YtalyzeMarkProps {
  size?: number
  className?: string
}

// Adapted from home/public/images/ytalyze-mark-*.svg: the outer glyph now
// uses currentColor so a single asset can serve both themes.
export function YtalyzeMark({ size = 64, className }: YtalyzeMarkProps) {
  const uid = useId().replace(/:/g, '')
  const gradientId = `ytalyze-mark-gradient-${uid}`
  const outerClipId = `ytalyze-mark-outer-${uid}`
  const bandClipId = `ytalyze-mark-band-${uid}`

  return (
    <svg
      className={className}
      width={size}
      height={(size * 122) / 104}
      viewBox="0 0 104 122"
      role="img"
      aria-label="YTalyze"
    >
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="40" y1="52" x2="64" y2="78">
          <stop offset="0" stopColor="#FF2E63" />
          <stop offset="0.5" stopColor="#FF6B3D" />
          <stop offset="1" stopColor="#FFB13D" />
        </linearGradient>
        <clipPath id={outerClipId}>
          <rect x="-40" y="-40" width="200" height="92" />
          <rect x="-40" y="78" width="200" height="120" />
        </clipPath>
        <clipPath id={bandClipId}>
          <rect x="-40" y="52" width="420" height="26" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${outerClipId})`}>
        <g fill="none" stroke="currentColor" strokeWidth="11.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="13" y1="17" x2="91" y2="17" />
          <line x1="13" y1="17" x2="52" y2="66" />
          <line x1="91" y1="17" x2="52" y2="66" />
          <line x1="52" y1="66" x2="52" y2="108" />
        </g>
      </g>
      <g clipPath={`url(#${bandClipId})`} transform="translate(17,0)">
        <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="11.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="13" y1="17" x2="91" y2="17" />
          <line x1="13" y1="17" x2="52" y2="66" />
          <line x1="91" y1="17" x2="52" y2="66" />
          <line x1="52" y1="66" x2="52" y2="108" />
        </g>
      </g>
    </svg>
  )
}
