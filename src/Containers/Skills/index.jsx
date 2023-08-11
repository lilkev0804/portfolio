import React from "react";
import styles from "./Skills.module.scss";

const lanquages = [
  "Javascript (ES6)",
  "TypeScript",
  "HTML",
  "CSS",
  "SQL",
  "React-js",
  "React-native",
  "Node-js",
  "Next-js",
  "Nest-js",
];

const tool = [
  "Bash",
  "Git",
  "Storybook",
  "MongoDB",
  "Postman",
  "Figma",
  "InDesign",
];

export default function Skills() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleSection}>Mes Skills</h2>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.leftSideContainer}>
            <h3 className={styles.titleSubSection}>Languages & Frameworks</h3>
            <ul className={styles.languageList}>
              {lanquages.map((el) => (
                <li className={styles.listElement} key={el}>
                  <span className={styles.liValue}>{el}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightSideContainer}>
            <h3 className={styles.titleSubSection}>Outils de développement</h3>
            <ul className={styles.tootList}>
              {tool.map((el) => (
                <li className={styles.listElement} key={el}>
                  <span className={styles.liValue}>{el}</span>
                </li>
              ))}
            </ul>
          </div>
          <span className={styles.separator}></span>
        </div>
      </div>
    </div>
  );
}
