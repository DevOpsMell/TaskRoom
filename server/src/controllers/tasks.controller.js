const TaskModel = require('../models/task.model')
const NotFoundError = require('../errors/not.found')

const postTask = async (req, res, next) => {
  // get userId from req.body for testing purpose, should be req.user.id
  const { parent_project, title, created_by } = req.body
  // const created_by = req.user.id
  try {
    const task = new TaskModel({
      parent_project,
      title,
      created_by,
    })

    await task.save()
    res.status(201).json({ message: `${task.id} created successfully` })
  } catch (error) {
    next(error)
  }
}

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find()
    res.json(tasks)
  } catch (error) {
    next(error)
  }
}

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await TaskModel.findById(id)
    if (!task) {
      throw new NotFoundError(`TaskId ${id} not found`)
    }
    res.json(task)
  } catch (error) {
    next(error)
  }
}


const updateTask = async (req, res, next) => {
  const { id } = req.params
  const { title, content, created_by, assigned_to, due_at, comment, status } = req.body
  try {
    const task = await TaskModel.findByIdAndUpdate(
      id,
      {
        title,
        content,
        created_by,
        assigned_to,
        last_modified_at: Date.now(),
        due_at,
        comment,
        status
      },
      { new: true }
    ).exec()
    if (!task) {
      throw new NotFoundError(`TaskId ${id} not found`)
    }
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}


//delete Task by id 
const deleteTaskById = async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await TaskModel.findByIdAndDelete(id).exec()
    if (!task) {
      throw new NotFoundError(`TaskId ${id} not found`)
    }
    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  postTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTaskById,
}
