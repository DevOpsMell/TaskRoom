import * as React from 'react'
import Button from '@mui/material/Button'

const PrimaryButton = ({ children }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        }}>
        {children}
      </Button>
    </>
  )
}

export default PrimaryButton
