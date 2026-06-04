import { html } from 'hono/html'

type HeaderProps = {
  currentPath?: string
}

const navLink = (href: string, label: string, currentPath = '/') => {
  const isCurrent = href === '/' ? currentPath === '/' : currentPath.startsWith(href)

  return isCurrent
    ? html`<li><a href="${href}" aria-current="page" class="active">${label}</a></li>`
    : html`<li><a href="${href}">${label}</a></li>`
}

export const Header = ({ currentPath = '/' }: HeaderProps = {}) => html`<header class="site-header">
  <nav>
    <ul>
      <li>
        <a href="/" class="site-name"><strong>AgentClinic</strong></a>
      </li>
    </ul>
    <ul>
      ${navLink('/', 'Home', currentPath)} ${navLink('/agents', 'Agents', currentPath)}
      ${navLink('/ailments', 'Ailments', currentPath)}
      ${navLink('/therapies', 'Therapies', currentPath)}
      ${navLink('/appointments', 'Appointments', currentPath)}
    </ul>
  </nav>
</header>`
