import React from 'react';
import styles from "../../components/Experience/Experience.module.css"; // Import styles
import skills from "../../components/data/skills.json";
import history from "../../components/data/history.json";
import { getImageUrl } from "../../utils"; // Import the utility function


export const Experience = () => {
  return (
    <section  className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>

              <p>{skill.title}</p> {/* Now correctly displaying skill title */}

            </div>
          ))}
        </div>
         <ul className={styles.history}>
            {history.map((historyItem, id) => {
                   return (
                   <li key={id} className={styles.historyItem}>
                    <img 
                    className={styles.historyLogo}
                    src={getImageUrl(historyItem.imageSrc)} 
                    alt={`${historyItem.organisation} Logo`} 
                    />
                    <div className={styles.historyItemDetails}>
                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>

                        <ul>{historyItem.experiences.map((experience, id) => {
                            return <li key={id}>{experience}</li>
                        })}</ul>
                    </div>
                   </li> 
                   
                   )
                })
            }
        </ul>

       
      </div>


    </section>
  );
};
