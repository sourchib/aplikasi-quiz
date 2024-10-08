// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Membuat root React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Merender komponen App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
