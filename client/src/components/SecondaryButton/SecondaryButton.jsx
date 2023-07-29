import * as React from 'react'
import Button from '@mui/material/Button'

const SecondaryButton = ({ children }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#091e420f',
          color: '#44546F',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#091E4224',
            boxShadow: 'none',
          },
        }}>
        {children}
      </Button>
    </>
  )
}

export default SecondaryButton
