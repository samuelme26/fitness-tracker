const express = require('express');
const { logMeal, getMeals } = require('../controllers/mealController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, logMeal);
router.get('/', protect, getMeals);

module.exports = router;