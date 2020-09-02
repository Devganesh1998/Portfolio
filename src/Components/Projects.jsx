import React from "react";
import styles from "./portfolio.module.css";
import emailjs from "emailjs-com";
// import Card from "./SubComponents/Card";
import { Button } from 'antd';
import { Card } from "antd";
const { Meta } = Card;

export default (props) => {
  const { cardData } = props;
  
  const handleViewGitHubOnclick = (project) => {
    let templateParams = {
      from_name: "devganesh1998@gmail.com",
      to_name: "devganesh91@gmail.com",
      subject: `${project.cardHead}'s Github Viewed`,
      message_html: `<div><h1>${project.cardHead} Github is being viewed by someone</h1><br><a target="_blank" href="${project.links.github}">Click here to got to the github page</a></div>`,
    };
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USERID
    );
    console.log(project, "git");
    window.open(project.links.github)
  }

  const handleViewDemoOnclick = (project) => {
    let templateParams = {
      from_name: "devganesh1998@gmail.com",
      to_name: "devganesh91@gmail.com",
      subject: `${project.cardHead}'s Demo Viewed`,
      message_html: `<div><h1>${project.cardHead} Demo is being viewed by someone</h1><br><a target="_blank" href="${project.links.demo}">Click here to got to the demo page</a></div>`,
    };
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USERID
    );
    console.log(project, "demo");
    window.open(project.links.demo)
  }

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
                  <Button onClick={() => handleViewGitHubOnclick(ele)} type="primary">
                    Github
                  </Button>,
                  <Button onClick={() => handleViewDemoOnclick(ele)} type="primary">
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
