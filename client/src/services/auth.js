// client/src/services/auth.js
import axios from 'axios';

const API_URL = '/api/v1/auth'; // Add this line

const authService = {
  register: async (userData) => {
    const res = await axios.post(`${API_URL}/register`, userData);
    if (res.data.token) localStorage.setItem('token', res.data.token);
    return res.data;
  },
  login: async (userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    if (res.data.token) localStorage.setItem('token', res.data.token);
    return res.data;
  },
  logout: () => localStorage.removeItem('token'),
  getMe: async () => {
    const res = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.data;
  }
};

export default authService;