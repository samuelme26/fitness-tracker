// client/src/components/meals/MealList.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function MealList({ meals }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meal</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Fats (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map((meal) => (
            <TableRow key={meal._id}>
              <TableCell>{meal.name}</TableCell>
              <TableCell align="right">{meal.calories}</TableCell>
              <TableCell align="right">{meal.protein}</TableCell>
              <TableCell align="right">{meal.carbs}</TableCell>
              <TableCell align="right">{meal.fats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}