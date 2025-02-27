//App.js serves as main layout with root components

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router for routing
import { Hero } from './components/Hero/Hero';  // Import Hero component
import { BuiltWithReact } from "./components/ReactComponent/React";
import { Navbar } from './components/Navbar/Navbar';  // Import Navbar component
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience'; 
import styles from './App.module.css';  // Import styles
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <BuiltWithReact />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
