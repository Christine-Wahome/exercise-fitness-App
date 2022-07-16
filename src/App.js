import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';
import './App.css';


import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  
    <Box width='400px' sx={{ width: { x1: '1488px' }}} m='auto'>
       <Navbar />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/exercise/:id' element={<ExerciseDetail />}/>
        
       </Routes>
       <Footer/>
    </Box>
  
);

export default App