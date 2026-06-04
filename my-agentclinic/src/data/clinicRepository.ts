import type { ClinicDatabase } from '../db/database'

export type AgentSummary = {
  id: string
  name: string
  model: string
  status: string
  owner: string
  summary: string
}

export type AilmentSummary = {
  id: string
  name: string
  severity: string
  description: string
}

export type TherapySummary = {
  id: string
  name: string
  purpose: string
  details: string
}

export type AgentDetail = AgentSummary & {
  ailments: AilmentSummary[]
}

export type AilmentDetail = AilmentSummary & {
  agents: AgentSummary[]
  therapies: TherapySummary[]
}

export type TherapyDetail = TherapySummary & {
  ailments: AilmentSummary[]
}

type AgentRow = AgentSummary
type AilmentRow = AilmentSummary
type TherapyRow = TherapySummary

export type ClinicRepository = ReturnType<typeof createClinicRepository>

export const createClinicRepository = (database: ClinicDatabase) => {
  const listAgents = () =>
    database
      .prepare(
        `SELECT id, name, model, status, owner, summary
         FROM agents
         ORDER BY name`,
      )
      .all() as AgentRow[]

  const listAilments = () =>
    database
      .prepare(
        `SELECT id, name, severity, description
         FROM ailments
         ORDER BY
           CASE severity
             WHEN 'High' THEN 1
             WHEN 'Medium' THEN 2
             ELSE 3
           END,
           name`,
      )
      .all() as AilmentRow[]

  const listTherapies = () =>
    database
      .prepare(
        `SELECT id, name, purpose, details
         FROM therapies
         ORDER BY name`,
      )
      .all() as TherapyRow[]

  const getAgent = (id: string) => {
    const agent = database
      .prepare(
        `SELECT id, name, model, status, owner, summary
         FROM agents
         WHERE id = ?`,
      )
      .get(id) as AgentRow | undefined

    if (!agent) {
      return undefined
    }

    const ailments = database
      .prepare(
        `SELECT ailments.id, ailments.name, ailments.severity, ailments.description
         FROM ailments
         INNER JOIN agent_ailments ON agent_ailments.ailment_id = ailments.id
         WHERE agent_ailments.agent_id = ?
         ORDER BY ailments.name`,
      )
      .all(id) as AilmentRow[]

    return { ...agent, ailments }
  }

  const getAilment = (id: string) => {
    const ailment = database
      .prepare(
        `SELECT id, name, severity, description
         FROM ailments
         WHERE id = ?`,
      )
      .get(id) as AilmentRow | undefined

    if (!ailment) {
      return undefined
    }

    const agents = database
      .prepare(
        `SELECT agents.id, agents.name, agents.model, agents.status, agents.owner, agents.summary
         FROM agents
         INNER JOIN agent_ailments ON agent_ailments.agent_id = agents.id
         WHERE agent_ailments.ailment_id = ?
         ORDER BY agents.name`,
      )
      .all(id) as AgentRow[]

    const therapies = database
      .prepare(
        `SELECT therapies.id, therapies.name, therapies.purpose, therapies.details
         FROM therapies
         INNER JOIN therapy_ailments ON therapy_ailments.therapy_id = therapies.id
         WHERE therapy_ailments.ailment_id = ?
         ORDER BY therapies.name`,
      )
      .all(id) as TherapyRow[]

    return { ...ailment, agents, therapies }
  }

  const getTherapy = (id: string) => {
    const therapy = database
      .prepare(
        `SELECT id, name, purpose, details
         FROM therapies
         WHERE id = ?`,
      )
      .get(id) as TherapyRow | undefined

    if (!therapy) {
      return undefined
    }

    const ailments = database
      .prepare(
        `SELECT ailments.id, ailments.name, ailments.severity, ailments.description
         FROM ailments
         INNER JOIN therapy_ailments ON therapy_ailments.ailment_id = ailments.id
         WHERE therapy_ailments.therapy_id = ?
         ORDER BY ailments.name`,
      )
      .all(id) as AilmentRow[]

    return { ...therapy, ailments }
  }

  return {
    getAgent,
    getAilment,
    getTherapy,
    listAgents,
    listAilments,
    listTherapies,
  }
}
