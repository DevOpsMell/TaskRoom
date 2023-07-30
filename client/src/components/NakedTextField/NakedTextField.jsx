import * as React from 'react'
import TextField from '@mui/material/TextField'

const NakedTextField = ({ fontSize }) => {
  return (
    <div>
      <TextField
        variant="standard"
        style={{ width: '100%' }}
        InputProps={{ disableUnderline: true, style: { fontSize } }}
      />
    </div>
  )
}
export default NakedTextField
