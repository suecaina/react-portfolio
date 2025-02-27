import React from 'react';
import styles  from "../Projects/Projects.module.css";
import projects from "../../components/data/projects.json";
import { ProjectCard } from "../../components/Projects/ProjectCard.jsx"; // Import ProjectCard

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        {projects.map((project, id) => (
           
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
