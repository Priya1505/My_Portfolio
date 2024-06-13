import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a Laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3> Frontend Developer </h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized web applications. I developed and deployed
                micrositese.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Prodction Developer </h3>
              <p>
                I'm experienced to solve the Bug issues on production level.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> UI designer </h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well using Figma.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
