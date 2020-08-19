import React from "react";
import styles from "../portfolio.module.css";
import { Button } from "@material-ui/core";

export default (props) => {
  let { cardImg, cardHead, cardBody, techStack, links } = props;
  return (
    <div className={styles.ProjectCard}>
      <img src={cardImg} alt="projectImg" />
      <h2>{cardHead}</h2>
      <p>{cardBody}</p>
      <h4>Teck stack used :</h4>
      <div className={styles.cardIcons}>
        {techStack.map((item) => {
          return <img src={item} alt="techImg"/>;
        })}
      </div>
      <div className={styles.cardRedirects}>
        <a target="_blank" rel="noopener noreferrer" href={links.github}>
          <Button>View Code</Button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.demo}>
          <Button>View Demo</Button>
        </a>
      </div>
    </div>
  );
};
