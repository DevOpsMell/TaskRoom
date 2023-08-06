import React from 'react';
import { 
  Routes,
  Route,
} from 'react-router-dom';
import Project from './pages/project';

function Router() {
  return (
    <Routes>
      <Route path="/project" element={<Project />} />
    </Routes>
  )
}

export default Router;