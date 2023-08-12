import React from 'react'
import { Grid, Box } from '@mui/material'
import TaskColumn from '../../components/Column'

const columns = [
	'64cc4e846387ebfd6a25b558',
	'64cc501e283fcdff2341d70a',
	'64cc506d283fcdff2341d70c',
]

function Project() {
	return (
		<Box
			sx={{
				height: '900px',
				backgroundImage:
					'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2386x1600/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg")',
				backgroundSize: 'cover',
			}}
		>
			<Grid container spacing={0}>
				{columns.map((column) => (
					<Grid item xs={12} sm={'auto'} key={column} sx={{ margin: '6px' }}>
						<TaskColumn columnId={column} key={column} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Project
