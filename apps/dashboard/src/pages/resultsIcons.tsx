function baseProps() {
  return {
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2.1,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
}

export function FilmIcon() {
  return (
    <svg {...baseProps()} strokeWidth={2}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M7 4v16M17 4v16M3 12h18" />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 6.5 18 12l-9 5.5z" />
    </svg>
  )
}

export function TrendUpIcon() {
  return (
    <svg {...baseProps()} strokeWidth={2.2}>
      <path d="M3 16.5 9 10l4 4 7-7.5" />
      <path d="M16 6.5h4v4" />
    </svg>
  )
}

export function UsersIcon() {
  return (
    <svg {...baseProps()}>
      <path d="M16 19v-1.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 17.4V19" />
      <circle cx="9.5" cy="7.5" r="3.3" />
      <path d="M21 19v-1.6a3.4 3.4 0 0 0-2.6-3.3M15.5 4.4a3.3 3.3 0 0 1 0 6.3" />
    </svg>
  )
}

export function CalendarIcon() {
  return (
    <svg {...baseProps()}>
      <rect x="3.2" y="5" width="17.6" height="15.5" rx="2.4" />
      <path d="M3.2 10h17.6M8 3v4M16 3v4" />
    </svg>
  )
}

export function HeartIcon() {
  return (
    <svg {...baseProps()}>
      <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3C19.5 15.4 12 20 12 20Z" />
    </svg>
  )
}

export function BoltIcon() {
  return (
    <svg {...baseProps()}>
      <path d="M13 3 5 13.6h5.6L11 21l8-10.6h-5.6z" />
    </svg>
  )
}

export function CompassIcon() {
  return (
    <svg {...baseProps()}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="m14.8 9.2-1.6 4.1-4.1 1.6 1.6-4.1z" />
    </svg>
  )
}

export function FlameIcon() {
  return (
    <svg {...baseProps()}>
      <path d="M12 21c3.6 0 6-2.4 6-5.6 0-3.8-3.4-5.3-3-9.4-2.6.9-4 3-4 5.2-1.1-.5-1.6-1.6-1.6-2.8C7.6 10 6 12 6 15.4 6 18.6 8.4 21 12 21Z" />
    </svg>
  )
}

export function GiftIcon() {
  return (
    <svg {...baseProps()}>
      <rect x="3" y="6.5" width="18" height="11" rx="2.2" />
      <path d="M3 10h18M8 6.5 6.4 3.4M13 6.5 11.4 3.4M18 6.5 16.4 3.4" />
    </svg>
  )
}

export function ThumbsUpIcon() {
  return (
    <svg {...baseProps()}>
      <path d="M8.5 21V10M3 12.4v6.4A2.2 2.2 0 0 0 5.2 21h11.3a2.2 2.2 0 0 0 2.2-1.8l1.2-6.4A1.8 1.8 0 0 0 18.1 10H13l.8-4a2.3 2.3 0 0 0-2.2-2.9L8.5 10" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg {...baseProps()}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.3V12l3.1 1.9" />
    </svg>
  )
}
