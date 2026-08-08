import { useCallback, useEffect, useRef, useState } from 'react'
import type { StageStatus } from '../components/StageList'

export interface UploadFlowStage {
  label: string
  title: string
  hint: string
}

export interface PickedFile {
  name: string
  size: number
}

export type UploadFlowPhase = 'idle' | 'uploading' | 'processing' | 'done'

const UPLOAD_TICK_MS = 400
const STAGE_START_DELAY_MS = 900
const STAGE_GAP_MS = 1500
const COMPLETE_DELAY_MS = 1400

// Drives a fake upload → processing → done sequence with setTimeout/setInterval,
// standing in for the real upload + parsing calls until the backend exists.
export function useMockUploadFlow(stages: UploadFlowStage[]) {
  const [phase, setPhase] = useState<UploadFlowPhase>('idle')
  const [percent, setPercent] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [file, setFile] = useState<PickedFile | null>(null)

  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([])
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimers = useCallback(() => {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
    if (interval.current) clearInterval(interval.current)
    interval.current = null
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const reset = useCallback(() => {
    clearTimers()
    setPhase('idle')
    setPercent(0)
    setActiveStage(0)
    setFile(null)
  }, [clearTimers])

  const start = useCallback(
    (pickedFile: PickedFile) => {
      clearTimers()
      setFile(pickedFile)
      setPhase('uploading')
      setPercent(0)
      setActiveStage(0)

      let uploaded = 0
      interval.current = setInterval(() => {
        uploaded = Math.min(100, uploaded + Math.random() * 16 + 6)
        setPercent(uploaded)
        if (uploaded < 100) return

        if (interval.current) clearInterval(interval.current)
        interval.current = null
        setPhase('processing')

        stages.slice(1).forEach((_, index) => {
          timeouts.current.push(
            setTimeout(() => setActiveStage(index + 1), STAGE_START_DELAY_MS + index * STAGE_GAP_MS),
          )
        })

        const finishDelay = STAGE_START_DELAY_MS + (stages.length - 1) * STAGE_GAP_MS + COMPLETE_DELAY_MS
        timeouts.current.push(
          setTimeout(() => {
            setActiveStage(stages.length)
            setPhase('done')
          }, finishDelay),
        )
      }, UPLOAD_TICK_MS)
    },
    [clearTimers, stages],
  )

  const statuses: StageStatus[] = stages.map((_, index) => {
    if (index < activeStage) return 'done'
    if (index === activeStage && phase !== 'idle') return 'active'
    return 'pending'
  })

  const activeCopy = stages[Math.min(activeStage, stages.length - 1)]

  return {
    phase,
    percent,
    file,
    statuses,
    title: phase === 'done' ? 'Your rewind is ready' : activeCopy?.title ?? '',
    hint: phase === 'done' ? "We've finished analyzing your history." : activeCopy?.hint ?? '',
    start,
    reset,
  }
}
