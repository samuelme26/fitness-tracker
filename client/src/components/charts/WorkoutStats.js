import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function WorkoutStats() {
  const data = {
    labels: ['Strength', 'Cardio', 'Flexibility'],
    datasets: [{
      data: [30, 50, 20],
      backgroundColor: ['#1976d2', '#ff5722', '#4caf50'],
    }],
  };

  return <Pie data={data} />;
}