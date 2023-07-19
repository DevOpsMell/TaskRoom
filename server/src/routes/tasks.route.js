const express = require('express')
const { postTask } = require('../controllers/tasks.controller')

const taskRouter = express.Router()

taskRouter.post('/', postTask)


module.exports = taskRouter