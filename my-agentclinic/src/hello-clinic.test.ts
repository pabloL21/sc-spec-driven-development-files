import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { Main } from './components/Main'
import { Layout } from './layout'

describe('Hello Clinic page', () => {
  const page = String(Layout(Main()))

  it('renders the AgentClinic home page', () => {
    expect(page).toContain('<title>AgentClinic</title>')
    expect(page).toContain('<h1>AgentClinic</h1>')
    expect(page).toContain('Welcome to the clinic demo')
  })

  it('uses the shared document layout and page components', () => {
    expect(page).toContain('<header class="site-header">')
    expect(page).toContain('<main class="site-main">')
    expect(page).toContain('<footer class="site-footer">')
  })

  it('links the standalone stylesheet', () => {
    expect(page).toContain('<link rel="stylesheet" href="/styles.css" />')
  })
})

describe('Hello Clinic stylesheet', () => {
  const stylesheet = readFileSync('public/styles.css', 'utf8')

  it('styles the header, main content, and footer regions', () => {
    expect(stylesheet).toContain('.site-header')
    expect(stylesheet).toContain('.site-main')
    expect(stylesheet).toContain('.site-footer')
  })
})
