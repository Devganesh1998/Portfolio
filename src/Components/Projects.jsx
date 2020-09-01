import React from "react";
import styles from "./portfolio.module.css";
// import Card from "./SubComponents/Card";
import { Button } from 'antd';
import { Card } from "antd";
const { Meta } = Card;

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
        {cardData &&
          cardData.map((ele) => {
            return (
              <Card
                cover={
                  <img
                    alt="example"
                    src={ele.cardImg}
                    className="p-1"
                    height="200px"
                  />
                }
                actions={[
                  <Button onClick={() => window.open(ele.links.github)} type="primary">
                    Github
                  </Button>,
                  <Button onClick={() => window.open(ele.links.demo)} type="primary">
                    Demo
                  </Button>,
                ]}
              >
                <Meta title={ele.cardHead} description={ele.cardBody} />
                <Meta
                  style={{marginTop: "10px"}}
                  title="Teck stack used :"
                  description=""
                />
                {ele.techStack.map((img) => (
                  <img src={img} className={styles.projectIcon} alt=".." />
                ))}
              </Card>
            );
          })}
      </div>
    </div>
  );
};
