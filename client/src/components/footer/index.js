import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <footer>
    <p>I am the footer!</p>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  </footer>
);
