import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import type { ClinicRepository } from './data/clinicRepository'
import { Layout } from './layout'
import { AgentDetailPage, AgentsPage } from './views/AgentsPage'
import { AilmentDetailPage, AilmentsPage } from './views/AilmentsPage'
import { AppointmentsPage } from './views/AppointmentsPage'
import { HomePage } from './views/HomePage'
import { NotFoundPage } from './views/NotFoundPage'
import { TherapiesPage, TherapyDetailPage } from './views/TherapiesPage'

export const createApp = (clinic: ClinicRepository) => {
  const app = new Hono()

  app.get('/styles.css', serveStatic({ path: './public/styles.css' }))

  app.get('/', (c) => c.html(Layout(HomePage(), { currentPath: '/', title: 'AgentClinic' })))

  app.get('/agents', (c) =>
    c.html(Layout(AgentsPage({ agents: clinic.listAgents() }), { currentPath: '/agents', title: 'Agents' })),
  )

  app.get('/agents/:id', (c) => {
    const agent = clinic.getAgent(c.req.param('id'))

    if (!agent) {
      return c.html(Layout(NotFoundPage(), { currentPath: '/agents', title: 'Not found' }), 404)
    }

    return c.html(Layout(AgentDetailPage({ agent }), { currentPath: '/agents', title: agent.name }))
  })

  app.get('/ailments', (c) =>
    c.html(
      Layout(AilmentsPage({ ailments: clinic.listAilments() }), {
        currentPath: '/ailments',
        title: 'Ailments',
      }),
    ),
  )

  app.get('/ailments/:id', (c) => {
    const ailment = clinic.getAilment(c.req.param('id'))

    if (!ailment) {
      return c.html(Layout(NotFoundPage(), { currentPath: '/ailments', title: 'Not found' }), 404)
    }

    return c.html(Layout(AilmentDetailPage({ ailment }), { currentPath: '/ailments', title: ailment.name }))
  })

  app.get('/therapies', (c) =>
    c.html(
      Layout(TherapiesPage({ therapies: clinic.listTherapies() }), {
        currentPath: '/therapies',
        title: 'Therapies',
      }),
    ),
  )

  app.get('/therapies/:id', (c) => {
    const therapy = clinic.getTherapy(c.req.param('id'))

    if (!therapy) {
      return c.html(Layout(NotFoundPage(), { currentPath: '/therapies', title: 'Not found' }), 404)
    }

    return c.html(Layout(TherapyDetailPage({ therapy }), { currentPath: '/therapies', title: therapy.name }))
  })

  app.get('/appointments', (c) =>
    c.html(Layout(AppointmentsPage(), { currentPath: '/appointments', title: 'Appointments' })),
  )

  return app
}
