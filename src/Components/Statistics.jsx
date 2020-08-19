import React from "react";
import styles from "./portfolio.module.css";

export default (props) => {
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
    <React.Fragment>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>I have completed</h2>
      <div
        className={`${styles.statContainer} ${
          isVisible ? styles.activePage : ""
        }`}
        ref={domRef}
      >
        <div>
          <h2>1000+</h2>
          <p>Hours Of Coding</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Hackerrank Problems</p>
        </div>
        <div>
          <h2>600+</h2>
          <p>Git Commits</p>
        </div>
        <div>
          <h2>100</h2>
          <p>Hours Of soft Skills</p>
        </div>
      </div>
    </React.Fragment>
  );
};
