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
        <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="cardImg"/>
        <img src="https://cdn.svgporn.com/logos/git-icon.svg" alt="cardImg"/>
        <img src="https://cdn.svgporn.com/logos/css-3.svg  " alt="cardImg"/>
        <img src="icons/nodejs.svg" alt="cardImg"/>
        <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="cardImg"/>
        <img src="https://cdn.svgporn.com/logos/react.svg" alt="cardImg"/>
        <img src="https://cdn.svgporn.com/logos/redux.svg" alt="cardImg"/>
        <img src="https://i7.pngguru.com/preview/509/951/613/flask-by-example-web-framework-python-bottle-bottle.jpg" alt="cardImg"/>
        <img src="https://a0.awsstatic.com/libra-css/images/site/touch-icon-iphone-114-smile.png" alt="cardImg"/>
        <img src="https://cdn.svgporn.com/logos/mysql.svg" alt="cardImg"/>
      </div>
    </div>
  );
};
