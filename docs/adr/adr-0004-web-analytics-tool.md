# ADR-0004: Web Analytics Tool

- **Status:** Decided
- **Date:** 2026-06-05
- **Deciders:** @andrefelizardo

## Context

It's important to have data about usage/navigation about the landing page and dashboard in the future so we need to have a web analytics tool configured.

## Options Considered

### Option 1: Google Analytics G4

Google Analytics is the market default, I already used it a lot of times. A few companies that I worked some teams complained about the dashboard and how hard was to understand the data.

### Option 2: Microsoft Clarity

Interesting option from the cost perspective because it's free. It's goal is record user behavior during navigation not web analytics as we want at the beginning.

### Option 3: Posthog

Tool focused on developers experience has a lot of different modules as web analytics but also heatmaps, user behavior recordings and others.

## Decision

I decided to go with Posthog to use a tool focused on developer experience that can evolve with our solution implementing new solutions in the future. Also is a good chalenge work with this tool that I've never worked before.

## Consequences

### Positive

- The package is lighter than GA4

### Negative

- We will need to invest time learning their dashboard and integrations
