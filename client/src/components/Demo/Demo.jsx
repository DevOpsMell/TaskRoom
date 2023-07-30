import React from 'react'
import SecondaryButton from '../SecondaryButton'
import PrimaryButton from '../PrimaryButton'
import DeleteButton from '../DeleteButton'
import Card from '@mui/material/Card'

const Demo = () => (
  <>
    <PrimaryButton>Save</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <Card
      sx={{
        maxWidth: 150,
      }}>
      <DeleteButton>Delete</DeleteButton>
    </Card>
  </>
)

export default Demo
