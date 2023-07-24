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

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find().exec()
    res.json(tasks)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params
    const task = await TaskModel.findById(id).exec()
    res.json(task)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const updateTask = async (req, res) => {
  const { id } = req.params
  const { title, content, created_by, assigned_to, due_at, comment } = req.body
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
    },
    { new: true }
  ).exec()
  if (!task) {
    res.status(404).json({ message: 'Task not found' })
    return
  }
  res.json(task)
}

//delete Task by id 
const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params
    const task = await TaskModel.findByIdAndDelete(id).exec()
    if (!task) {
      res.status(404).json({ message: 'Task not found' })
      return
    }
    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

module.exports = {
  postTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTaskById,
}
