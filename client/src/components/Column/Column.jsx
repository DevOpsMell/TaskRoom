import React from 'react'
import { Card, CardHeader, Typography } from '@mui/material'
import TaskItem from '../TaskItem'
import http from '../../utils/axios'

function Column({ columnId }) {

  const [columnData, setColumnData] = React.useState({})
  const fetchColumnData = async () => {
    try {
      const response = await http('/columns/' + columnId, {
        method: 'GET',
      })
      setColumnData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    fetchColumnData()
  }, [])

  return (
    <Card
      sx={{
        width: 256,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        padding: 1,
        backgroundColor: '#F1F2F4',
      }}
    >
      <CardHeader
        key={columnData.id}
        title={
          <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
            {columnData.name}
          </Typography>
        }
      />
      {columnData.tasks &&
        columnData.tasks.map((task) => <TaskItem taskId={task} key={task} />)}
    </Card>
  )
}

export default Column
