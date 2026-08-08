import './AppFooter.css'

// Base footer for every authenticated page.
export function AppFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="app-footer__legal">
        <span className="app-footer__copyright">© {year} YTalyze</span>
        <span className="app-footer__divider" aria-hidden="true" />
        <span className="app-footer__disclaimer">Your data is yours. Delete it any time.</span>
      </div>
      <div className="app-footer__links">
        <span className="app-footer__link">Privacy</span>
        <span className="app-footer__link">Terms</span>
        <span className="app-footer__link">Support</span>
        <span className="app-footer__brand-link">ytalyze.xyz</span>
      </div>
    </footer>
  )
}
