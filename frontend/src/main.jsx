/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StudentProvider from './context/StudentProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StudentProvider>
);
