import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/project'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function Router() {
	return (
		<Routes>
			<Route path='/project' element={<Project />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	)
}

export default Router
