const Database = require('better-sqlite3')
const db = new Database('tasks.db')

db.prepare(`
  CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT,
  priority TEXT,
  due_date TEXT
);

`).run()

module.exports = db
