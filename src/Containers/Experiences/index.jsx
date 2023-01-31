import classNames from "classnames";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styles from "./Experiences.module.scss";

const jobs = [
  {
    id: 0,
    name: "Now Online",
    date: "14 fevrier 2021 - 28 fevrier 2023",
    contract: "CDI",
    url: "https://www.now.online",
    title: "Développeur front-end",
    stack: [
      "React Js",
      "Next Js",
      "SSR",
      "GrahpQL",
      "Redux",
      "Axios",
      "Jest",
      "Cypress",
      "GitLab CI/CD",
      "REST",
    ],
    description:
      "Now Online est une startup qui permet à des professionnel de proposer des consultations à distance à ses clients. Il s'agit d'une marketplace qui référence un grand nombre de profésionnel , ce rendant disponible ses clients. J'ai travailler  à la conception de solution front pour la marketplace ainsi que la plateforme de consultation vidéo.",
  },
  {
    id: 1,
    name: "Titan Déménagement",
    date: "Mars 2022 - Decembre 2022",
    contract: "FREE-LANCE",
    url: "https://www.titan-demenagement.com",
    title: "Développeur FullStack",
    stack: [
      "React Js",
      "Next Js",
      "Node Js",
      "Espress",
      "TypeScript",
      "GraphQL",
      "MySql",
      "Axios",
      "Cypress",
      "Github CI/CD",
      "AWS",
      "Redux",
      "SendInBlue",
      "StripeJs",
    ],
    description:
      "Titan Déménagement une startup dans le secteur du déménagement depuis 2021 . Je leur ai créer l'ensemble de leur web app, de la creation de formulaire de contact, module de creation de devis de déménagement, des différents espaces utilisateurs ainsi que le backend et la mise en ligne.",
  },
  {
    id: 2,
    url: "https://www.et360digital.com",
    name: "ET360 Digital",
    title: "Développeur FullStack",
    date: "Juillet 2020 - Fevrier 2022",
    stack: [
      "React js",
      "React Native",
      "Expo",
      "Next js",
      "Node js",
      "Express",
      "MySql",
      "Cypress",
      "Redux",
      "AWS",
      "StripeJs",
    ],
    contract: "FREE-LANCE",
    description:
      "ET360 digital est une startup dans le domaine du sport plus particulierement sur le coaching à travers sont application mobile iOS/ Android. Mon travail fut de créer l'application mobile ainsi que leur site afin de vendre des produits complémentaires.",
  },
  {
    id: 3,
    title: "Développeur FullStack",
    name: "La Belle Épingle",
    url: "https://www.labelleepingle.com",
    date: "Novembre 2020 - Avril 2021",
    contract: "FREE-LANCE",
    stack: ["React js", "Node-js", "Express", "MongoDB", "AWS", "StripeJs"],
    description:
      "Réalisation d'une web app pour un atelier de couture / retouche sur Paris. J'ai réaliser un site vitrine ainsi qu'un module de prise de rendez-vous et paiement en ligne. Conception du backend et du frond end ainsi que la mise en ligne.",
  },
];

export default function Experiences() {
  const [selectExperience, setSelectExperience] = useState(jobs[0]);

  const handleSelect = useCallback((type) => {
    setSelectExperience(type);
  }, []);

  const MyExperience = useCallback(() => {
    return (
      <div className={styles.experienceText}>
        <h3>
          {selectExperience?.title}{" "}
          <Link legacyBehavior href={`${selectExperience?.url}`}>
            <a className={styles.link}>{selectExperience?.name}</a>
          </Link>
        </h3>
        <div className={styles.breakLine}></div>
        <p className={styles.date}>
          {selectExperience?.date} <span>[ {selectExperience?.contract} ]</span>
        </p>
        <div className={styles.breakLineSmall}></div>
        <p>{selectExperience?.description}</p>
        <ul className={styles.customUl}>
          {selectExperience?.stack?.map((el) => (
            <li className={styles.liExperience} key={el}>
              <span className={styles.stackName}>{el}</span>
            </li>
          ))}
        </ul>
        <div className={styles.breakLineLarge}></div>
      </div>
    );
  }, [selectExperience]);

  return (
    <section id="myexperiences" className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.titleContainer}>Mes Experiences</h2>
        <div className={styles.experiencesContainer}>
          <div className={styles.experiences}>
            <ul className={styles.listUl}>
              {jobs.map((el) => (
                <li
                  key={el.id}
                  onClick={() => handleSelect(el)}
                  className={classNames(styles.customLi, {
                    [styles.activeLi]: el === selectExperience,
                  })}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
          {selectExperience && <MyExperience />}
          <div className={styles.experiencesMobile}>
            {jobs.map((el) => (
              <div key={el.id} className={styles.experienceText}>
                <h3>
                  {el?.title}{" "}
                  <Link legacyBehavior href={`${el?.url}`}>
                    <a className={styles.link}>{el?.name}</a>
                  </Link>
                </h3>
                <div className={styles.breakLine}></div>
                <p className={styles.date}>
                  {el?.date} <span>[ {el?.contract} ]</span>
                </p>
                <div className={styles.breakLineSmall}></div>
                <p>{el?.description}</p>
                <ul className={styles.customUl}>
                  {el?.stack?.map((ele) => (
                    <li className={styles.liExperience} key={ele}>
                      <span className={styles.stackName}>{ele}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
