import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import suecaina from '../../assets/about/suecaina.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Suecaina Haddouch</h1>
        <p className={styles.description}>I have a strong background in frontend development, with proficiency in HTML, CSS, and JavaScript. I also have hands-on experience working with popular frontend frameworks like Bootstrap and Vue.js. My expertise lies in designing and building user-focused software solutions that enhance the overall user experience.

</p>

        <a href="mailto:suecaina@hotmail.com" className={styles.contactBtn}>Contact Me</a>

      </div>
      
   
      <img src={suecaina} alt="Hero" className={styles.heroImg} />
    </section>
  );
};
