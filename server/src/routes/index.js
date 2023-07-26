const express = require('express');
const tasksRouter = require('./tasks.route');
const usersRouter = require('./users.route');

const v1Router = express.Router();

v1Router.use('/tasks', tasksRouter);
v1Router.use('/users', usersRouter);

module.exports = v1Router;
