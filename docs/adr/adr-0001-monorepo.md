# ADR-0001: Monorepo

- **Status:** Decided
- **Date:** 2026-05-22
- **Deciders:** @andrefelizardo

## Context

How to organize the files considering the application will have different systems with different stacks and requirements, but some documentation refers to the entire system. The repository structure decision impacts the effort required to keep the entire project documentation updated, as well as how to share API contracts, scripts and environment variables. Since we will probably have k8s files or at least Docker Compose, it's important to make a well-informed decision about the repository structure.

## Options Considered

### Option 1: Polyrepo

Have one repository _per_ system in the application. This would make it easier to evolve each part independently. This way, some repositories could remain public while others stay private. This option would be better if we had a larger team.

### Option 2: Monorepo

Have one repository for all systems. This would make it easier to manage documentation and infrastructure files, and to share API contracts between different applications. With a small team, this is not a significant problem.

## Decision

I prioritized documentation coherence and ease of automation and infrastructure management over independent versioning and separate development environments for each system component.

## Consequences

### Positive

- Creating infrastructure files (Docker/K8s) will be easier in the future.
- Easier to onboard new developers and explain the project structure and how the systems are connected.

### Negative

- The entire code will be public.
- It's not possible to maintain different versions in Git for frontend and backend applications.
- We will need to implement filters to prevent compiling different types of applications after each commit.

## Notes

- Decide to use Turborepo or another solution when we have more than 2 apps implemented.
