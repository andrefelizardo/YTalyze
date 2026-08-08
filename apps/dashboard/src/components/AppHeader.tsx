import type { Theme } from '../hooks/useTheme'
import { YtalyzeMark } from './YtalyzeMark'
import { ChevronDownIcon, MoonIcon, SunIcon } from './icons'
import './AppHeader.css'

interface AppHeaderProps {
  theme: Theme
  onToggleTheme: () => void
  userName?: string
  userInitials?: string
}

// Base header + user menu for every authenticated page — swap the children
// of `.app-header__wrap` per-page if a page ever needs nav links.
export function AppHeader({ theme, onToggleTheme, userName = 'Alex Rivera', userInitials = 'AR' }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <YtalyzeMark size={23} />
        <span className="app-header__wordmark">YTalyze</span>
      </div>
      <div className="app-header__actions">
        <button
          type="button"
          className="app-header__toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
        <button type="button" className="app-header__user" aria-haspopup="menu">
          <span className="app-header__avatar">{userInitials}</span>
          <span className="app-header__user-name">{userName}</span>
          <span className="app-header__chevron">
            <ChevronDownIcon />
          </span>
        </button>
      </div>
    </header>
  )
}
