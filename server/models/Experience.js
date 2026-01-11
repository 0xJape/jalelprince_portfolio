const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  company: {
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

module.exports = mongoose.model('Experience', ExperienceSchema);
