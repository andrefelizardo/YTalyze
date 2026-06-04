<p align="center">
  <img src="home/public/ytalyze-og-1200x630.png" alt="YTalyze — Rewind your watch history" width="720" />
</p>

<h1 align="center">YTalyze</h1>

<p align="center">
  <strong>Your watch history is a diary. Let's read it back to you.</strong>
  <br />
  YTalyze turns ten years of YouTube into a personal, screenshot-ready rewind of everything you've ever watched.
</p>

<p align="center">
  <a href="#-what-is-ytalyze">What is it</a> ·
  <a href="#-how-it-works">How it works</a> ·
  <a href="#-privacy-first">Privacy</a> ·
  <a href="#-repository-structure">Repo structure</a> ·
  <a href="#-development">Development</a> ·
  <a href="#-architecture-decisions">ADRs</a>
</p>

---

## 🎬 What is YTalyze?

There's a whole person hiding in your YouTube watch history — every late night, every obsession, every era you quietly grew out of. YTalyze reads that history and plays it back to you as a full-screen, swipeable rewind, plus a stack of cards already sized for your Stories.

A few of the insights it surfaces:

| Insight | What it tells you |
| --- | --- |
| ⏱️ **Watch time** | Ranks every topic you've ever watched and surfaces the one that quietly ran your hours |
| 🌙 **Peak time** | Charts every play across the clock and finds the exact minute you reach for YouTube most |
| 🌀 **Rabbit holes** | Detects every spiral you fell into and times how deep each one ran — from *"how do they make pencils"* to deep-sea mining, four hours later |
| 💘 **Obsession** | Finds the one creator you keep coming back to — your comfort channel |
| 📈 **Evolution** | Maps how your taste actually drifted, era by era (rage-quitting boss fights → tectonic plates, charted) |

Every insight comes out **Story-shaped**: 9:16, bold, and ready to screenshot the second it loads.

## ⚡ How it works

Three taps. Ninety seconds. Then it gets personal.

1. **Sign in with Google** — one tap, read-only and revocable. *(~5 seconds)*
2. **Drop your history** — export your watch history from Google Takeout and drag the file in. *(~60 seconds)*
3. **Get your rewind** — a full-screen, swipeable rewind plus shareable cards. *(instant)*

No spreadsheets, no API keys, no setup wizard.

## 🔒 Privacy first

It's a decade of you in one file. We treat it that way.

- **Processed for you, never on you** — your history powers your cards and nothing else. Never sold, never used to train models, never shared.
- **Read-only Google access** — minimum OAuth scope. We can't post, delete, or touch a thing on your account.
- **Delete everything, instantly** — one button wipes your upload and every insight derived from it.

## 📁 Repository structure

This is a **monorepo** (see [ADR-0001](docs/adr/adr-0001-repository-structure.md)) — all of YTalyze's systems live here, sharing documentation, contracts, and (eventually) infrastructure files.

```
YTalyze/
├── docs/
│   └── adr/          # Architecture Decision Records
├── home/             # Landing page (Astro)
│   ├── src/
│   │   ├── components/   # Astro components (Hero, HowItWorks, Trust, …)
│   │   ├── i18n/         # Typed dictionaries — en + pt-BR
│   │   ├── data/         # Locale-invariant site data & SEO defaults
│   │   ├── layouts/
│   │   └── pages/        # / and /pt-br
│   └── public/           # Static assets (OG image, favicons, …)
└── README.md
```

## 🛠️ Development

The landing page lives in [`home/`](home/) and is built with [Astro](https://astro.build) — zero JS shipped by default, great SEO out of the box.

**Prerequisites:** Node `>=22.12.0` and [pnpm](https://pnpm.io).

```bash
cd home
pnpm install
pnpm dev        # start the dev server
pnpm build      # production build → dist/
pnpm preview    # preview the production build locally
```

The site is fully internationalized — English at `/` and Brazilian Portuguese at `/pt-br`. Both dictionaries share a typed shape, so a missing or extra translation key fails the build.

## 📐 Architecture decisions

Significant technical decisions are recorded as ADRs in [`docs/adr/`](docs/adr/):

| ADR | Decision |
| --- | --- |
| [ADR-0001](docs/adr/adr-0001-repository-structure.md) | **Monorepo** — documentation coherence and infrastructure ease over independent versioning |
| [ADR-0002](docs/adr/adr-0002-landing-page-framework.md) | **Astro** for the landing page — component reuse with zero-JS-by-default SEO performance |
| [ADR-0003](docs/adr/adr-0003-landing-page-package-manager.md) | **pnpm** as package manager — speed and storage economy |

New decisions follow the [ADR template](docs/adr/adr-example.md).

---

<p align="center">
  <sub>© 2026 YTalyze · Not affiliated with YouTube or Google · Made for the curious</sub>
</p>
