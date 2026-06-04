import { html } from 'hono/html'
import type { TherapyDetail, TherapyListItem } from '../data/clinicRepository'

type TherapiesPageProps = {
  therapies: TherapyListItem[]
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

  <ul class="entity-grid">
    ${therapies.map(
      (therapy) => html`<li>
        <article>
          <header>
            <h2><a href="/therapies/${therapy.id}">${therapy.name}</a></h2>
            <p>${therapy.purpose}</p>
          </header>
          <p>${therapy.details}</p>
          <footer>
            <strong>Matching ailments:</strong>
            ${therapy.ailments.map(
              (ailment) => html`<a href="/ailments/${ailment.id}" class="tag tag-${ailment.severity.toLowerCase()}">${ailment.name}</a>`,
            )}
          </footer>
        </article>
      </li>`,
    )}
  </ul>
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
                <span class="tag tag-${ailment.severity.toLowerCase()}">${ailment.severity}</span>
              </li>`,
            )}
          </ul>`
        : html`<p>No ailments are currently linked to this therapy.</p>`}
    </section>
  </article>
</main>`
