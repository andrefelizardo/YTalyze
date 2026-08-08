# ADR-0005: Dashboard Framework & BFF Ownership

- **Status:** Decided
- **Date:** 2026-08-06
- **Deciders:** @andrefelizardo

## Context

We need to choose a framework/platform to develop the Dashboard - the authenticated area. This choice needs to support the development of a stateful UI. The solution needs to allow easy componentization, reuse, modularization and maintenance.

## Options Considered

### Option 1: Next.js

Could absorb the BFF, and has the bigger ecosystem.

### Option 2: Astro

We could reuse the components, tokens and configuration already developed for the landing page. Sharing state in a stateful app is not comfortable.

### Option 3: Vite + React

We need to build and choose more things than with Next.js, but we would have a clear separation from the BFF.

### Option 4: TanStack Start

Very similar to Vite + React, but it's newer and therefore less stable.

## Decision

I chose Vite + React to build the dashboard. Vite was prioritized over Astro to simplify the stateful app. Vite is simpler than Next.js to start implementing, and it fits our purpose well.

## Consequences

### Positive

- Building the stateful UI is simpler than it would be with Astro.
- The separation from the BFF stays clear - the BFF remains the only backend layer, instead of being absorbed by the frontend framework as it would be with Next.js.
- Starting the implementation is simpler than with Next.js.

### Negative

- We need to build and choose more things ourselves than Next.js would give us out of the box.
- We cannot reuse the components, tokens and configuration already developed for the landing page in Astro.

### Neutral

- The project now has two frontend stacks: Astro for the landing page and Vite + React for the dashboard.

## Notes

- The landing page framework decision is recorded in [ADR-0002](adr-0002-landing-page-framework.md).
- TanStack Start can be reconsidered once it becomes more stable.
