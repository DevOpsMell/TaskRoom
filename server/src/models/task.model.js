const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         parent_project:
 *           type: string
 *           description: The ID of the project that the task belongs to. It should be of ObjectID type, but for testing purposes, we're using a string.
 *           example: "60a8f1b4f3c1e5d8c3e3b1e7"
 *         status:
 *           type: string
 *           enum: [todo, in_progress, done]
 *           default: todo
 *           description: The status of the task. It should be an enum type.
 *         title:
 *           type: string
 *           required: true
 *           minLength: 3
 *           maxLength: 30
 *           description: The title of the task.
 *           example: "Complete OpenAPI Documentation Generation"
 *         content:
 *           type: string
 *           description: The content of the task.
 *         created_by:
 *           type: string
 *           required: true
 *           description: The ID of the user who created the task. It should be of ObjectID type, but for testing purposes, we're using a string.
 *           example: "60a8f1b4f3c1e5d8c3e3b1e7"
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The time when the task was created.
 *         last_modified_at:
 *           type: string
 *           format: date-time
 *           description: The time when the task was last modified.
 *         due_at:
 *           type: string
 *           format: date-time
 *           description: The due time of the task. It defaults to one week after the creation time.
 *         assigned_to:
 *           type: string
 *           description: The ID of the user to whom the task is assigned. It should be of ObjectID type.
 *         comment:
 *           type: string
 *           description: The ID of the comment related to the task. It should be of ObjectID type.
 */


const taskSchema = new mongoose.Schema({
  parent_project: {
    // should be ObjectID, but for testing purpose, we use String
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Project',
    required: true
  },
  status: {
    type: String,
    enum: ['todo', 'in_progress', 'done'],
    default: 'todo'
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  content: {
    type: String,
  },
  created_by: {
    // should be ObjectID, but for testing purpose, we use String
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  last_modified_at: {
    type: Date,
  },
  due_at: {
    type: Date,
    default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)
  },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
})


taskSchema.virtual('id').get(function () {
  if (this._id) {
    return this._id.toHexString()
  }
})
taskSchema.set('toJSON', {
  virtuals: true,
})

const TaskModel = mongoose.model('Task', taskSchema)
module.exports = TaskModel