import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { AppHeader } from '../components/AppHeader'
import { AppFooter } from '../components/AppFooter'
import { Eyebrow } from '../components/Eyebrow'
import { GradientText } from '../components/GradientText'
import { SectionHeading } from '../components/SectionHeading'
import { StatCard } from '../components/StatCard'
import { ProgressBar } from '../components/ProgressBar'
import {
  BoltIcon,
  CalendarIcon,
  ClockIcon,
  CompassIcon,
  FilmIcon,
  FlameIcon,
  GiftIcon,
  HeartIcon,
  PlayIcon,
  ThumbsUpIcon,
  TrendUpIcon,
  UsersIcon,
} from './resultsIcons'
import './Results.css'

const STATS = [
  { label: 'Total videos', value: '15,300', sub: 'Over 1,464 days', icon: <PlayIcon />, iconVariant: 'rose' as const, tint: 'rgba(255, 46, 99, 0.18)' },
  { label: 'Daily average', value: '10.5', unit: 'videos', sub: 'Steady, day in day out', icon: <TrendUpIcon />, iconVariant: 'amber' as const, tint: 'rgba(255, 177, 61, 0.18)' },
  { label: 'Unique channels', value: '2,854', sub: 'Creators in your rotation', icon: <UsersIcon />, iconVariant: 'accent' as const, tint: 'rgba(255, 107, 61, 0.18)' },
  { label: 'History span', value: '1,464', unit: 'days', sub: 'Jun 2022 — Jun 2026', icon: <CalendarIcon />, iconVariant: 'emerald' as const, tint: 'rgba(15, 184, 144, 0.16)' },
]

const TRAITS = [
  { icon: <TrendUpIcon />, iconVariant: 'emerald' as const, title: 'Balanced Viewer', text: 'You watch evenly through the day — no single hour owns you.', tag: 'Rhythm' },
  { icon: <HeartIcon />, iconVariant: 'rose' as const, title: 'Regular Viewer', text: 'A consistent 10.5 videos a day, four years running.', tag: 'Consistency' },
  { icon: <CompassIcon />, iconVariant: 'amber' as const, title: 'Content Explorer', text: '2,854 channels — you keep wandering past the algorithm.', tag: 'Range' },
]

const FACTS = [
  { icon: <FlameIcon />, iconVariant: 'accent' as const, label: 'Longest streak', value: '34', unit: 'days', note: 'Consecutive watching' },
  { icon: <BoltIcon />, iconVariant: 'amber' as const, label: 'Craziest day', value: '92', unit: 'videos', note: 'Mar 29, 2025' },
  { icon: <CalendarIcon />, iconVariant: 'emerald' as const, label: 'Favorite day', value: 'Monday', note: '17% of all views' },
  { icon: <GiftIcon />, iconVariant: 'rose' as const, label: 'First memory', value: 'Jun 14, 2022', note: 'Where the history starts' },
  { icon: <ThumbsUpIcon />, iconVariant: 'accent' as const, label: 'Loyalty champion', value: '412', unit: 'videos', note: 'Kurzgesagt' },
  { icon: <ClockIcon />, iconVariant: 'amber' as const, label: 'Peak hour', value: '10', unit: 'pm', note: '21% of everything watched' },
]

const CHANNELS = [
  { rank: '01', name: 'Kurzgesagt', percent: 100, count: 412 },
  { rank: '02', name: 'Veritasium', percent: 78, count: 322 },
  { rank: '03', name: 'Tom Scott', percent: 61, count: 251 },
  { rank: '04', name: 'Marques Brownlee', percent: 47, count: 194 },
  { rank: '05', name: 'NPR Music', percent: 35, count: 146 },
]

interface ResultsProps {
  onNewUpload: () => void
}

export function Results({ onNewUpload }: ResultsProps) {
  const { theme, toggleTheme } = useTheme()
  const [barsGrown, setBarsGrown] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setBarsGrown(true), 80)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="app-shell results" data-theme={theme}>
      <AppHeader theme={theme} onToggleTheme={toggleTheme} />
      <main className="results__main">
        <div className="results__container">
          <header className="results__head">
            <div>
              <Eyebrow>Step 2 of 2 · Rewind ready</Eyebrow>
              <h1 className="results__title">
                Here&apos;s your <GradientText>rewind</GradientText>, Alex.
              </h1>
              <p className="results__subtitle">Everything we found in your watch history — 15,300 videos across four years.</p>
            </div>
            <span className="results__tally">
              <FilmIcon />
              <b>15,300</b> videos analyzed
            </span>
          </header>

          <section className="results__stats">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>

          <section className="results__section">
            <SectionHeading icon={<HeartIcon />} iconVariant="rose" title="Your viewing personality" description="What your habits say about how you watch." />
            <div className="results__trio">
              {TRAITS.map((trait) => (
                <article key={trait.title} className="trait-card">
                  <div className="trait-card__head">
                    <span className={`icon-badge icon-badge--md icon-badge--${trait.iconVariant}`}>{trait.icon}</span>
                    <h3 className="trait-card__title">{trait.title}</h3>
                  </div>
                  <p className="trait-card__text">{trait.text}</p>
                  <span className="trait-card__tag">{trait.tag}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="results__section">
            <SectionHeading icon={<BoltIcon />} title="Fun facts" description="The numbers that made us look twice." />
            <div className="results__facts">
              {FACTS.map((fact) => (
                <article key={fact.label} className="fact-card">
                  <div className="fact-card__head">
                    <span className={`icon-badge icon-badge--sm icon-badge--${fact.iconVariant}`}>{fact.icon}</span>
                    <span className="fact-card__label">{fact.label}</span>
                  </div>
                  <div className="fact-card__value">
                    {fact.value}
                    {fact.unit && <small>{fact.unit}</small>}
                  </div>
                  <div className="fact-card__note">{fact.note}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="results__section">
            <SectionHeading icon={<UsersIcon />} iconVariant="emerald" title="Channels you kept coming back to" description="Your five most-watched creators." />
            <div className="results__channels">
              {CHANNELS.map((channel) => (
                <div key={channel.rank} className="channel-row">
                  <span className="channel-row__rank">{channel.rank}</span>
                  <span className="channel-row__name">{channel.name}</span>
                  <span className="channel-row__track">
                    <ProgressBar percent={barsGrown ? channel.percent : 0} />
                  </span>
                  <span className="channel-row__count">{channel.count}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="results__share">
            <div>
              <h3 className="results__share-title">Share your rewind</h3>
              <p className="results__share-text">Export the highlights as a card built for stories, or start over with a fresh upload.</p>
            </div>
            <div className="results__share-actions">
              <button type="button" className="results__share-button">
                Download share card
              </button>
              <button type="button" className="results__share-button results__share-button--ghost" onClick={onNewUpload}>
                New upload
              </button>
            </div>
          </section>

          <AppFooter />
        </div>
      </main>
    </div>
  )
}
