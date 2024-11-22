import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Specification from './Specifications';
import KeyFeatures from './Keyfeatures';
import Setup from './Setup';
import Troubleshooting from './Troubleshooting';
import Maintenance from './Maintenance';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Welcome to KB-X1000 Documentation</h1>} />
            <Route path="/specifications" element={<Specification />} />
            <Route path="/key-features" element={<KeyFeatures />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
