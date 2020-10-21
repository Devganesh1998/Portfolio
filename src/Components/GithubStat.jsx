import React from "react";
import GitHubCalander from "react-github-calendar";
import styles from "../styles/portfolio.module.css";

const GitHubStats = (props) => {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			console.log(entries);
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);

	return (
		<div
			className={`${styles.githubStats} ${
				isVisible ? styles.activePage : ""
			}`}
			ref={domRef}
		>
			<GitHubCalander username="Devganesh1998"></GitHubCalander>;
		</div>
	);
};

export default GitHubStats;
