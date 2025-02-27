import React from 'react';
import { getImageUrl } from "../../utils";  // Import the utility function
import styles from './About.module.css';


export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img src={getImageUrl("about/coding.png")} alt="About me" className={styles.aboutImage}/>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor' />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p> I am a frontend developer with experience in building modern and responsive websites.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt='Server' />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p> I have experience building fast and optimized sites and APIs</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt='UI' /> {/* Fixed typo in image name */}
            <div className={styles.aboutItemText}>
              <h3>UI/UX Developer</h3> {/* Adjusted title to reflect "UI/UX" */}
              <p> I enjoy designing user-friendly interfaces that provide an excellent user experience.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
