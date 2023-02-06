import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './components/About/About';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Nav/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
