import classNames from "classnames";
import React, { useState, useEffect, useCallback } from "react";
import Menu from "./menu";
import styles from "./navbar.module.scss";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [hasScroll, setHasScrolled] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.pageYOffset > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const Logo = useCallback(() => {
  //   if (hasScroll) {
  //     return (
  //       <div className={styles.leftContainer}>
  //         <div className={styles.circleLogo}>
  //           <p className={styles.logo}>KL</p>
  //         </div>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className={styles.leftContainer}>
  //       <p className={styles.logo}>Kévin Lemarié</p>
  //     </div>
  //   );
  // }, [hasScroll]);

  return (
    <nav className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.circleLogo}>
            <p className={styles.logo}>KL</p>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={styles.buttonContainer}
          >
            <button
              aria-label="Button open menu"
              className={classNames(styles.buttonMenu, {
                [styles.openMenu]: openMenu,
              })}
            />

            <Menu onclickAway={() => setOpenMenu(false)} isOpen={openMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
