import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

import './index.css';

function App() {
  return (
    <div style={{width:'100%'}}>
      <Navbar/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
