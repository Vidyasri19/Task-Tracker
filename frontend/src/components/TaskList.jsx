import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:4000/tasks')
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('❌ Error fetching tasks:', error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> — {task.description} ({task.priority})  
              <em> Due: {task.due_date}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList
