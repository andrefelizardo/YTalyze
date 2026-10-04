# ADR-0006: BFF Framework

- **Status:** Decided
- **Date:** 2026-10-03
- **Deciders:** @andrefelizardo

## Context

As decided in [ADR-0005](adr-0005-dashboard-framework-bff-ownership.md), the dashboard is a Vite + React app and the BFF is a separate backend layer. We need to choose a Node.js framework to build this BFF. It needs to be simple to start, easy to extend as new features arrive (authentication, YouTube data integration, analysis endpoints), and performant.

## Options Considered

### Option 1: NestJS

Opinionated framework with modules, dependency injection and decorators out of the box. Gives a strong structure for large teams, but brings a lot of boilerplate and abstractions for the size of this project.

### Option 2: Express

The most popular and mature Node.js framework, with the biggest ecosystem. Minimal and flexible, but older, with weaker TypeScript support, no built-in validation/serialization and lower performance.

### Option 3: Fastify

Minimal like Express, but with a plugin-based architecture for extensibility, built-in JSON schema validation and serialization, first-class TypeScript support and a focus on performance.

## Decision

I chose Fastify to build the BFF. It is simple to start with, like Express, without the boilerplate and abstractions of NestJS. Its plugin system makes it easy to extend the BFF as it grows, and it is optimized for performance, with low overhead and fast schema-based serialization.

## Consequences

### Positive

- Starting the implementation is simple, with little boilerplate.
- The plugin system gives a clear way to organize and extend the BFF (routes, auth, integrations).
- Request validation and response serialization come built-in through JSON schemas.
- Better performance and TypeScript support than Express.

### Negative

- Smaller ecosystem than Express - some middlewares need a Fastify equivalent or an adapter.
- Without NestJS conventions, we need to define and keep our own project structure.
- The plugin encapsulation model has a learning curve.

### Neutral

- The project structure and conventions for the BFF will be defined by us as the code grows.

## Notes

- The dashboard framework and BFF ownership decision is recorded in [ADR-0005](adr-0005-dashboard-framework-bff-ownership.md).
- NestJS can be reconsidered if the BFF grows to a size where its structure pays off.
