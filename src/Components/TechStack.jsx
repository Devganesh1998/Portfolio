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
        <img src="https://cdn.svgporn.com/logos/html-5.svg" />
        <img src="https://cdn.svgporn.com/logos/git-icon.svg" />
        <img src="https://cdn.svgporn.com/logos/css-3.svg  " />
        <img src="https://cdn.svgporn.com/logos/bootstrap.svg" />
        <img src="https://cdn.svgporn.com/logos/javascript.svg" />
        <img src="https://cdn.svgporn.com/logos/react.svg" />
        <img src="https://cdn.svgporn.com/logos/redux.svg" />
        <img src="https://cdn.svgporn.com/logos/python.svg" />
        <img src="https://cdn.svgporn.com/logos/java.svg" />
        <img src="https://cdn.svgporn.com/logos/mysql.svg" />
      </div>
    </div>
  );
};
