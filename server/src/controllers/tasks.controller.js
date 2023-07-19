const TaskModel = require('../models/task.model')


/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     description: Create a new task and save it to the database.
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parent_project:
 *                 type: string
 *                 description: The ID of the parent project to which the task belongs.
 *               title:
 *                 type: string
 *                 description: The title of the task.
 *               created_by:
 *                 type: string
 *                 description: The ID of the user who created the task. Should be obtained from req.user.id.
 *     responses:
 *       '201':
 *         description: The newly created task object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       '400':
 *         description: Bad request. The request body was invalid or the task could not be saved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A description of the error that occurred.
 */


const postTask = async (req, res) => {
  // get userId from req.body for testing purpose, should be req.user.id
  const { parent_project, title, created_by } = req.body
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


const getAllTasks = async(req, res) => {
  const tasks = await TaskModel.find().exec()
  res.json(tasks)
}


module.exports = {
  postTask,
  getAllTasks
}