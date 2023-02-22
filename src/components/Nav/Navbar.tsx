import React, { useState } from 'react';
import './navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import { routerLinkStyles } from '../utilis';
import Josh_Owens_Resume from '../../../public/JOSH_OWENS-RESUME.pdf';
const Navbar = () => {
  return (
    <div className="navbar">
      <div id="name">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Josh Owens </h1>
        </Link>
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
        <a href={Josh_Owens_Resume} target="_blank">
          <button>Resume</button>
        </a>
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
