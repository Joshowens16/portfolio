import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import { routerLinkStyles } from '../utilis';
import Josh_Owens_Resume from '../../../public/JOSH_OWENS-RESUME.pdf';
import { useMediaQuery } from '@mui/material';
import RepsoniveNavButtons from './RepsoniveNavButtons';
const Navbar = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  console.log(isSmallScreen);
  return (
    <div className="navbar">
      <div id="name">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Josh Owens </h1>
        </Link>
      </div>
      {!isSmallScreen ? (
        <div className="responsive">
          <div id="buttons">
            <Link to="/" style={routerLinkStyles}>
              <button>Home</button>
            </Link>
            <Link to="/about" style={routerLinkStyles}>
              <button>About</button>
            </Link>
            <Link to="/projects" style={routerLinkStyles}>
              <button>Projects</button>
            </Link>
            <a href={Josh_Owens_Resume} target="_blank">
              <button>Resume</button>
            </a>
          </div>
          <div id="viewmode"></div>
        </div>
      ) : (
        <RepsoniveNavButtons />
      )}
    </div>
  );
};

export default Navbar;
