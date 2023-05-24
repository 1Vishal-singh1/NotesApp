import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-heading">My Notes</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/notescreen" className="navbar-link">Notes</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default MyComponent;
