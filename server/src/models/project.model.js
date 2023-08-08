const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  project_owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  profile: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  project_member: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  project_column: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Column',
    },
  ],
});

projectSchema.virtual('id').get(function () {
  if (this._id) {
    return this._id.toHexString();
  }
});

projectSchema.set('toJSON', {
  virtuals: true,
});

const ProjectModel = mongoose.model('Project', projectSchema);
module.exports = ProjectModel;
