import React from 'react'
import { Card, CardHeader, Typography } from '@mui/material'
import TaskItem from '../TaskItem'
import { Droppable } from 'react-beautiful-dnd'
import { styled } from '@mui/material/styles'

const StyledCard = styled(Card)(( ) => ({
  width: 256,
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  padding: 1,
  backgroundColor: '#F1F2F4',
  '& .columnTitle': {
    fontSize: '14px',
    fontWeight: '500',
  },
}))

function Column({ column }) {
  return (
    <StyledCard>
      <CardHeader
        key={column.id}
        title={<Typography className="columnTitle">{column.name}</Typography>}
      />
      <Droppable droppableId={column.id} type="task">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {column.tasks &&
              column.tasks.map((task, index) => (
                <TaskItem task={task} key={task.id} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </StyledCard>
  )
}

export default Column
