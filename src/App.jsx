import { useState } from 'react'

import styles from "./App.module.css";
import Navbar from './components/Navbar/Navbar';
import Me from './components/Me/Me';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div className={styles.App}>
      <div></div>
      <Navbar/>
      <Me/>
      <About />
      <Experience />
      <Contact />
      
      </div>
  );
}

export default App;
