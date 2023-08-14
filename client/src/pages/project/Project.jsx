import React from 'react'
import { Grid, Box } from '@mui/material'
import TaskColumn from '../../components/Column'
import http from '../../utils/axios'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const projectId = '64d7815282e097a192a9e89e'


function Project() {
  const [columnData, setColumnData] = React.useState([])

  const fetchColumnData = async () => {
    try {
      const response = await http(`/projects/data/${projectId}`, {
        method: 'GET',
      })
      console.log('response.data', response.data.columns)
      setColumnData(response.data.columns)
    } catch (err) {
      console.log(err)
    }
  }

  const onDragStart = (result) => {
    console.log('onDragStart', result)
  }

  const onDragEnd = async (result) => {
    const { source, destination, type } = result
    if (!destination) return
    const columnDataBackup = [...columnData]

    if (type === 'column') {
      const newColumnOrder = [...columnData]
      const movedColumn = newColumnOrder.splice(source.index, 1)[0]
      newColumnOrder.splice(destination.index, 0, movedColumn)

      setColumnData(newColumnOrder)

      const updateResponse = await http(`/projects/${projectId}`, {
        method: 'PATCH',
        data: {
          columns: newColumnOrder.map((column) => column.id),
        },
      })

      updateResponse.status !== 204 && setColumnData(columnDataBackup)
    } else if (source.droppableId === destination.droppableId) {
      // Reorder tasks within the same column
      const newColumnData = [...columnData]
      const column = newColumnData.find(
        (column) => column.id === source.droppableId
      )
      const newTasks = [...column.tasks]
      const [movedTask] = newTasks.splice(source.index, 1)
      newTasks.splice(destination.index, 0, movedTask)
      column.tasks = newTasks

      const updateTasksOrderRes = await http(`/columns/${source.droppableId}`, {
        method: 'PATCH',
        data: {
          tasks: newTasks.map((task) => task.id),
        },
      })
      setColumnData(newColumnData)

      updateTasksOrderRes.status !== 204 && setColumnData(columnDataBackup)
    } else {
      // Move tasks from one column to another
      const newColumnData = [...columnData]
      const sourceColumnIndex = newColumnData.findIndex(
        (column) => column.id === source.droppableId
      )
      const destinationColumnIndex = newColumnData.findIndex(
        (column) => column.id === destination.droppableId
      )
      const task = newColumnData[sourceColumnIndex].tasks.splice(
        source.index,
        1
      )[0]
      newColumnData[destinationColumnIndex].tasks.splice(
        destination.index,
        0,
        task
      )

      setColumnData(newColumnData)

      const updateSourceTasksOrderRes = await http(
        `/columns/${source.droppableId}`,
        {
          method: 'PATCH',
          data: {
            tasks: newColumnData[sourceColumnIndex].tasks.map(
              (task) => task.id
            ),
          },
        }
      )
      if (updateSourceTasksOrderRes.status !== 204) {
        setColumnData(columnDataBackup)
        return
      }
      const updateDestinationTasksOrderRes = await http(
        `/columns/${destination.droppableId}`,
        {
          method: 'PATCH',
          data: {
            tasks: newColumnData[destinationColumnIndex].tasks.map(
              (task) => task.id
            ),
          },
        }
      )
      if (updateDestinationTasksOrderRes.status !== 204) {
        setColumnData(columnDataBackup)
        return
      }
    }
  }

  React.useEffect(() => {
    fetchColumnData()
  }, [])

  return (
    <Box>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Grid
              container
              spacing={0}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnData.map((column, index) => (
                <Draggable
                  key={column.id}
                  draggableId={column.id}
                  index={index}
                >
                  {(provided) => (
                    <Grid
                      item
                      xs={12}
                      sm={'auto'}
                      key={column.id}
                      sx={{ margin: '6px' }}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TaskColumn column={column} key={column.id} />
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  )
}

export default Project
