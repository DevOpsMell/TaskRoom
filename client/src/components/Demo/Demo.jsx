import * as React from 'react'
import Button from '@mui/material/Button'
import TaskCardModal from '../TaskCardModal'

const Demo = () => {
  const [isTaskCardModalOpen, setTaskCardModalOpen] = React.useState(false)
  return (
    <div>
      <Button variant="contained" onClick={() => setTaskCardModalOpen(true)}>
        Demo Button
      </Button>
      {isTaskCardModalOpen && (
        <TaskCardModal onClose={() => setTaskCardModalOpen(false)} />
      )}
    </div>
  )
}

export default Demo
