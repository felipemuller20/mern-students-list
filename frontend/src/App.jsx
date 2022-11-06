
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/create" element={ <Create /> } />
      <Route path="/edit/:id" element={ <Edit /> } />
    </Routes>
  )
}

export default App
