import React from "react";
import styles from "./portfolio.module.css";

export default () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log("entries");
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`${styles.techStack} ${isVisible ? styles.activePage : ""}`}
    >
      <h2>My Proficiency</h2>
      <div className={styles.proficiency} ref={domRef}>
        <div className={styles.profCard}>
          <img src="https://santhisrikh.github.io/images/react.png" />
          <h2>Front End</h2>
          <p>Proficient with Javascript & React Applications.</p>
        </div>
        <div className={styles.profCard}>
          <img src="https://santhisrikh.github.io/images/back.png" />
          <h2>Back End</h2>
          <p>Able to develop MERN Stack application using latest technology.</p>
        </div>
        <div className={styles.profCard}>
          <img src="https://santhisrikh.github.io/images/data.png" />
          <h2>DS & Algo</h2>
          <p>Have deep understanding about Data Structure & Algorithms.</p>
        </div>
      </div>
    </div>
  );
};
