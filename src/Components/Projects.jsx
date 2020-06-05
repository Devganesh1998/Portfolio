import React from "react";
import styles from "./portfolio.module.css";
import Card from "./SubComponents/Card";

export default (props) => {
  const { cardData } = props;

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
        My Projects
      </h2>
      <div
        className={styles.CardContainer}
        data-aos="fade-up"
        data-aos-offset="220"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        {cardData.map((data) => {
          return <Card {...data} />;
        })}
      </div>
    </div>
  );
};
