CREATE TABLE IF NOT EXISTS agents (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  status TEXT NOT NULL,
  owner TEXT NOT NULL,
  summary TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS ailments (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  severity TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS therapies (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  purpose TEXT NOT NULL,
  details TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS agent_ailments (
  agent_id TEXT NOT NULL,
  ailment_id TEXT NOT NULL,
  PRIMARY KEY (agent_id, ailment_id),
  FOREIGN KEY (agent_id) REFERENCES agents (id),
  FOREIGN KEY (ailment_id) REFERENCES ailments (id)
);

CREATE INDEX IF NOT EXISTS idx_agent_ailments_ailment_id
  ON agent_ailments (ailment_id);

CREATE TABLE IF NOT EXISTS therapy_ailments (
  therapy_id TEXT NOT NULL,
  ailment_id TEXT NOT NULL,
  PRIMARY KEY (therapy_id, ailment_id),
  FOREIGN KEY (therapy_id) REFERENCES therapies (id),
  FOREIGN KEY (ailment_id) REFERENCES ailments (id)
);

CREATE INDEX IF NOT EXISTS idx_therapy_ailments_ailment_id
  ON therapy_ailments (ailment_id);

CREATE TABLE IF NOT EXISTS appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  agent_id TEXT NOT NULL,
  ailment_id TEXT NOT NULL,
  appointment_date TEXT NOT NULL,
  notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (agent_id) REFERENCES agents (id),
  FOREIGN KEY (ailment_id) REFERENCES ailments (id)
);
