const mongoose = require('mongoose')


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