const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Education', EducationSchema);
