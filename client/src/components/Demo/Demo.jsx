import * as React from 'react'
import Button from '@mui/material/Button'
import TaskCardModal from '../TaskCardModal'
import SecondaryButton from '../SecondaryButton'
import PrimaryButton from '../PrimaryButton'
import DeleteButton from '../DeleteButton'
import Card from '@mui/material/Card'
const Demo = () => {
  const [isTaskCardModalOpen, setTaskCardModalOpen] = React.useState(false)
  return (
    <>
      <PrimaryButton>Save</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <Card
        sx={{
          maxWidth: 150,
        }}>
        <DeleteButton>Delete</DeleteButton>
      </Card>
      <div>
        <Button variant="contained" onClick={() => setTaskCardModalOpen(true)}>
          Demo Button
        </Button>
        {isTaskCardModalOpen && (
          <TaskCardModal onClose={() => setTaskCardModalOpen(false)} />
        )}
      </div>
    </>
  )
}
export default Demo
