# Phase 2 Validation: Clinic Dashboard Foundation

## Merge Readiness

Phase 2 can be merged when the app provides server-rendered dashboard navigation, SQLite-backed agents, ailments, and therapies pages, detail pages where required, and tests or manual checks showing the feature works without introducing appointment booking behavior.

## Testing Expectations

- Vitest unit tests cover the key server-rendered output for shared layout, navigation, SQLite-backed list pages, and required detail pages.
- The TypeScript build compiles cleanly with no type errors.
- A manual smoke test checklist is completed before merge to confirm the app works as a browser demo, not only as isolated rendering code.

## Validation Steps

1. Install dependencies if needed.
   - Expected result: project dependencies are available locally.

2. Run the test suite.
   - Example command: `npm test`
   - Expected result: all Vitest tests pass.

3. Run the TypeScript build.
   - Example command: `npm run build`
   - Expected result: the command completes without TypeScript errors.

4. Start the local server.
   - Expected result: the app starts on the documented local port.

5. Prepare the local SQLite database.
   - Expected result: plain SQL migrations run successfully and demo seed data is available.

6. Verify the home page and shared navigation.
   - Example command: `curl http://localhost:3000/`
   - Expected result: the response includes `AgentClinic` and links to Agents, Ailments, Therapies, and Appointments.

7. Verify the agents page.
   - Example command: `curl http://localhost:3000/agents`
   - Expected result: the response includes a SQLite-backed list of agents with name, model, status, and owner.

8. Verify an agent detail page.
   - Example command: `curl http://localhost:3000/agents/{agent-id}`
   - Expected result: the response includes the selected agent details and related ailment information when available.

9. Verify the ailments page.
   - Example command: `curl http://localhost:3000/ailments`
   - Expected result: the response includes a SQLite-backed list of ailments with name, severity, and description.

10. Verify the therapies page.
   - Example command: `curl http://localhost:3000/therapies`
   - Expected result: the response includes a SQLite-backed list of therapies with name, purpose, and matching ailments.

11. Verify a therapy detail page.
    - Example command: `curl http://localhost:3000/therapies/{therapy-id}`
    - Expected result: the response includes the selected therapy details and matching ailment context.

12. Verify the appointments page behavior.
    - Example command: `curl http://localhost:3000/appointments`
    - Expected result: the response does not provide booking behavior yet and clearly stays within Phase 2 scope.

13. Open the app in a modern browser.
    - Expected result: pages are readable, navigation works, and the dashboard is easy to scan at common desktop and mobile widths.

14. Verify PicoCSS is loaded.
    - Expected result: the rendered HTML links to PicoCSS and keeps local CSS focused on AgentClinic-specific adjustments.

## Manual Smoke Test Checklist

- Start the local server successfully.
- Open the home page in a modern browser.
- Confirm navigation links are visible for Home, Agents, Ailments, Therapies, and Appointments.
- Open the Agents page and confirm the seeded agent data appears.
- Open at least one agent detail page from the Agents page.
- Open the Ailments page and confirm severity and description content appears.
- Open the Therapies page and confirm matching ailment content appears.
- Open at least one therapy detail page from the Therapies page.
- Open the Appointments page and confirm booking is not active yet.
- Confirm PicoCSS styling is visible and pages are readable at common desktop and mobile widths.

## Review Checklist

- The implementation uses Hono and TypeScript.
- Vitest unit tests cover the core Phase 2 rendering behavior.
- The TypeScript build compiles cleanly.
- The manual smoke test checklist has been completed.
- Pages are server-rendered HTML.
- Styling uses PicoCSS as the baseline.
- Local CSS is limited to AgentClinic-specific layout, navigation, and theme adjustments.
- SQLite is used for agents, ailments, therapies, appointments, and their relationships.
- Migrations are plain SQL files.
- Demo data can be seeded into the local SQLite database.
- Navigation exists for Agents, Ailments, Therapies, and Appointments.
- Agent pages read from SQLite.
- Agent list entries show name, model, status, and owner.
- Agent detail pages are available.
- Ailment pages read from SQLite.
- Ailment entries show name, severity, and description.
- Therapy pages read from SQLite.
- Therapy entries show name, purpose, and matching ailments.
- Therapy detail pages are available.
- Appointment booking remains out of scope.
- No appointment storage, authentication, frontend framework, or production deployment work is introduced.
- The feature remains small enough to explain during a course demo.
