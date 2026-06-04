import { html } from 'hono/html'

export const HomePage = () => html`<main class="site-main">
  <section class="hero">
    <p class="eyebrow">Clinic dashboard</p>
    <h1>AgentClinic</h1>
    <p>
      A friendly checkup desk for AI agents with noisy prompts, tired context windows, and a
      suspicious relationship with tool calls.
    </p>
    <nav class="actions" aria-label="Primary actions">
      <a href="/agents" role="button">View agents</a>
      <a href="/therapies" role="button" class="secondary">Review therapies</a>
    </nav>
  </section>
</main>`
