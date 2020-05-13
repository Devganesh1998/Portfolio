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
      <h2>Tech Stack</h2>
      <div className={styles.stackImgs} ref={domRef}>
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
