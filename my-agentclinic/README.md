# AgentClinic

## Development

AgentClinic requires Node.js 24 or newer because it uses the built-in `node:sqlite`
module.

```bash
npm install
npm run db:setup
npm run build
npm start
```

The local app runs at `http://localhost:3000/` by default. `npm run db:setup`
creates the SQLite database, runs plain SQL migrations, and loads the demo
clinic data.

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.
