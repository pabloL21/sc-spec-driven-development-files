# AgentClinic Tech Stack

## Principles

The stack should be simple, TypeScript-first, and friendly for course exercises. Prefer tools that are easy to explain, quick to run locally, and common enough that students can reuse the patterns later.

## Recommended Stack

| Layer | Choice | Reason |
| --- | --- | --- |
| Language | TypeScript | Gives the project type safety while staying close to modern JavaScript. |
| Runtime | Node.js | Familiar runtime for server-side TypeScript demos. |
| Web Framework | Hono | Lightweight, fast, and easy to understand for building small HTTP apps. |
| Rendering | Server-rendered HTML | Keeps the first demo simple without needing a frontend build pipeline. |
| Styling | PicoCSS plus local CSS | Provides a polished baseline while keeping custom styling small and inspectable. |
| Data Storage | SQLite after Phase 1 | Simple local database for durable agents, ailments, therapies, and appointments. |
| Migrations | Plain SQL files | Keeps schema changes inspectable, teachable, and close to SQLite itself. |
| Build Tooling | TypeScript compiler | The current project already builds with `tsc`. Add more tooling only when needed. |
| Test Runner | Vitest | Gives the project fast TypeScript-friendly tests for validating specs without adding heavy tooling. |

## Application Structure

Start with a small server entry point and grow the structure as features appear:

```text
src/
  index.ts
  data/
  views/
  routes/
  styles/
```

Do not create folders before they have a clear purpose. The project should evolve from simple to structured as the roadmap advances.

## Development Expectations

- Keep pages usable in a modern browser.
- Prefer readable server-side TypeScript over clever abstractions.
- Keep feature code close to the route or view until repetition proves a helper is useful.
- Use hard-coded data only for the earliest learning steps.
- Use plain SQL files for migrations when SQLite is introduced in Phase 2.
- Use Vitest for focused validation tests as behavior becomes large enough to need repeatable checks.
- Keep SQLite usage small and readable for course demos.

## Deferred Choices

These can wait until later phases:

- Client-side framework.
- Authentication.
- API clients.
- Automated UI testing.
- Deployment platform.
