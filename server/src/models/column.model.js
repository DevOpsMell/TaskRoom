const mongoose = require('mongoose')

const columnSchema = new mongoose.Schema({
  parent_project: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
})

columnSchema.virtual('id').get(function () {
  if (this._id) {
    return this._id.toHexString()
  }
})

columnSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id
    delete ret.__v
  }
})

const ColumnModel = mongoose.model('Column', columnSchema)
module.exports = ColumnModel



