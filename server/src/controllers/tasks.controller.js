const TaskModel = require('../models/task.model')

const postTask = async (req, res, next) => {
  // get userId from req.body for testing purpose, should be req.user.id
  const { parent_project, title, created_by } = req.body
  // const created_by = req.user.id
  const task = new TaskModel({
    parent_project,
    title,
    created_by,
  })
  try {
    await task.save()
    res.status(201).json(`${task.id} created successfully`)
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
      throw new Error(`TaskId ${id} not found`)
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
    res.status(204)
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
      throw new Error(`TaskId ${id} not found`)
    }
    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error(error)
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
