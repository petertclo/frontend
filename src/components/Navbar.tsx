import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <button className="navbar-button" onClick={() => alert('Log In')}>Log In</button>
    </nav>
  );
};

export default Navbar;