import { useTheme } from '../hooks/useTheme'
import { YtalyzeMark } from '../components/YtalyzeMark'
import { MoonIcon, SunIcon } from '../components/icons'
import './Login.css'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M45.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.8h12c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.8-9.1 6.8-15.9Z" fill="#4285F4" />
      <path d="M24 46c5.8 0 10.7-1.9 14.3-5.2l-6.7-5.2c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7 5.4C8.1 41.2 15.4 46 24 46Z" fill="#34A853" />
      <path d="M11.5 28.7c-.5-1.4-.7-2.8-.7-4.3s.3-3 .7-4.3l-7-5.4C3.2 17.5 2.5 20.7 2.5 24s.7 6.5 2 9.3l7-4.6Z" fill="#FBBC05" />
      <path d="M24 10.4c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.3 29.8 2 24 2 15.4 2 8.1 6.8 4.5 14.7l7 5.4C13.3 14.8 18.2 10.4 24 10.4Z" fill="#EA4335" />
    </svg>
  )
}

export function Login() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="login" data-theme={theme}>
      <div className="login__glow" aria-hidden="true" />
      <div className="login__topbar">
        <button
          type="button"
          className="login__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
      <main className="login__content">
        <div className="login__card">
          <YtalyzeMark size={64} className="login__mark" />
          <h1 className="login__title">Welcome to YTalyze</h1>
          <button type="button" className="login__google-button">
            <GoogleIcon />
            Continue with Google
          </button>
          <div className="login__badge">
            <CheckIcon />
            <span>You&apos;re signed in. Your dashboard is coming soon.</span>
          </div>
          <p className="login__disclaimer">By continuing you agree to our Terms and Privacy Policy.</p>
        </div>
      </main>
    </div>
  )
}
