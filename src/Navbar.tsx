import React from 'react';
import './navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Navbar = () => {
  return (
    <div className="navbar">
      <div id="name">
        <h1>Josh Owens</h1>
      </div>
      <div id="buttons">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
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
