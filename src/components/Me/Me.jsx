import React from "react";

import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";

 const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Priya </h1>
        <p className={styles.description}>
          I'm a front-end developer with 4 years of experience using React and
          NodeJS. Reach out if you'd like to know more!
        </p>
        <div div className={styles.buttons}>
        <a
          href="mailto:priya.yadav.sbg@gmail.com"
          className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/Resume.pdf" target="_blank" className={styles.resumeBtn}>
          My Resume
        </a>
        </div>
      </div>
      <img src={getImageUrl("ME/me.png")} alt="Me" className={styles.me} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Me;