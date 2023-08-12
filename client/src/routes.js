import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/project'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TaskBoardHeader from './pages/TaskBoardHeader'

const WithHeaderComponent = ({ component }) => {
	return (
		<div>
			<TaskBoardHeader />
			{component}
		</div>
	)
}

const Home = () => {
	return <div>Welcome to the homepage</div>
}

function AppRouter() {
	return (
		<Routes>
			<Route
				path='/project'
				element={<WithHeaderComponent component={<Project />} />}
			/>
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/' element={<WithHeaderComponent component={<Home />} />} />
		</Routes>
	)
}

export default AppRouter
