import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import { routerLinkStyles } from '../utilis';
import Josh_Owens_Resume from '../../../public/JOSH_OWENS-RESUME.pdf';
import { useMediaQuery } from '@mui/material';
import RepsoniveNavButtons from './RepsoniveNavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setDarkMode } from '../../store/viewSlice';
const Navbar = () => {
  const { darkMode } = useSelector((state: RootState) => state.viewMode);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();
  const handleViewChange = () => {
    if (darkMode) {
      dispatch(setDarkMode(false));
      return;
    }
    dispatch(setDarkMode(true));
    return;
  };
  return (
    <div className={!darkMode ? 'lightNavbar' : 'darkNavbar'}>
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
            {/* <Link to="/contact">
              <button>Contact Me</button>
            </Link> */}
            <a href={Josh_Owens_Resume} target="_blank">
              <button>Resume</button>
            </a>
          </div>
          <div id="viewmode">
            <button onClick={handleViewChange}>
              {!darkMode ? <DarkModeIcon /> : <LightModeIcon sx={{ color: 'white' }} />}
            </button>
          </div>
        </div>
      ) : (
        <RepsoniveNavButtons />
      )}
    </div>
  );
};

export default Navbar;
