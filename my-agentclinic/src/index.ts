import { serve } from '@hono/node-server'
import { createApp } from './app'
import { createClinicRepository } from './data/clinicRepository'
import { prepareDatabase } from './db/database'

const database = prepareDatabase()
const app = createApp(createClinicRepository(database))
const port = Number(process.env.PORT) || 3000

serve({
  fetch: app.fetch,
  port,
})

console.log(`AgentClinic is running at http://localhost:${port}`)
