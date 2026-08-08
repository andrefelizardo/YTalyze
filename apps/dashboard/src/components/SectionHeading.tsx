import type { ReactNode } from 'react'
import { IconBadge } from './IconBadge'
import type { IconBadgeVariant } from './IconBadge'
import './SectionHeading.css'

interface SectionHeadingProps {
  icon: ReactNode
  iconVariant?: IconBadgeVariant
  title: string
  description: string
}

// Icon + title + description row used to introduce a page section.
export function SectionHeading({ icon, iconVariant, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <IconBadge variant={iconVariant} size="lg">
        {icon}
      </IconBadge>
      <div>
        <h2 className="section-heading__title">{title}</h2>
        <p className="section-heading__description">{description}</p>
      </div>
    </div>
  )
}
