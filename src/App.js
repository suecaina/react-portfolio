import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router for routing
import { Hero } from './components/Hero/Hero';  // Import Hero component
import { Navbar } from './components/Navbar/Navbar';  // Import Navbar component
import styles from './App.module.css';  // Import styles

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
