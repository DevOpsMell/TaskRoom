import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'
import { styled } from '@mui/material/styles'

const StyledCard = styled(Card)(({ snapshot, provided }) => ({
  borderRadius: '8px',
  margin: '8px',
  transform: snapshot.isDragging
    ? `${provided.draggableProps.style.transform} rotate(2deg) !important`
    : 'none',
}))

function TaskItem({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index} type="task">
      {(provided, snapshot) => (
        <StyledCard
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          key={task.id}
          snapshot={snapshot}
          provided={provided}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: '16px !important',
            }}
          >
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
              {task.title}
            </Typography>
          </CardContent>
        </StyledCard>
      )}
    </Draggable>
  )
}

export default TaskItem
