# ADR-0003: Landing Page Package Manager

- **Status:** Decided
- **Date:** 2026-05-27
- **Deciders:** @andrefelizardo

## Context

We need to choose the package manager for the Astro application. The package manager is responsible to download, update and manage all the packages/libraries we will need to install during the Landing Page development.

## Options Considered

### Option 1: npm

You just need node installed to use and is the default for Astro documentation. It allows _phantom dependencies_ - you can use/import packages that aren't on your package.json, and this is bad.

### Option 2: yarn

The new version of Yarn (v2+) is fast with a great support to monorepos. Working with integrations that assumes `node_modules` we can have friction.

### Option 3: pnpm

The fastest option in most benchmarks, has a great storage economy using `content-addressable store global` and `links/symlinks`. Old tools can't suffer to work with `symlinks`.

## Decision

I chose `pnpm` to manage the packages on our Astro application around the landing page. `pnpm` is the fastest option and is starting to be the Javascript community standard. It's totally integrated with Astro and we can see how to use it on Astro's documentation. I chose speed and storage economy instead of compatibility with old packages.

## Consequences

### Negative

- Developers need to install `pnpm`, not only Node (one extra step to install)
