const db = require('../db/database')

async function getAllTasks() {
  return db.prepare('SELECT * FROM tasks').all()
}

async function addTask(title, description, priority, due_date) {
  const stmt = db.prepare('INSERT INTO tasks (title, description, priority, due_date) VALUES (?, ?, ?, ?)')
  const info = stmt.run(title, description, priority, due_date)
  return { id: info.lastInsertRowid, title, description, priority, due_date }
}

module.exports = { getAllTasks, addTask }
