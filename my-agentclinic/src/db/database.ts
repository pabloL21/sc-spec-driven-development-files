import { mkdirSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const migrationsDirectory = join(process.cwd(), 'db', 'migrations')
const seedsDirectory = join(process.cwd(), 'db', 'seeds')
const defaultDatabasePath = join(process.cwd(), 'data', 'agentclinic.sqlite')

export type ClinicDatabase = DatabaseSync

export const createDatabase = (databasePath = process.env.DATABASE_PATH ?? defaultDatabasePath) => {
  if (databasePath !== ':memory:') {
    mkdirSync(dirname(databasePath), { recursive: true })
  }

  const database = new DatabaseSync(databasePath)
  database.exec('PRAGMA foreign_keys = ON;')

  return database
}

const readSqlFiles = (directory: string) =>
  readdirSync(directory)
    .filter((fileName) => fileName.endsWith('.sql'))
    .sort()
    .map((fileName) => readFileSync(join(directory, fileName), 'utf8'))

export const runMigrations = (database: ClinicDatabase) => {
  for (const sql of readSqlFiles(migrationsDirectory)) {
    database.exec(sql)
  }
}

export const seedDatabase = (database: ClinicDatabase) => {
  for (const sql of readSqlFiles(seedsDirectory)) {
    database.exec(sql)
  }
}

export const prepareDatabase = (database = createDatabase()) => {
  runMigrations(database)
  seedDatabase(database)

  return database
}
