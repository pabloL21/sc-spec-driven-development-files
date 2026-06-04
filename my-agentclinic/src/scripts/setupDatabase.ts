import { prepareDatabase } from '../db/database'

const database = prepareDatabase()
database.close()

console.log('AgentClinic SQLite database is ready.')
