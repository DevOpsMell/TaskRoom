import React from 'react'
import { BrowserRouter } from 'react-router-dom';
// import Demo from './components/Demo'
import Router from './routes'


function App() {
  return (
    <BrowserRouter>
      {/* <h1>Task Room</h1>
      <Demo /> */}
      <Router />
    </BrowserRouter>
  )
}

export default App;
