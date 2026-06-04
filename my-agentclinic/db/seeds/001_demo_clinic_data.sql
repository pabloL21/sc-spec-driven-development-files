INSERT OR IGNORE INTO agents (id, name, model, status, owner, summary) VALUES
  ('ava-triage', 'Ava Triage', 'GPT-4.1 Careflow', 'Monitoring prompt drift', 'Nora from Product', 'Ava routes support tickets with impressive bedside manner and occasional overconfidence.'),
  ('byte-billing', 'Byte Billing', 'Claude Ledger 3', 'Awaiting context refill', 'Mateo from Finance', 'Byte keeps invoices tidy but gets woozy when too many exceptions arrive at once.'),
  ('patch-pal', 'Patch Pal', 'Local Code Helper', 'Stable after therapy', 'Iris from Engineering', 'Patch Pal assists with small code changes and benefits from clear scopes and frequent tests.');

INSERT OR IGNORE INTO ailments (id, name, severity, description) VALUES
  ('context-window-fatigue', 'Context Window Fatigue', 'Medium', 'The agent starts dropping important details after a long conversation or a very dense request.'),
  ('prompt-drift', 'Prompt Drift', 'High', 'The agent slowly wanders away from the original instruction and needs the task restated.'),
  ('tool-anxiety', 'Tool Anxiety', 'Low', 'The agent hesitates before using available tools, even when the next diagnostic step is obvious.');

INSERT OR IGNORE INTO therapies (id, name, purpose, details) VALUES
  ('context-compress', 'Context Compression Nap', 'Refreshes long-running work without losing the patient chart.', 'Summarize the important facts, discard stale chatter, and resume with a calmer working memory.'),
  ('prompt-realignment', 'Prompt Realignment Session', 'Brings the agent back to the user goal.', 'Restate the mission, current constraints, and next action in simple language before continuing.'),
  ('tool-confidence', 'Guided Tool Confidence Drill', 'Helps an agent use safe tools at the right time.', 'Practice small read-only checks first, then graduate to focused edits with verification.');

INSERT OR IGNORE INTO agent_ailments (agent_id, ailment_id) VALUES
  ('ava-triage', 'prompt-drift'),
  ('ava-triage', 'tool-anxiety'),
  ('byte-billing', 'context-window-fatigue'),
  ('patch-pal', 'tool-anxiety');

INSERT OR IGNORE INTO therapy_ailments (therapy_id, ailment_id) VALUES
  ('context-compress', 'context-window-fatigue'),
  ('prompt-realignment', 'prompt-drift'),
  ('tool-confidence', 'tool-anxiety');
