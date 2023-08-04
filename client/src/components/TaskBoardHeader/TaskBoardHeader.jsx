import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, Avatar } from '@mui/material'

export default function TaskBoardHeader() {
	return (
		<Box sx={{ flexGrow: 1, display: 'flex' }}>
			<AppBar position='static' sx={{ backgroundColor: 'transparent' }}>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, color: '#42526e' }}
					>
						<img
							src='../../public/images/TR_logo.png'
							alt='TR_Logo'
							style={{ height: '40px', marginRight: '10px' }}
						/>
						TaskRoom
					</Typography>
					<Button sx={{ color: '#42526e' }}>Project</Button>
					<Button sx={{ color: '#42526e' }}>Create</Button>
					<Button sx={{ color: '#42526e' }}>Login</Button>
					<Button>
						<Avatar alt='User Avatar' src='/static/images/avatar/1.jpg' />
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
