import React, { useEffect } from "react";
import ReactGA from "react-ga";
import styles from "../styles/portfolio.module.css";
import ProfData from "../Data/proficiencies";

const Proficiencies = () => {
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
			console.log("GA metric sent - Section visited Proficiency");

			ReactGA.event({
				category: "Section visited",
				action: "Proficiency Visited",
			});
		}
	}, [isVisible]);
	return (
		<div className={styles.techStack} ref={domRef}>
			<h2
				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				My Proficiencies
			</h2>
			<div
				className={styles.proficiency}
				data-aos="fade-up"
				data-aos-offset="220"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				{ProfData.map(
					({ cardImg, headline, description, keyPoints }) => (
						<div key={headline} className={styles.profCard}>
							<img
								style={{ webkitUserDrag: "none" }}
								src={cardImg}
								alt="CardImg"
							/>
							<h2>{headline}</h2>
							<p>{description}</p>
							<ul
								style={{
									textAlign: "left",
									alignSelf: "flex-start",
								}}
							>
								{keyPoints.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Proficiencies;
