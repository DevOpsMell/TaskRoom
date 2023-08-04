const pino = require('pino');
const TaskModel = require('../models/task.model')
const NotFoundError = require('../errors/not.found')
const columnModel = require('../models/column.model')

const logger = pino(); // Create the logger instance

const postTask = async (req, res, next) => {
  // get userId from req.body for testing purpose, should be req.user.id
  const { parent_column, title, created_by } = req.body
  // const created_by = req.user.id
  try {

    const task = new TaskModel({
      parent_column,
      title,
      created_by,
    })

    await columnModel.findByIdAndUpdate(parent_column, {
      $push: { tasks: task.id }
    })

    await task.save()
    res.status(201).json({ message: `${task.id} created successfully` })

    // Log successful creation
    logger.info(`Task ${task.id} created successfully`);
  } catch (error) {
    next(error)
    logger.error(`Error while creating task: ${error.message}`);
  }
}

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find()
    res.json(tasks)
    // Log the number of tasks retrieved
    logger.info(`Retrieved ${tasks.length} tasks`);
  } catch (error) {
    next(error)
    logger.error(`Error while fetching tasks: ${error.message}`);
  }
}

const getTaskById = async (req, res, next) => {
  try {
    /* eslint-disable no-undef */
    const { id } = req.params;
    const task = await TaskModel.findById(id)
    if (!task) {
      throw new NotFoundError(`TaskId ${id} not found`)
    }
    res.json(task)

    // Log the task retrieval
    logger.info(`Task ${id} retrieved successfully`);
  } catch (error) {
    next(error)
    logger.error(`Error while fetching task ${id}: ${error.message}`);
  }
}


const updateTask = async (req, res, next) => {
  const { id } = req.params
  const { parent_column, title, content, created_by, assigned_to, due_at, comment } = req.body
  try {
    const task = await TaskModel.findByIdAndUpdate(
      id,
      {
        parent_column,
        title,
        content,
        created_by,
        assigned_to,
        last_modified_at: Date.now(),
        due_at,
        comment,
      },
    ).exec()
    if (!task) {
      throw new NotFoundError(`TaskId ${id} not found`)
    }
    await columnModel.findByIdAndUpdate(task.parent_column, {
      $pull: { tasks: task.id }
    })
    await columnModel.findByIdAndUpdate(parent_column, {
      $push: { tasks: task.id }
    })

    res.status(204).send()

    // Log successful update
    logger.info(`Task ${id} updated successfully`);
  } catch (error) {
    next(error)
    logger.error(`Error while updating task ${id}: ${error.message}`);
  }
}


//delete Task by id 
const deleteTaskById = async (req, res, next) => {
  try {
    /* eslint-disable no-undef */
    const { id } = req.params;
    const task = await TaskModel.findByIdAndDelete(id).exec()
    if (!task) {
      throw new NotFoundError(`TaskId ${id} not found`)
    }
    await columnModel.findByIdAndUpdate(task.parent_column, {
      $pull: { tasks: task.id }
    })
    res.json({ message: 'Task deleted successfully' })
    // Log successful deletion
    logger.info(`Task ${id} deleted successfully`);
  } catch (error) {
    next(error)
    logger.error(`Error while deleting task ${id}: ${error.message}`);
  }
}

module.exports = {
  postTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTaskById,
}
