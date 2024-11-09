import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing the CSS for the header

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
