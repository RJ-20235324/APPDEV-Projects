import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <ul>
          <h1>This is my React Page!</h1>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/games'>Games</Link></li>
        </ul>
      </nav>
  );
}

