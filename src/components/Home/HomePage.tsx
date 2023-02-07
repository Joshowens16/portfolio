import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import { routerLinkStyles } from '../utilis';

const HomePage = () => {
  return (
    <div className="homepageContainer">
      <div id="headshot">
        <img src="src/assets/sharpen_IMG-0908.PNG"></img>
      </div>
      <div id="intro">Hello, I'm</div>
      <div id="name">Josh Owens</div>
      <p>I build full stack applications using TypeScript, React, and Express.</p>
      <div id="learnAboutMe">
        <Link to="/about" style={routerLinkStyles}>
          <button>Learn more about me &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
