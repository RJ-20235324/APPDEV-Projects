import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/specifications">Specifications & In the Box</Link></li>
        <li><Link to="/key-features">Key Features</Link></li>
        <li><Link to="/setup">Setup Instructions & Using the Keyboard</Link></li>
        <li><Link to="/troubleshooting">Troubleshooting</Link></li>
        <li><Link to="/maintenance">Maintenance & Warranty</Link></li>
      </ul>
    </nav>
  );
}

