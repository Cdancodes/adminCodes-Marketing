import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard/>
  </StrictMode>,
)
