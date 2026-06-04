import { html } from 'hono/html'

export const NotFoundPage = () => html`<main class="site-main">
  <article>
    <header>
      <p class="eyebrow">Chart missing</p>
      <h1>Not found</h1>
    </header>
    <p>The requested clinic record is not available.</p>
    <p><a href="/">Return to AgentClinic</a></p>
  </article>
</main>`
