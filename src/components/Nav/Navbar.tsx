import React, { useState } from 'react';
import './navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
const routerLinkStyles: { textDecoration: string; color: string } = {
  textDecoration: 'none',
  color: 'black',
};
const Navbar = () => {
  return (
    <div className="navbar">
      <div id="name">
        <h1>Josh Owens </h1>
      </div>
      <div id="buttons">
        <Link to="/" style={routerLinkStyles}>
          <button>Home</button>
        </Link>
        <Link to="/about" style={routerLinkStyles}>
          <button>About</button>
        </Link>
        <Link to="projects" style={routerLinkStyles}>
          <button>Projects</button>
        </Link>
        <button>Resume</button>
      </div>
      <div id="viewmode">
        <button>
          <DarkModeIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
