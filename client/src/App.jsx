import React from 'react'
import Demo from './components/Demo'
import TaskBoardHeader from './components/TaskBoardHeader'

const App = () => {
	return (
		<>
			<TaskBoardHeader />
			<h1>Task Room</h1>
			<Demo />
		</>
	)
}

export default App
