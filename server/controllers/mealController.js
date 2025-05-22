const Meal = require('../models/Meal');

// Log a meal
exports.logMeal = async (req, res, next) => {
  try {
    const meal = await Meal.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, data: meal });
  } catch (err) {
    next(err);
  }
};

// Get all meals for a user
exports.getMeals = async (req, res, next) => {
  try {
    const meals = await Meal.find({ user: req.user.id });
    res.status(200).json({ success: true, data: meals });
  } catch (err) {
    next(err);
  }
};