const TaskModel = require('../models/task.model')

const postTask = async (req, res) => {
  // get userId from req.body for testing purpose, should be req.user.id
  const { parent_project, title, created_by  } = req.body
  // const created_by = req.user.id
  const task = new TaskModel({
    parent_project,
    title,
    created_by
  })
  try {
    const savedTask = await task.save()
    res.status(201).json(savedTask)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}


module.exports = {
  postTask
}