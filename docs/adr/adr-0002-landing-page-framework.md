# ADR-0002: Landing Page Framework

- **Status:** Decided
- **Date:** 2026-05-22
- **Deciders:** @andrefelizardo

## Context

We need to choose a framework/platform to develop the Landing Page. To ensure our product ranks well on Google (and with AI search engines), we need excellent SEO optimization and fast page load times. Additionally, we should prioritize a solution that allow us to componentize and reuse frontend components for easier implementation and maintenance.

## Options Considered

### Option 1: Next.js

Provides SSR and can achieve good SEO levels with proper configuration, but it's overkill for our scope.

### Option 2: HTML + CSS + Javascript

The implest build and deployment solution. However, it makes component reuse difficult.

### Option 3: Vite

Lighter and less opinionated than Next.js, but it generates an _empty HTML file_ which is problematic for SEO.

### Option 4: Astro

Designed to reduce JavaScript overheadand deliver fast-loading websites with excellent SEO performance.

## Decision

I chose Astro to build the landing page. Astro was prioritized over pure HTML + CSS + JavaScript to keep components reuse as a possibility, considering we will have more than one static page. Among the framework options, Astro optimizes JavaScript delivery by sending zero JS to the browser by default - you must explicitly configure components to include JavaScript. This outperforms Next.js for our use case. Vite has known SEO issues out of the box.

## Consequences

### Positive

- We can create reusable components across pages and leverage external React libraries to build polished UIs.

### Negative

- I will need to learn Astro, as this is my first time using it.
- I will need to implement build workflows for the application.
