const express = require('express')
const { postTask, getAllTasks,getTaskById } = require('../controllers/tasks.controller')

const taskRouter = express.Router()

taskRouter.post('/', postTask)
taskRouter.get('/',getAllTasks)
taskRouter.get('/:id',getTaskById)



module.exports = taskRouter