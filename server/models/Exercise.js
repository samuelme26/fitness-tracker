const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  duration: { type: Number }, // in minutes
  caloriesBurned: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exercise', exerciseSchema);