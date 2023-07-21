const express = require('express')
const {
  postTask,
  getAllTasks,
  updateTask,
  getTaskById,
  deleteTaskById,
} = require('../controllers/tasks.controller')

const taskRouter = express.Router()

taskRouter.post('/', postTask)
taskRouter.get('/', getAllTasks)
taskRouter.get('/:id', getTaskById)
taskRouter.patch('/:id', updateTask)
taskRouter.delete('/:id', deleteTaskById)

module.exports = taskRouter
