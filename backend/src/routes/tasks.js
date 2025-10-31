const express = require('express')
const router = express.Router()
const taskService = require('../services/taskService')

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await taskService.getAllTasks()
  res.json(tasks)
})

// Add a new task
router.post('/', async (req, res) => {
  const { title, description, priority, due_date } = req.body
  const newTask = await taskService.addTask(title, description, priority, due_date)
  res.json(newTask)
})

module.exports = router
