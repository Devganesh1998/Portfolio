import React from "react";
import styles from "../styles/portfolio.module.css";
import ProfData from "../Data/proficiencies";

const Proficiencies = () => (
	<div className={styles.techStack}>
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
			{ProfData.map(({ cardImg, headline, description, keyPoints }) => (
				<div key={headline} className={styles.profCard}>
					<img
						style={{ webkitUserDrag: "none" }}
						src={cardImg}
						alt="CardImg"
					/>
					<h2>{headline}</h2>
					<p>{description}</p>
					<ul style={{ textAlign: "left", alignSelf: "flex-start" }}>
						{keyPoints.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</div>
);

export default Proficiencies;
