import './ProgressBar.css'

interface ProgressBarProps {
  percent: number
  indeterminate?: boolean
  done?: boolean
}

export function ProgressBar({ percent, indeterminate = false, done = false }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div
        className={`progress-bar__fill${indeterminate ? ' progress-bar__fill--indeterminate' : ''}${done ? ' progress-bar__fill--done' : ''}`}
        style={indeterminate ? undefined : { width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  )
}
