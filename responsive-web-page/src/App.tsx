import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Analytics from './components/Analytics.jsx';
import NewsLetter from './components/NewsLetter.jsx';
import Cards from './components/Cards.jsx';

function App() {
  return (
    <> 
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
    </>
  );
}

export default App
