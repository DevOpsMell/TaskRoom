import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, Avatar } from '@mui/material'

export default function TaskBoardHeader() {
	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: 'transparent',
				backdropFilter: 'blur(5px)',
				elevation: '2',
				borderBottom: 'none',
			}}
		>
			<Toolbar sx={{ paddingLeft: 0, paddingRight: 0 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexGrow: 2,
						alignItems: 'center',
					}}
				>
					<Button>
						<Avatar src='/images/TR_logo.png' alt='TR_Logo' variant='rounded' />
						<Typography variant='h6' sx={{ ml: 1, color: '#42526e' }}>
							TaskRoom
						</Typography>
					</Button>
					<Box>
						<Button sx={{ color: '#42526e' }}>Project</Button>
						<Button sx={{ color: '#42526e' }}>Create</Button>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Button sx={{ color: '#42526e' }}>Login</Button>
					<Button>
						<Avatar alt='User Avatar' src='/static/images/avatar/1.jpg' />
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}
