import React from 'react'
import { BrowserRouter } from 'react-router-dom';
// import Demo from './components/Demo'
import Router from './routes'
import TaskBoardHeader from './components/TaskBoardHeader'


function App() {
  return (
    <BrowserRouter>
		<TaskBoardHeader />
      {/* <h1>Task Room</h1>
      <Demo /> */}
      <Router />
    </BrowserRouter>
  )
}

export default App
