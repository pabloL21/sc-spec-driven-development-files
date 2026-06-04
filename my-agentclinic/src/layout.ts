import { html } from 'hono/html'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

type LayoutOptions = {
  currentPath?: string
  title?: string
}

const pageTitle = (title = 'AgentClinic') =>
  title === 'AgentClinic' ? 'AgentClinic' : `${title} | AgentClinic`

export const Layout = (content: unknown, options: LayoutOptions = {}) => html`<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${pageTitle(options.title)}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      ${Header({ currentPath: options.currentPath })} ${content} ${Footer()}
    </body>
  </html>`
