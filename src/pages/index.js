import About from "@/Containers/About";
import Contact from "@/Containers/Contact";
import Experiences from "@/Containers/Experiences";
import Hero from "@/Containers/Hero";
import Skills from "@/Containers/Skills";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import NavBar from "../Components/navbar/index";
import styles from "../styles/Home.module.scss";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("is loading");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Kévin Lemarié : Développeur front-end</title>
          <meta
            name="description"
            content="Kévin Lemarié , développeur frond-end javascript ( react js , next js , node js , react native)"
          ></meta>
        </Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NM9HGWZ');
      `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NM9HGWZ"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <main className={styles.mainContainer}>
          <>Loading</>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Kévin Lemarié : Développeur front-end</title>
        <meta
          name="description"
          content="Kévin Lemarié , développeur frond-end javascript ( react js , next js , node js , react native)"
        ></meta>
      </Head>
      <main className={styles.mainContainer}>
        <NavBar />
        <Hero />
        <About />
        <Experiences />
        {/* <Skills /> */}
        <Contact />
      </main>
    </>
  );
}
