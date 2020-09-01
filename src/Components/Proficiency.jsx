import React from "react";
import styles from "./portfolio.module.css";

export default () => {
  return (
    <div className={styles.techStack}>
      <h2
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        My Proficiencies
      </h2>
      <div
        className={styles.proficiency}
        data-aos="fade-up"
        data-aos-offset="220"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <div className={styles.profCard}>
          <img src="https://santhisrikh.github.io/images/react.png" alt="CardImg" />
          <h2>Front End</h2>
          <p>Proficient with Javascript & React Applications.</p>
        </div>
        <div className={styles.profCard}>
          <img src="https://santhisrikh.github.io/images/back.png" alt="CardImg" />
          <h2>Back End</h2>
          <p>Able to develop MERN Stack application using latest technology.</p>
        </div>
        <div className={styles.profCard}>
          <img src="https://santhisrikh.github.io/images/data.png" alt="CardImg" />
          <h2>DS & Algo</h2>
          <p>Have deep understanding about Data Structure & Algorithms.</p>
        </div>
      </div>
    </div>
  );
};
