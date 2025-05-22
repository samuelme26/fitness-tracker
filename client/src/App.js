// client/src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Meals from './pages/Meals';
import Exercises from './pages/Exercises';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff5722' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/meals" element={<PrivateRoute><Meals /></PrivateRoute>} />
          <Route path="/exercises" element={<PrivateRoute><Exercises /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;