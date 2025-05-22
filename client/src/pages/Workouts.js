// client/src/pages/Exercises.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem } from '@mui/material';
import ExerciseList from '../components/exercises/ExerciseList';
import exerciseService from '../services/exercise';

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    caloriesBurned: '',
  });

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await exerciseService.getExercises();
      setExercises(res.data);
    };
    fetchExercises();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await exerciseService.logExercise(formData);
    setExercises([...exercises, res.data]);
    setFormData({ name: '', duration: '', caloriesBurned: '' });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Exercise Tracker</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Exercise Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Duration (mins)"
          type="number"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Calories Burned"
          type="number"
          value={formData.caloriesBurned}
          onChange={(e) => setFormData({ ...formData, caloriesBurned: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Log Exercise
        </Button>
      </form>
      <ExerciseList exercises={exercises} />
    </Box>
  );
}