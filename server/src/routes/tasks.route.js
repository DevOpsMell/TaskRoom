const express = require('express')
const {
  postTask,
  getAllTasks,
  updateTask,
  getTaskById,
} = require('../controllers/tasks.controller')

const taskRouter = express.Router()

taskRouter.post('/', postTask)
taskRouter.get('/', getAllTasks)
taskRouter.get('/:id', getTaskById)
taskRouter.patch('/:id', updateTask)

module.exports = taskRouter
