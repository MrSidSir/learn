const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  employId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: { // ✅ Add this
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  currentJob: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);

