import About from "@/Containers/About";
import Contact from "@/Containers/Contact";
import Experiences from "@/Containers/Experiences";
import Hero from "@/Containers/Hero";
import Skills from "@/Containers/Skills";
import Head from "next/head";
import React from "react";
import NavBar from "../Components/navbar/index";
import styles from "../styles/Home.module.scss";
export default function Home() {
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
