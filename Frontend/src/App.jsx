import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import LoginPage from '../Login/LoginPage';
import Dashboard from '../Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/timetable" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
