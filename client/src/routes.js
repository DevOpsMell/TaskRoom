import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Project from './pages/project'
import TaskBoardHeader from './pages/TaskBoardHeader'

const Router = [
	{ path: '/', component: HomePage, header: true },
	{ path: '/register', component: RegisterPage },
	{ path: '/login', component: LoginPage },
	{ path: '/project', component: Project, header: true },
]

function AppRouter() {
	return (
		<Routes>
			{Router.map(({ path, component: Component, header }) => (
				<Route
					key={path}
					path={path}
					element={
						header ? (
							<>
								<TaskBoardHeader />
								<Component />
							</>
						) : (
							<Component />
						)
					}
				/>
			))}
		</Routes>
	)
}

export default AppRouter
