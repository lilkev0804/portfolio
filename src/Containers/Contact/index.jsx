import React, { useCallback, useState } from "react";
import styles from "./Contact.module.scss";
import GitHubLogo from "../../assets/images/github.svg";
import LinkedinLogo from "../../assets/images/linkedin.svg";
import EmailLogo from "../../assets/images/email.svg";
import Link from "next/link";
const social = [
  {
    id: 1,
    name: "github",
    link: "https://github.com/lilkev0804",
    assets: <GitHubLogo className={styles.icon} />,
  },
  {
    id: 2,
    name: "linkedin",
    link: "https://www.linkedin.com/in/kevin-lemarie/",
    assets: <LinkedinLogo className={styles.icon} />,
  },
];

export default function Contact() {
  const [messageCopy, setMessageCopy] = useState("");
  const handlePaste = useCallback(() => {
    setMessageCopy("E-mail copié dans le presse papier");
    let fullLink = document.createElement("input");
    document.body.appendChild(fullLink);
    fullLink.value = "lemarie.kevin@gmail.com";
    fullLink.select();
    document.execCommand("copy");
    fullLink.remove();
  }, []);
  return (
    <section id="contactMe" className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleSection}>Contacter moi</h2>
          <p>
            Une question, une proposition, n&apos;hesitez pas à me contacter.
          </p>
        </div>

        <div className={styles.socialLink}>
          <button
            aria-label="Copier mon adresse email"
            onClick={handlePaste}
            className={styles.emailButton}
          >
            <EmailLogo className={styles.icon} />
          </button>
          {social.map((el) => (
            <Link
              aria-label={`Lien vers mon ${el.name}`}
              key={el.id}
              href={el.link}
            >
              {el.assets}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
