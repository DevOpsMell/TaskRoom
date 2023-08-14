const express = require('express')
const {
  postProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProjectById,
  getProjectDataById
} = require('../controllers/project.controller')

const projectRouter = express.Router()

projectRouter.post('/',postProject)
projectRouter.get('/',getAllProjects)
projectRouter.get('/:id',getProjectById)
projectRouter.patch('/:id',updateProject)
projectRouter.delete('/:id',deleteProjectById)
projectRouter.get('/data/:id',getProjectDataById)

module.exports = projectRouter