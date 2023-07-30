import * as React from 'react'
import Container from '@mui/material/Container'
import ModalHeader from './components/ModalHeader'

const TaskCardModal = () => {
  return (
    <Container
      style={{
        padding: 0,
      }}
      sx={{
        width: 750,
        height: 800,
        borderRadius: '8px',
        backgroundColor: '#091E420F',
        overflow: 'hidden',
      }}>
      <ModalHeader />
    </Container>
  )
}

export default TaskCardModal
