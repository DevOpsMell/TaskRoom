import * as React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconTitle from '../IconTitle'
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined'
import NakedTextField from '../../../NakedTextField'
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined'
import LensOutlinedIcon from '@mui/icons-material/LensOutlined'
import TaskCardDetailSideBar from './components/TaskCardDetailSideBar/TaskCardDetailSideBar'

const TaskCardDetails = () => {
  return (
    <Container style={{ padding: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <div style={{ marginTop: '10px' }}>
            <IconTitle
              title="Description"
              icon={<FormatAlignLeftOutlinedIcon sx={{ fontSize: '20px' }} />}
            />
            <NakedTextField
              style={{
                borderRadius: '5px',
                marginLeft: '35px',
                marginTop: '10px',
                width: '93%',
                height: '50px',
                backgroundColor: '#091e420f',
              }}
            />
          </div>
          <div style={{ marginTop: '40px' }}>
            <IconTitle
              title="Activity"
              icon={<ViewListOutlinedIcon sx={{ fontSize: '20px' }} />}
            />
            <div style={{ marginTop: '10px' }}>
              <IconTitle
                icon={<LensOutlinedIcon sx={{ fontSize: '20px' }} />}
                title={
                  <NakedTextField fontSize={20} style={{ width: '100%' }} />
                }
                style={{
                  width: '550px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ marginTop: '10px' }}></div>
          <TaskCardDetailSideBar />
        </Grid>
      </Grid>
    </Container>
  )
}

export default TaskCardDetails
