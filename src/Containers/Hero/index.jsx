import React from "react";
import styles from "./Hero.module.scss";
import Avatar from "../../assets/images/photo-avatar.png";
import Image from "next/image";
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>
            Frontend <br /> Developpeur
          </h1>
          <p className={styles.catchSentence}>
            J&apos;aime concevoir des applications front-end solides et
            evolutifs tout en offrant la meilleure expérience utilisateur.
          </p>
        </div>
        <div className={styles.mainSkills}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.avatarContainer}>
          <Image
            className={styles.avatar}
            src={Avatar}
            width={300}
            height={300}
            alt="Kévin Lemarié Développeur front end  React js Next js"
          />
          <span className={styles.avatarCadre}></span>
        </div>
      </div>
    </div>
  );
}
