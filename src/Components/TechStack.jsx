import React from "react";
import styles from "./portfolio.module.css";
import IconSourceData from "../Data/IconSource"

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
        Tech Stack
      </h2>
      <div
        className={styles.stackImgs}
        data-aos="fade-up"
        data-aos-offset="220"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <img src={IconSourceData.html} alt="HTML5"/>
        <img src="https://devicons.github.io/devicon/devicon.git/icons/git/git-original-wordmark.svg" alt="Git"/>
        <img src={IconSourceData.css} alt="Css"/>
        <img src="icons/nodejs.svg" alt="NodeJs"/>
        <img src={IconSourceData.js} alt="Javascript"/>
        <img src={IconSourceData.react} alt="React"/>
        <img src={IconSourceData.mongodb} alt="MongoDB"/>
        <img src="https://i7.pngguru.com/preview/509/951/613/flask-by-example-web-framework-python-bottle-bottle.jpg" alt="Flask"/>
        <img src="https://a0.awsstatic.com/libra-css/images/site/touch-icon-iphone-114-smile.png" alt="AWS"/>
        <img src={IconSourceData.mysql} alt="MySQL"/>
      </div>
    </div>
  );
};
