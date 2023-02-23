import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Nav/Navbar';
import Projects from './components/Projects/Projects';
import './index.css';
import ContactMe from './components/ContactMe/ContactMe';
function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      {/* <AnimatePresence> */}
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/contact'} element={<ContactMe />} />
      </Routes>
      {/* </AnimatePresence> */}
      <Footer />
    </div>
  );
}

export default App;
