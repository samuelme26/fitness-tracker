import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import authService from '../services/auth';

export default function Profile() {
  const [user, setUser] = useState({
    height: '',
    weight: '',
    goals: 'maintenance'
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await authService.getMe();
      setUser(res.data);
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authService.updateProfile(user);
    alert('Profile updated successfully!');
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>My Profile</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Height (cm)"
          type="number"
          value={user.height}
          onChange={(e) => setUser({ ...user, height: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Weight (kg)"
          type="number"
          value={user.weight}
          onChange={(e) => setUser({ ...user, weight: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Select
          value={user.goals}
          onChange={(e) => setUser({ ...user, goals: e.target.value })}
          fullWidth
          margin="dense"
        >
          <MenuItem value="weight loss">Weight Loss</MenuItem>
          <MenuItem value="muscle gain">Muscle Gain</MenuItem>
          <MenuItem value="maintenance">Maintenance</MenuItem>
        </Select>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </form>
    </Box>
  );
}