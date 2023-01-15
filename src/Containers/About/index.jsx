import React from "react";
import styles from "./About.module.scss";
export default function About() {
  return (
    <section id="aboutMe" className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftSideContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titleContainer}>Qui suis-je ?</h2>
            <p className={styles.sentence}>
              Hello , je m&apos;appel Kévin Lemarié je suis un développeur
              front-end depuis 2 ans suite à une reconversion proféssionnelle.
              Mon choix c&apos;est porté sur le developpement web car depuis
              tout petit j&apos;ai un appétence pour l&apos;informatique que ce
              soit hardware ou software, mais également le fait d&apos;aprrendre
              sans cesse de nouvelle chose me motive chaque jour de plus en
              plus.
            </p>
          </div>
        </div>
        <div className={styles.rightSideContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titleContainer}>Design</h2>
            <p className={styles.sentence}>
              Je ne suis pas Designer mais je mets un point d&apos;honneur à
              trouver les solutions UI/UX les plus adapter à mes projets afin
              que l&apos;esthetisme et l&apos;expériences utilisateur soit la
              plus attrayante et conviviales.
            </p>
          </div>
        </div>
        <div className={styles.leftSideContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titleContainer}>Developpement</h2>
            <p className={styles.sentence}>
              En créant des applications JavaScript, je suis à la recherche
              constante de la stabilité, de performance et de la maintenabilité
              des mes projets. J&apos;apporte une grande importance au respect
              des patterns et aux bonnes pratiques. Egalement je reste toujours
              informé des nouvelles technologies, par une veille quotidienne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
