const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String
  }],
  year: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  liveUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
