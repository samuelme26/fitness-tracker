// client/src/pages/Dashboard.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CaloriesChart from '../components/charts/CaloriesChart';
import WorkoutStats from '../components/charts/WorkoutStats';

export default function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>My Fitness Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CaloriesChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkoutStats />
        </Grid>
      </Grid>
    </Box>
  );
}