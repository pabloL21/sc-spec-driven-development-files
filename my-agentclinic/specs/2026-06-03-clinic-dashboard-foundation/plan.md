# Phase 2 Plan: Clinic Dashboard Foundation

1. Baseline Review
   - Confirm the current Phase 1 app structure, scripts, and tests.
   - Review the mission, roadmap, and tech stack before implementation.
   - Keep the feature scoped to server-rendered pages backed by SQLite demo data.

2. Shared Layout and Navigation
   - Extend the existing layout and components for a small clinic dashboard.
   - Add navigation links for Home, Agents, Ailments, Therapies, and Appointments.
   - Keep the shared layout readable and reusable without introducing a frontend framework.
   - Add PicoCSS as the baseline CSS framework for typography, spacing, forms, and simple responsive layout.
   - Keep a small local stylesheet for AgentClinic-specific navigation, page sections, and clinic theme touches.

3. SQLite Persistence Foundation
   - Add SQLite as the local persistence layer for this phase.
   - Create plain SQL migration files for agents, ailments, therapies, appointments, and relationship tables.
   - Add a small seed flow for demo agents, ailments, therapies, and their relationships.
   - Add a minimal database access module that keeps queries readable and close to the domain.

4. Agent Pages
   - Query SQLite for a small set of AI agents.
   - Create an agents list page.
   - Show each agent's name, model, status, and owner.
   - Add an agent detail page for each demo agent.
   - Link related ailments from agent details when useful.

5. Ailment Pages
   - Query SQLite for common fictional agent ailments.
   - Create an ailments list page.
   - Show each ailment's name, severity, and description.
   - Link ailments to affected agents when the relationship helps the demo.

6. Therapy Pages
   - Query SQLite for therapies that match the demo ailments.
   - Create a therapies list page.
   - Show each therapy's name, purpose, and matching ailments.
   - Add therapy detail pages.
   - Keep therapy copy playful, useful, and easy to explain.

7. Appointments Placeholder
   - Add navigation for Appointments.
   - Keep booking behavior out of Phase 2.
   - Provide a simple placeholder or empty-state page that points to the later appointments phase.

8. Verification
   - Add or update focused Vitest coverage for the new persisted pages and shared navigation.
   - Verify migrations and seed data can prepare a local SQLite database.
   - Run the test suite.
   - Run the TypeScript build.
   - Start the app and manually check the main pages in a browser or with `curl`.
