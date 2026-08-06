# ADR-0005: Dashboard Framework & BFF ownership

- **Status:** Decided
- **Date:** 2026-08-06
- **Deciders:** @andrefelizardo

## Context

We need to choose a framework/platform to develop the Dashboard - the authenticated area. This choice need to support the development of the stateful UI. The solution need to allow easy componentization, reusage, modularization and maitenance.

## Options Considered

### Option 1: Next.js

Could aggregate the BFF, bigger ecosystem.

### Option 2: Astro

We could reuse the components, tokens and configuration already developed for the landing page. Share state in a stateful app is not comfortable.

### Option 3: Vite + React

We need to build and choose more things than Next.js, but we would have a clear division with the BFF.

### Option 4: Tanstack Start

Really similar with Vite + React, but is newer so less stable.

## Decision

I chose Vite + React to build the dashboard. Vite was prioritized over Astro to simplify the stateful app. Vite is simpler than Next.js to start to implement but for our purpose fit well.

## Consequences

### Positive

- What got easier or better?

### Negative

- What got harder or worse?
- What new problems did this decision create?

### Neutral

- What changes but isn't clearly good or bad?

## Notes

Links to related ADRs, discussions, prototypes, benchmarks.
Open questions still to resolve.
