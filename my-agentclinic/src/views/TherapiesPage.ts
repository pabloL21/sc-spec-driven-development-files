import { html } from 'hono/html'
import type { TherapyDetail, TherapySummary } from '../data/clinicRepository'

type TherapiesPageProps = {
  therapies: TherapySummary[]
}

type TherapyDetailPageProps = {
  therapy: TherapyDetail
}

export const TherapiesPage = ({ therapies }: TherapiesPageProps) => html`<main class="site-main">
  <header class="page-header">
    <p class="eyebrow">Treatments</p>
    <h1>Therapies</h1>
    <p>Small interventions for agents that need a better prompt, calmer context, or braver tools.</p>
  </header>

  <div class="entity-grid">
    ${therapies.map(
      (therapy) => html`<article>
        <header>
          <h2><a href="/therapies/${therapy.id}">${therapy.name}</a></h2>
          <p>${therapy.purpose}</p>
        </header>
        <p>${therapy.details}</p>
      </article>`,
    )}
  </div>
</main>`

export const TherapyDetailPage = ({ therapy }: TherapyDetailPageProps) => html`<main class="site-main">
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <a href="/therapies">Therapies</a>
    <span>${therapy.name}</span>
  </nav>

  <article>
    <header>
      <p class="eyebrow">Therapy notes</p>
      <h1>${therapy.name}</h1>
      <p>${therapy.purpose}</p>
    </header>
    <p>${therapy.details}</p>

    <section>
      <h2>Matching ailments</h2>
      ${therapy.ailments.length
        ? html`<ul>
            ${therapy.ailments.map(
              (ailment) => html`<li>
                <a href="/ailments/${ailment.id}">${ailment.name}</a>
                <span class="tag">${ailment.severity}</span>
              </li>`,
            )}
          </ul>`
        : html`<p>No ailments are currently linked to this therapy.</p>`}
    </section>
  </article>
</main>`
