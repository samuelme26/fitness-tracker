import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import auth from '../services/auth';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    height: '',
    weight: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.register(formData);
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}