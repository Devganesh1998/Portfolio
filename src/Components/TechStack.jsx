import React from "react";
import styles from "../styles/portfolio.module.css";
import {
	aws,
	elasticSearch,
	kafka,
	logstash,
	nextjs,
	nodejs,
	postgreSQL,
	react,
	webpack,
	redis,
} from "../Data/IconSource";

const TechStack = () => (
	<div className={styles.techStack}>
		<h2
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-delay="600"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="false"
		>
			Tech Stack
		</h2>
		<div
			className={styles.stackImgs}
			data-aos="fade-up"
			data-aos-offset="220"
			data-aos-delay="800"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="false"
		>
			<img title="Nodejs" src={nodejs} alt="NodeJs" />
			<img title="Kafka" src={kafka} alt="kafka" />
			<img
				title="ElasticSearch"
				src={elasticSearch}
				alt="elasticSearch"
			/>
			<img title="Logstash" src={logstash} alt="logstash" />
			<img title="PostgreSQL" src={postgreSQL} alt="SQL" />
			<img title="Redis" src={redis} alt="redis" />
			<img title="Nextjs" src={nextjs} alt="nextjs" />
			<img title="Webpack" src={webpack} alt="webpack" />
			<img title="React" src={react} alt="React" />
			<img title="AWS" src={aws} alt="AWS" />
		</div>
	</div>
);

export default TechStack;
