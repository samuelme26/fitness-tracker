// client/src/components/charts/CaloriesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function CaloriesChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Consumed',
        data: [1800, 2000, 1700, 2100, 1900, 2200, 2000],
        backgroundColor: '#1976d2',
      },
      {
        label: 'Calories Burned',
        data: [500, 600, 700, 800, 600, 900, 750],
        backgroundColor: '#ff5722',
      },
    ],
  };

  return <Bar data={data} />;
}