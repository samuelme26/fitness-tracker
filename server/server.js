// server/server.js
require('dotenv').config({ path: './.env' }); 
// server.js
require('dotenv').config(); // Must be at the very top
console.log(process.env.MONGO_URI); // Test if loaded
// Explicitly specify the pathconst express = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
console.log("Environment Variables:", process.env);
// Add after other middleware
const authRoutes = require('./routes/auth');
app.use('/api/v1/auth', authRoutes);

const mealRoutes = require('./routes/meals');
app.use('/api/v1/meals', mealRoutes);

const exerciseRoutes = require('./routes/exercises');
app.use('/api/v1/exercises', exerciseRoutes);

// Database connection
mongoose.connect("mongodb://localhost:27017/fitness-tracker")
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('🏋️‍♂️ Fitness Tracker API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));