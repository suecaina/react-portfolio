import React from "react";
import { FaReact } from "react-icons/fa"; // React icon from react-icons
import styles from "./BuiltWithReact.module.css"; // Import styles

export const BuiltWithReact = () => {
  return (
    <div className={styles.container}>
      <FaReact className={styles.icon} />
      <p className={styles.text}>I have built this portfolio with React</p>
    </div>
  );
};
