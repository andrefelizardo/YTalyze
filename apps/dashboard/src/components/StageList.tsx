import { CheckIcon } from './icons'
import './StageList.css'

export type StageStatus = 'pending' | 'active' | 'done'

export interface Stage {
  label: string
}

interface StageListProps {
  stages: Stage[]
  statuses: StageStatus[]
}

// Ordered checklist for any mocked or real multi-step background process.
export function StageList({ stages, statuses }: StageListProps) {
  return (
    <ol className="stage-list">
      {stages.map((stage, index) => {
        const status = statuses[index] ?? 'pending'
        return (
          <li key={stage.label} className="stage-list__item" data-status={status}>
            <span className="stage-list__dot">{status === 'done' && <CheckIcon strokeWidth={3.2} />}</span>
            <span className="stage-list__label">{stage.label}</span>
            <span className="stage-list__status">{status === 'active' ? 'Working' : status === 'done' ? 'Done' : ''}</span>
          </li>
        )
      })}
    </ol>
  )
}
