import * as React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import DvrIcon from '@mui/icons-material/Dvr'
import NakedTextField from '../../../NakedTextField'
import ClearIcon from '@mui/icons-material/Clear'
import Button from '@mui/material/Button'
// import Paper from '@mui/material/Paper'

const ModalHeader = () => {
  return (
    <Container
      style={{ padding: '20px 0px 0px 30px' }}
      sx={{
        height: '10%',
        // backgroundColor: 'red',
      }}>
      <Grid container direction="column">
        <Grid item>
          <span>
            <Grid
              container
              direction="row"
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Grid item>
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <DvrIcon sx={{ fontSize: '20px' }} />
                  <div style={{ width: '600px' }}>
                    <NakedTextField fontSize={20} />
                  </div>
                </Box>
              </Grid>
              <Grid item>
                <Button variant="text" sx={{ color: 'black' }}>
                  <ClearIcon sx={{ fontSize: '20px' }} />
                </Button>
              </Grid>
            </Grid>
          </span>
        </Grid>
        <Grid item>
          <span
            style={{ marginLeft: '38px', fontSize: '14px', color: '#44546f' }}>
            in list <u>Current Sprint</u>
          </span>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ModalHeader
