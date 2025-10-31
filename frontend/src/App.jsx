import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import InsightsPanel from './components/InsightsPanel'

function App() {
  const [refresh, setRefresh] = useState(false)

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Task Tracker with Smart Insights</h1>
      <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
      <TaskList key={refresh} />
      <InsightsPanel key={refresh + '-insights'} />
    </div>
  )
}

export default App
