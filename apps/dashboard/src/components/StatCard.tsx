import type { CSSProperties, ReactNode } from 'react'
import { IconBadge } from './IconBadge'
import type { IconBadgeVariant } from './IconBadge'
import './StatCard.css'

interface StatCardProps {
  label: string
  value: ReactNode
  unit?: string
  sub: string
  icon: ReactNode
  iconVariant?: IconBadgeVariant
  tint: string
}

// Headline metric tile — a big number with a colored icon accent and a
// muted caption underneath. Used for any at-a-glance stats grid.
export function StatCard({ label, value, unit, sub, icon, iconVariant, tint }: StatCardProps) {
  return (
    <div className="stat-card" style={{ '--stat-card-tint': tint } as CSSProperties}>
      <div className="stat-card__top">
        <span className="stat-card__label">{label}</span>
        <IconBadge variant={iconVariant}>{icon}</IconBadge>
      </div>
      <div className="stat-card__value">
        {value}
        {unit && <small>{unit}</small>}
      </div>
      <div className="stat-card__sub">{sub}</div>
    </div>
  )
}
