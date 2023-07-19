const express = require('express')
const { postTask, getAllTasks } = require('../controllers/tasks.controller')

const taskRouter = express.Router()

taskRouter.post('/', postTask)
taskRouter.get('/',getAllTasks)


module.exports = taskRouter