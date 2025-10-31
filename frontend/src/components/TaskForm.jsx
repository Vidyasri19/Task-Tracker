import React, { useState } from 'react'

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const taskData = {
      title,
      description,
      priority,
      due_date: dueDate,
    }

    try {
      const response = await fetch('http://localhost:4000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })

      if (!response.ok) {
        throw new Error('Failed to add task')
      }

      const newTask = await response.json()
      console.log('✅ Task added:', newTask)
      if (onTaskAdded) onTaskAdded(newTask)

      // Reset form fields
      setTitle('')
      setDescription('')
      setPriority('Medium')
      setDueDate('')
    } catch (error) {
      console.error('❌ Error adding task:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
