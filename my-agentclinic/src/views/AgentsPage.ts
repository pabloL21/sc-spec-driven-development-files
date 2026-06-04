import { html } from 'hono/html'
import type { AgentDetail, AgentSummary } from '../data/clinicRepository'

type AgentsPageProps = {
  agents: AgentSummary[]
}

type AgentDetailPageProps = {
  agent: AgentDetail
}

export const AgentsPage = ({ agents }: AgentsPageProps) => html`<main class="site-main">
  <header class="page-header">
    <p class="eyebrow">Patients</p>
    <h1>Agents</h1>
    <p>Persisted demo patients waiting for a little operational care.</p>
  </header>

  <ul class="entity-grid">
    ${agents.map(
      (agent) => html`<li>
        <article>
          <header>
            <h2><a href="/agents/${agent.id}">${agent.name}</a></h2>
            <p>${agent.model}</p>
          </header>
          <dl class="facts">
            <div>
              <dt>Status</dt>
              <dd>${agent.status}</dd>
            </div>
            <div>
              <dt>Owner</dt>
              <dd>${agent.owner}</dd>
            </div>
          </dl>
          <p>${agent.summary}</p>
        </article>
      </li>`,
    )}
  </ul>
</main>`

export const AgentDetailPage = ({ agent }: AgentDetailPageProps) => html`<main class="site-main">
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <a href="/agents">Agents</a>
    <span>${agent.name}</span>
  </nav>

  <article>
    <header>
      <p class="eyebrow">Agent chart</p>
      <h1>${agent.name}</h1>
      <p>${agent.summary}</p>
    </header>

    <dl class="facts">
      <div>
        <dt>Model</dt>
        <dd>${agent.model}</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>${agent.status}</dd>
      </div>
      <div>
        <dt>Owner</dt>
        <dd>${agent.owner}</dd>
      </div>
    </dl>

    <section>
      <h2>Related ailments</h2>
      ${agent.ailments.length
        ? html`<ul>
            ${agent.ailments.map(
              (ailment) => html`<li>
                <a href="/ailments/${ailment.id}">${ailment.name}</a>
                <span class="tag tag-${ailment.severity.toLowerCase()}">${ailment.severity}</span>
              </li>`,
            )}
          </ul>`
        : html`<p>No active ailments. This agent may be enjoying an unusually peaceful sprint.</p>`}
    </section>
  </article>
</main>`
