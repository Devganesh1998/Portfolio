import React from "react";
import styles from "./portfolio.module.css";
import Card from "./SubComponents/Card";

export default (props) => {
  const { cardData } = props;
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
      <h2>My Projects</h2>
      <div ref={domRef} className={styles.CardContainer}>
        {cardData.map((data) => {
          return <Card {...data} />;
        })}
      </div>
    </div>
  );
};
