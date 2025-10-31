import React, { useEffect, useState } from 'react'

const InsightsPanel = () => {
  const [insights, setInsights] = useState({
    total: 0,
    highPriority: 0,
    dueSoon: 0,
  })

  const fetchInsights = async () => {
    try {
      const response = await fetch('http://localhost:4000/tasks')
      const data = await response.json()

      const total = data.length
      const highPriority = data.filter((task) => task.priority === 'High').length

      const today = new Date()
      const dueSoon = data.filter((task) => {
        const due = new Date(task.due_date)
        const diff = (due - today) / (1000 * 60 * 60 * 24)
        return diff <= 3 && diff >= 0
      }).length

      setInsights({ total, highPriority, dueSoon })
    } catch (error) {
      console.error('❌ Error fetching insights:', error)
    }
  }

  useEffect(() => {
    fetchInsights()
  }, [])

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h2>Smart Insights</h2>
      <p>📋 Total Tasks: {insights.total}</p>
      <p>🔥 High Priority: {insights.highPriority}</p>
      <p>⏰ Due Soon: {insights.dueSoon}</p>
    </div>
  )
}

export default InsightsPanel
