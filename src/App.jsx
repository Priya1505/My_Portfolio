import { useState } from 'react'

import styles from "./App.module.css";
import Navbar from './components/Navbar/Navbar';
import Me from './components/Me/Me';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Me/>
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      </div>
  );
}

export default App;
