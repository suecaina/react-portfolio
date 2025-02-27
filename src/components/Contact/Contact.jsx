import React from 'react'
import styles from "../Contact/Contact.module.css";
import { getImageUrl } from '../../utils';


export const Contact = () => {
  return (
  <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Please feel free to get in touch!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contacts/emailIcon.png")} alt="Email Icon"   
        />
        <a href="mailto:suecaina@hotmail.com">suecaina@hotmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contacts/linkedinIcon.png")} alt="Linkedin Icon"   
        />
        <a href="https://www.linkedin.com/in/suecaina-haddouch-723012118/">https://www.linkedin.com/in/suecaina-haddouch-723012118/</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contacts/githubIcon.png")} alt="Github Icon"   
        />
        <a href="https://github.com/suecaina?tab=repositories">https://github.com/suecaina</a>
        </li>
    </ul>
  </footer>
  )
}
