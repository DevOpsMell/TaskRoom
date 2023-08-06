import React, { useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import http from '../../utils/axios'

function TaskItem({ taskId }) {
  const [task, setTask] = React.useState({})
  const fetchTaskData = async () => {
    try {
      const response = await http('/tasks/' + taskId, {
        method: 'GET',
      })
      setTask(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchTaskData()
  }, [])
  return (
    <Card sx={{ borderRadius: 2 }} key={task.id}>
      <CardContent>
        <Typography sx={{ fontSize: '14px', fontWeight: '400'}}>{task.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default TaskItem
