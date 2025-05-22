// client/src/pages/Meals.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import MealList from '../components/meals/MealList';
import mealService from '../services/meal';

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await mealService.getMeals();
      setMeals(res.data);
    };
    fetchMeals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await mealService.logMeal(formData);
    setMeals([...meals, res.data]);
    setFormData({ name: '', calories: '', protein: '', carbs: '', fats: '' });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Meal Tracker</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Meal Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Calories"
          type="number"
          value={formData.calories}
          onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Log Meal
        </Button>
      </form>
      <MealList meals={meals} />
    </Box>
  );
}