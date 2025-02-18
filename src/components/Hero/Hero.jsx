import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import suecaina from '../../assets/about/suecaina.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Suecaina Haddouch</h1>
        <p className={styles.description}>This is your description text hello</p>
        <Link to="/contact" className={styles.contactBtn}>Contact Me</Link>
      </div>
      
   
      <img src={suecaina} alt="Hero" className={styles.heroImg} />
    </section>
  );
};
