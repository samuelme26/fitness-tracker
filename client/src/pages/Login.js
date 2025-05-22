import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../services/auth';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.login(formData);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setFormData({...formData, password: e.target.value})} 
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;