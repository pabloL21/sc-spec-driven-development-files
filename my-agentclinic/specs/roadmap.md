# AgentClinic Roadmap

## Phase 1: Hello Clinic

Create the smallest running Hono server.

- Add a local web server.
- Render a simple AgentClinic home page.
- Show the product name and a short welcome message.
- Verify the app opens in a browser.

## Phase 2: Clinic Dashboard Foundation and Persistence

Make the demo look like a small clinic dashboard with the first persisted domain pages.

- Add shared HTML layout helpers.
- Add PicoCSS for baseline typography, spacing, forms, and navigation.
- Create links for Agents, Ailments, Therapies, and Appointments.
- Keep all pages server-rendered.
- Add SQLite.
- Create plain SQL migrations for agents, ailments, therapies, appointments, and relationship tables.
- Seed the database with demo data.
- Replace hard-coded reads with database queries.
- Create a small persisted list of agents.
- Show agent name, model, status, and owner.
- Add an agent detail page.
- Create a persisted ailment list.
- Include name, severity, and description.
- Link ailments to affected agents when useful.
- Make the page easy to scan during a demo.
- Create a persisted therapy list.
- Show therapy name, purpose, and matching ailments.
- Add therapy details.
- Keep therapy language playful but useful.

## Phase 3: Appointments

Let users book a simple appointment.

- Add an appointment form.
- Capture agent, ailment, date, and notes.
- Show submitted appointments from SQLite.
- Validate required fields.

## Phase 4: Demo Polish

Make the app reliable and attractive for course demos.

- Improve empty states and error messages.
- Add small visual details that support the clinic theme.
- Check pages in a modern browser at desktop and mobile widths.
- Update README instructions for running the project.

## Phase 5: Validation Pass

Confirm the project matches the constitution.

- Verify each main workflow manually.
- Check that the implementation still fits the simple course/demo scope.
- Record any follow-up ideas without expanding the MVP.
