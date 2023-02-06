import React from 'react';
import './homepage.css';
const HomePage = () => {
  return (
    <div className="homepageContainer">
      <div id="headshot">
        <img src="https://via.placeholder.com/150"></img>
      </div>
      <div id="intro">Hello, I'm</div>
      <div id="name">Josh Owens</div>
      <p>I build full stack applications using TypeScript, React, and Express.</p>
      <div id="learnAboutMe">
        <button>Learn more about me &rarr;</button>
      </div>
    </div>
  );
};

export default HomePage;
