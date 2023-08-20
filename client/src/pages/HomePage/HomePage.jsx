import React from 'react'
import VideoBackground from './VideoBackground'
import WaveOverlay from './WaveOverlay'
import VideoContent from './VideoContent'

import './styles.css'
import { Box } from '@mui/material'


const HomePage = () => {
  return (
      <Box sx={{
				position: 'relative',
				height: '500px',
			}}>
        <VideoBackground />
				<VideoContent />
        <WaveOverlay />
      </Box>
  )
}

export default HomePage
