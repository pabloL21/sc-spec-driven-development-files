import { readFileSync } from 'node:fs'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createApp } from './app'
import { createClinicRepository } from './data/clinicRepository'
import { createDatabase, prepareDatabase, type ClinicDatabase } from './db/database'
import { Layout } from './layout'
import { HomePage } from './views/HomePage'

let database: ClinicDatabase
let app: ReturnType<typeof createApp>

beforeAll(() => {
  database = prepareDatabase(createDatabase(':memory:'))
  app = createApp(createClinicRepository(database))
})

afterAll(() => {
  database.close()
})

const getText = async (path: string) => {
  const response = await app.request(path)
  return {
    status: response.status,
    text: await response.text(),
  }
}

describe('Clinic dashboard layout', () => {
  const page = String(Layout(HomePage()))

  it('renders the AgentClinic home page with shared navigation', () => {
    expect(page).toContain('<title>AgentClinic</title>')
    expect(page).toContain('<h1>AgentClinic</h1>')
    expect(page).toContain('Agents')
    expect(page).toContain('Ailments')
    expect(page).toContain('Therapies')
    expect(page).toContain('Appointments')
  })

  it('links PicoCSS and the local stylesheet', () => {
    expect(page).toContain('@picocss/pico')
    expect(page).toContain('<link rel="stylesheet" href="/styles.css" />')
  })
})

describe('SQLite-backed dashboard pages', () => {
  it('renders the seeded agents page', async () => {
    const response = await getText('/agents')

    expect(response.status).toBe(200)
    expect(response.text).toContain('Ava Triage')
    expect(response.text).toContain('GPT-4.1 Careflow')
    expect(response.text).toContain('Nora from Product')
  })

  it('renders an agent detail page with related ailments', async () => {
    const response = await getText('/agents/ava-triage')

    expect(response.status).toBe(200)
    expect(response.text).toContain('Ava Triage')
    expect(response.text).toContain('Prompt Drift')
    expect(response.text).toContain('Tool Anxiety')
  })

  it('renders the seeded ailments page', async () => {
    const response = await getText('/ailments')

    expect(response.status).toBe(200)
    expect(response.text).toContain('Context Window Fatigue')
    expect(response.text).toContain('Prompt Drift')
    expect(response.text).toContain('High')
  })

  it('renders the seeded therapies page', async () => {
    const response = await getText('/therapies')

    expect(response.status).toBe(200)
    expect(response.text).toContain('Context Compression Nap')
    expect(response.text).toContain('Prompt Realignment Session')
  })

  it('renders a therapy detail page with matching ailments', async () => {
    const response = await getText('/therapies/prompt-realignment')

    expect(response.status).toBe(200)
    expect(response.text).toContain('Prompt Realignment Session')
    expect(response.text).toContain('Prompt Drift')
  })

  it('renders an appointments placeholder without booking behavior', async () => {
    const response = await getText('/appointments')

    expect(response.status).toBe(200)
    expect(response.text).toContain('Coming in Phase 3')
    expect(response.text).toContain('fieldset disabled')
  })

  it('returns a not found page for a missing agent', async () => {
    const response = await getText('/agents/missing-agent')

    expect(response.status).toBe(404)
    expect(response.text).toContain('Not found')
  })
})

describe('AgentClinic stylesheet', () => {
  const stylesheet = readFileSync('public/styles.css', 'utf8')

  it('keeps local styles focused on the app shell and dashboard pieces', () => {
    expect(stylesheet).toContain('.site-header')
    expect(stylesheet).toContain('.entity-grid')
    expect(stylesheet).toContain('.tag')
  })
})
