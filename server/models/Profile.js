const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  tagline: {
    type: String
  },
  bio: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  linkedin: {
    type: String
  },
  github: {
    type: String
  },
  resumeUrl: {
    type: String
  },
  profileImageUrl: {
    type: String
  },
  skills: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);
