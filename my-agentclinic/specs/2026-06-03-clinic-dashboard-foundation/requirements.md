# Phase 2 Requirements: Clinic Dashboard Foundation

## Scope

Phase 2 turns the Phase 1 Hello Clinic app into a small clinic dashboard. The feature introduces shared navigation, the first domain pages for agents, ailments, and therapies, and SQLite persistence for the demo data while keeping the implementation server-rendered.

## User-Facing Requirements

- Users can navigate between Home, Agents, Ailments, Therapies, and Appointments.
- Users can view a persisted demo list of AI agents.
- Agent list items show name, model, status, and owner.
- Users can open an agent detail page.
- Users can view a persisted demo list of common agent ailments.
- Ailment list items show name, severity, and description.
- Ailments can reference affected agents when the relationship is useful for the demo.
- Users can view a persisted demo list of therapies.
- Therapy list items show name, purpose, and matching ailments.
- Users can open a therapy detail page.
- Therapy language should feel playful but still help users understand what each therapy is for.
- The dashboard should be easy to scan during a live course or conference demo.

## Technical Requirements

- Continue using TypeScript, Node.js, Hono, server-rendered HTML, and PicoCSS.
- Use PicoCSS for baseline typography, spacing, form controls, tables, and responsive defaults.
- Keep local CSS limited to AgentClinic-specific layout, navigation, and theme adjustments that PicoCSS does not cover.
- Keep pages server-rendered; do not add a client-side framework.
- Use SQLite for agents, ailments, therapies, appointments, and their demo relationships.
- Use plain SQL migration files for schema changes.
- Seed the database with demo agents, ailments, therapies, and relationship data.
- Read dashboard data from SQLite instead of hard-coded in-memory arrays.
- Avoid authentication, payments, scheduling logic, and analytics.
- Add structure only where it has a clear purpose for routes, views, or data.
- Keep route handlers readable and close to the page behavior they serve.
- Use Vitest for focused validation where server-rendered database-backed behavior can be checked cheaply.

## Decisions

- Phase 2 includes dashboard navigation, persisted demo domain pages, and SQLite setup.
- Phase 2 does not include appointment booking; the Appointments page may be a placeholder or empty state.
- Seed data should be small enough to understand at a glance.
- The app should preserve the course/demo feel: friendly, memorable, and simple to explain.
- PicoCSS is the styling foundation for this phase so the dashboard can look polished without custom CSS bloat.
- Styling should improve the dashboard foundation without becoming a full polish pass.
- SQLite migrations should be written as plain SQL files.
- The appointments table can be created in Phase 2, but appointment submission and storage behavior remains Phase 3 work.

## Context

The mission defines AgentClinic as a friendly clinic dashboard for fictional AI patients and a teaching project for spec-driven development. The tech stack favors TypeScript, Hono, server-rendered HTML, simple styling, SQLite when the domain is visible, plain SQL migrations, and Vitest. For this phase, PicoCSS is the chosen styling layer because it keeps the app readable and attractive without introducing a frontend build pipeline. SQLite is included in this phase so students can see the domain model move directly into a local database while the app is still small enough to explain. Plain SQL migration files should keep database changes inspectable and easy to teach.

## Open Questions

- Which demo agents should appear in the initial persisted list?
- Which ailments and therapies should be included in the first demo dataset?
- What SQLite package should the project use for local database access?
- Should the Appointments page be a simple "coming next" placeholder, or should it show a read-only preview of the future booking workflow?
- How playful should the clinic copy be compared with a quieter dashboard tone?

## Out of Scope

- Submitting or storing appointments.
- Validating appointment form fields.
- Real LLM diagnosis or model integrations.
- Authentication or user accounts.
- Production deployment.
- Custom design-system work beyond PicoCSS and small AgentClinic-specific CSS.
- Full responsive polish beyond keeping pages usable in modern browsers.
