import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./Menu.module.scss";

export default function Menu({ onclickAway, isOpen }) {
  return (
    <div
      className={classNames({
        [styles.container]: isOpen,
        [styles.closeContainer]: !isOpen,
      })}
    >
      <div className={styles.linkContainer}>
        <a
          href="#aboutMe"
          aria-label="A propos"
          className={classNames(styles.link, styles.link1)}
        >
          A propos
        </a>
        <a
          aria-label="Mes experiences"
          href="#myexperiences"
          className={classNames(styles.link, styles.link2)}
        >
          Mes expériences
        </a>
        <a
          aria-label="Contactez moi"
          href="#contactMe"
          className={classNames(styles.link, styles.link3)}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
