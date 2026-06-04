import { mkdirSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const projectRoot = process.env.PROJECT_ROOT ?? process.cwd()
const migrationsDirectory = join(projectRoot, 'db', 'migrations')
const seedsDirectory = join(projectRoot, 'db', 'seeds')
const defaultDatabasePath = join(projectRoot, 'data', 'agentclinic.sqlite')

export type ClinicDatabase = DatabaseSync

type MigrationRow = {
  file_name: string
}

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
    .map((fileName) => ({
      fileName,
      sql: readFileSync(join(directory, fileName), 'utf8'),
    }))

export const runMigrations = (database: ClinicDatabase) => {
  database.exec(`CREATE TABLE IF NOT EXISTS schema_migrations (
    file_name TEXT PRIMARY KEY,
    applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );`)

  const hasMigration = database.prepare('SELECT file_name FROM schema_migrations WHERE file_name = ?')
  const recordMigration = database.prepare('INSERT INTO schema_migrations (file_name) VALUES (?)')

  for (const { fileName, sql } of readSqlFiles(migrationsDirectory)) {
    const existingMigration = hasMigration.get(fileName) as MigrationRow | undefined

    if (existingMigration) {
      continue
    }

    try {
      database.exec('BEGIN;')
      database.exec(sql)
      recordMigration.run(fileName)
      database.exec('COMMIT;')
    } catch (error) {
      database.exec('ROLLBACK;')
      throw error
    }
  }
}

export const seedDatabase = (database: ClinicDatabase) => {
  for (const { sql } of readSqlFiles(seedsDirectory)) {
    database.exec(sql)
  }
}

export const prepareDatabase = (database = createDatabase()) => {
  runMigrations(database)
  seedDatabase(database)

  return database
}
