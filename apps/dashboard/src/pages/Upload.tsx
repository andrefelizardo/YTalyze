import { useCallback, useRef, useState } from 'react'
import type { DragEvent } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useMockUploadFlow } from '../hooks/useMockUploadFlow'
import type { UploadFlowStage } from '../hooks/useMockUploadFlow'
import { AppHeader } from '../components/AppHeader'
import { AppFooter } from '../components/AppFooter'
import { Eyebrow } from '../components/Eyebrow'
import { GradientText } from '../components/GradientText'
import { CircularProgress } from '../components/CircularProgress'
import { ProgressBar } from '../components/ProgressBar'
import { StageList } from '../components/StageList'
import { FileIcon, UploadCloudIcon } from '../components/icons'
import '../styles/app-shell.css'
import './Upload.css'

const STEPS = [
  { label: 'Open Google Takeout and deselect everything.' },
  { label: 'Select YouTube and YouTube Music, then narrow it to history.' },
  { label: 'Export, download the archive, and unzip it.' },
  { label: 'Find watch-history.json and drop it here.' },
]

const UPLOAD_STAGES: UploadFlowStage[] = [
  { label: 'Uploading file', title: 'Uploading your history', hint: "Keep this tab open — we'll tell you the moment it's ready." },
  { label: 'Reading your watch history', title: 'Reading your file', hint: 'Parsing every entry. Large exports can take a little longer.' },
  { label: 'Finding channels and patterns', title: 'Looking for patterns', hint: 'Grouping channels, sessions and rabbit holes.' },
  { label: 'Building your rewind', title: 'Building your rewind', hint: 'Almost there — putting the story together.' },
]

function formatFileSize(bytes: number) {
  if (!bytes) return ''
  const mb = bytes / 1048576
  return mb < 1 ? ` · ${Math.max(1, Math.round(bytes / 1024))} KB` : ` · ${mb.toFixed(1)} MB`
}

interface UploadProps {
  onComplete?: () => void
}

export function Upload({ onComplete }: UploadProps = {}) {
  const { theme, toggleTheme } = useTheme()
  const flow = useMockUploadFlow(UPLOAD_STAGES)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const isBusy = flow.phase !== 'idle'
  const isProcessing = flow.phase === 'processing'
  const isDone = flow.phase === 'done'
  const ringPercent = flow.phase === 'uploading' ? flow.percent : 100
  const ringLabel = isDone ? '✓' : isProcessing ? '•••' : `${Math.round(flow.percent)}%`

  const handleFile = useCallback(
    (selected: File | undefined) => {
      if (!selected) return
      flow.start({ name: selected.name, size: selected.size })
    },
    [flow],
  )

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDragOver(false)
      if (isBusy) return
      handleFile(event.dataTransfer.files[0])
    },
    [isBusy, handleFile],
  )

  return (
    <div className="app-shell upload" data-theme={theme}>
      <AppHeader theme={theme} onToggleTheme={toggleTheme} />
      <main className="upload__main">
        <div className="upload__container">
          <header className="upload__head">
            <Eyebrow>Step 1 of 2</Eyebrow>
            <h1 className="upload__title">
              Hi <GradientText>Alex</GradientText> — let&apos;s build your rewind.
            </h1>
            <p className="upload__subtitle">
              We need one file: your YouTube watch history export. Drop it in and we&apos;ll do the rest.
            </p>
          </header>

          <div className="upload__grid">
            <section
              className={`upload__dropzone${isBusy ? ' upload__dropzone--busy' : ''}${isDragOver ? ' upload__dropzone--hot' : ''}`}
              onDragOver={(event) => {
                event.preventDefault()
                if (!isBusy) setIsDragOver(true)
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
            >
              {isBusy ? (
                <div className="upload__loading" role="status" aria-live="polite">
                  <div className="upload__loading-top">
                    <CircularProgress percent={ringPercent} label={ringLabel} done={isDone} />
                    <div className="upload__loading-meta">
                      <h2 className="upload__loading-title">{flow.title}</h2>
                      <div className="upload__loading-file">
                        <FileIcon />
                        <span className="upload__loading-filename">{flow.file?.name}</span>
                        <span>{flow.file ? formatFileSize(flow.file.size) : ''}</span>
                      </div>
                    </div>
                  </div>

                  <ProgressBar percent={isDone ? 100 : flow.percent} indeterminate={isProcessing} done={isDone} />

                  <StageList stages={UPLOAD_STAGES} statuses={flow.statuses} />

                  <div className="upload__loading-foot">
                    <span className="upload__loading-hint">{flow.hint}</span>
                    <button
                      type="button"
                      className={`upload__button ${isDone ? 'upload__button--primary' : 'upload__button--secondary'}`}
                      onClick={isDone ? onComplete : flow.reset}
                    >
                      {isDone ? 'View my rewind' : 'Cancel'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="upload__idle">
                  <div className="upload__dropzone-icon">
                    <UploadCloudIcon />
                  </div>
                  <h2 className="upload__dropzone-title">Drop your watch history here</h2>
                  <p className="upload__dropzone-text">
                    Drag the file in, or pick it from your computer. Nothing leaves your account and you can delete
                    it any time.
                  </p>
                  <div className="upload__dropzone-actions">
                    <button
                      type="button"
                      className="upload__button upload__button--primary"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Choose file
                    </button>
                    <button type="button" className="upload__button upload__button--secondary">
                      How do I get this file?
                    </button>
                  </div>
                  <p className="upload__dropzone-caption">watch-history.json or .html · up to 200 MB</p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.html,.htm"
                className="upload__file-input"
                onChange={(event) => {
                  handleFile(event.target.files?.[0])
                  event.target.value = ''
                }}
              />
            </section>

            <aside className="upload__sidebar">
              <h2 className="upload__sidebar-title">Getting your file</h2>
              <ol className="upload__sidebar-list">
                {STEPS.map((step, index) => (
                  <li key={step.label} className="upload__sidebar-item">
                    <span className="upload__sidebar-index">{index + 1}</span>
                    <span className="upload__sidebar-text">{step.label}</span>
                  </li>
                ))}
              </ol>
              <p className="upload__sidebar-note">Takeout emails you a link — it usually lands within a few minutes.</p>
            </aside>
          </div>

          <AppFooter />
        </div>
      </main>
    </div>
  )
}
