const express = require('express')
const tasksRouter = require('./tasks.route')

const v1Router = express.Router()

v1Router.use('/tasks', tasksRouter)

module.exports = v1Router