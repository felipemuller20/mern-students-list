
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/create" element={ <Create /> } />
    </Routes>
  )
}

export default App
