import { useTheme } from '../hooks/useTheme'
import { AppHeader } from '../components/AppHeader'
import { AppFooter } from '../components/AppFooter'
import { UploadCloudIcon } from '../components/icons'
import '../styles/app-shell.css'
import './Upload.css'

const STEPS = [
  { label: 'Open Google Takeout and deselect everything.' },
  { label: 'Select YouTube and YouTube Music, then narrow it to history.' },
  { label: 'Export, download the archive, and unzip it.' },
  { label: 'Find watch-history.json and drop it here.' },
]

export function Upload() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-shell upload" data-theme={theme}>
      <AppHeader theme={theme} onToggleTheme={toggleTheme} />
      <main className="upload__main">
        <div className="upload__container">
          <header className="upload__head">
            <div className="upload__step">
              <span className="upload__step-rule" aria-hidden="true" />
              <span>Step 1 of 2</span>
            </div>
            <h1 className="upload__title">
              Hi <span className="upload__title-accent">Alex</span> — let&apos;s build your rewind.
            </h1>
            <p className="upload__subtitle">
              We need one file: your YouTube watch history export. Drop it in and we&apos;ll do the rest.
            </p>
          </header>

          <div className="upload__grid">
            <section className="upload__dropzone">
              <div className="upload__dropzone-icon">
                <UploadCloudIcon />
              </div>
              <h2 className="upload__dropzone-title">Drop your watch history here</h2>
              <p className="upload__dropzone-text">
                Drag the file in, or pick it from your computer. Nothing leaves your account and you can delete it
                any time.
              </p>
              <div className="upload__dropzone-actions">
                <button type="button" className="upload__button upload__button--primary">
                  Choose file
                </button>
                <button type="button" className="upload__button upload__button--secondary">
                  How do I get this file?
                </button>
              </div>
              <p className="upload__dropzone-caption">watch-history.json or .html · up to 200 MB</p>
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
