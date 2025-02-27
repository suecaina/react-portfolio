import React from 'react';
import styles from "../Projects/ProjectCard.module.css";
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ 
    project: { title, imageSrc, description, skills, source} }) => {
  return (
    <div className={styles.container}>
      <img src={ getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} className={styles.description} />
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>source</a>
      </div>
    </div>
  );
}
