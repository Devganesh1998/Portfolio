import React, { useEffect } from "react";
import ReactGA from "react-ga";
import GitHubCalander from "react-github-calendar";
import styles from "../styles/portfolio.module.css";

const GitHubStats = (props) => {
	const [isVisible, setVisible] = React.useState(false);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			console.log(entries);
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		return () => observer.unobserve(domRef.current);
	}, []);

	useEffect(() => {
		if (isVisible) {
			console.log('GA metric sent - Section visited GithubStats');
			ReactGA.event({
				category: "Section visited",
				action: "GithubStats",
			});
		}
	}, [isVisible]);

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
