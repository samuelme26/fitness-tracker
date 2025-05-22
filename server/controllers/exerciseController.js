const Exercise = require('../models/Exercise');

// Log an exercise
exports.logExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
};

// Get all exercises for a user
exports.getExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find({ user: req.user.id });
    res.status(200).json({ success: true, data: exercises });
  } catch (err) {
    next(err);
  }
};