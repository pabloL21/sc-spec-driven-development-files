import { html } from 'hono/html'
import type { AilmentDetail, AilmentSummary } from '../data/clinicRepository'

type AilmentsPageProps = {
  ailments: AilmentSummary[]
}

type AilmentDetailPageProps = {
  ailment: AilmentDetail
}

export const AilmentsPage = ({ ailments }: AilmentsPageProps) => html`<main class="site-main">
  <header class="page-header">
    <p class="eyebrow">Diagnostics</p>
    <h1>Ailments</h1>
    <p>Common conditions that can make an otherwise helpful agent need a reset.</p>
  </header>

  <div class="entity-grid">
    ${ailments.map(
      (ailment) => html`<article>
        <header>
          <h2><a href="/ailments/${ailment.id}">${ailment.name}</a></h2>
          <p><span class="tag">${ailment.severity}</span></p>
        </header>
        <p>${ailment.description}</p>
      </article>`,
    )}
  </div>
</main>`

export const AilmentDetailPage = ({ ailment }: AilmentDetailPageProps) => html`<main class="site-main">
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <a href="/ailments">Ailments</a>
    <span>${ailment.name}</span>
  </nav>

  <article>
    <header>
      <p class="eyebrow">Ailment chart</p>
      <h1>${ailment.name}</h1>
      <p><span class="tag">${ailment.severity}</span></p>
    </header>
    <p>${ailment.description}</p>

    <section>
      <h2>Affected agents</h2>
      ${ailment.agents.length
        ? html`<ul>
            ${ailment.agents.map(
              (agent) => html`<li><a href="/agents/${agent.id}">${agent.name}</a></li>`,
            )}
          </ul>`
        : html`<p>No agents are currently linked to this ailment.</p>`}
    </section>

    <section>
      <h2>Matching therapies</h2>
      ${ailment.therapies.length
        ? html`<ul>
            ${ailment.therapies.map(
              (therapy) => html`<li><a href="/therapies/${therapy.id}">${therapy.name}</a></li>`,
            )}
          </ul>`
        : html`<p>No therapy has been assigned yet.</p>`}
    </section>
  </article>
</main>`
