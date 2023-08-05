import * as React from 'react'
import Container from '@mui/material/Container'
import ModalHeader from './components/ModalHeader'
import TaskCardDetails from './components/TaskCardDetails'

const TaskCardModal = ({ onClose }) => {
  return (
    <Container
      style={{
        padding: '0px 0px 30px 0px',
      }}
      sx={{
        width: 750,
        height: 600,
        borderRadius: '8px',
        backgroundColor: '#091E420F',
        overflow: 'hidden',
      }}>
      <Container
        style={{ padding: '20px 0px 0px 30px' }}
        sx={{
          height: '10%',
        }}>
        <ModalHeader onClose={onClose} />
      </Container>
      <Container
        style={{ padding: '20px 0px 0px 30px', marginTop: '20px' }}
        sx={{
          height: '10%',
        }}>
        <TaskCardDetails />
      </Container>
    </Container>
  )
}

export default TaskCardModal
