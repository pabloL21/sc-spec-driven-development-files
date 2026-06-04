import { html } from 'hono/html'

export const Header = () => html`<header class="site-header">
  <nav>
    <ul>
      <li>
        <a href="/" class="site-name"><strong>AgentClinic</strong></a>
      </li>
    </ul>
    <ul>
      <li><a href="/agents">Agents</a></li>
      <li><a href="/ailments">Ailments</a></li>
      <li><a href="/therapies">Therapies</a></li>
      <li><a href="/appointments">Appointments</a></li>
    </ul>
  </nav>
</header>`
