import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import { routerLinkStyles } from '../utilis';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomePage = () => {
  const { darkMode } = useSelector((state: RootState) => state.viewMode);

  useEffect(() => {}, []);
  return (
    <div className={!darkMode ? 'homepageContainerLight' : 'homepageContainerDark'}>
      <div id="headshot">
        <img src="/JOheadshot.PNG"></img>
      </div>
      <div id={!darkMode ? 'introLight' : 'introDark'}>Hello, I'm</div>
      <div id="nameLight">Josh Owens</div>
      <div className={!darkMode ? 'pLight' : 'pDark'}>
        <p>I build full stack applications using TypeScript, React, and Express.</p>
      </div>
      <div id={!darkMode ? 'learnAboutMeLight' : 'learnAboutMeDark'}>
        <Link to="/about" style={routerLinkStyles}>
          <button>Learn more about me &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
