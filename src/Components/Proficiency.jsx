import React from "react";
import styles from "../styles/portfolio.module.css";

const Proficiencies = () => (
	<div className={styles.techStack}>
		<h2
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-delay="600"
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
			data-aos-delay="800"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="false"
		>
			<div className={styles.profCard}>
				<img
					style={{ webkitUserDrag: "none" }}
					src="/FrontEndCard.png"
					alt="CardImg"
				/>
				<h2>Front End</h2>
				<p>
					Proficient with building React SPA and Nextjs for highly
					optimized FCP.
				</p>
				<ul style={{ textAlign: "left", alignSelf: "flex-start" }}>
					<li>Responsive Designs</li>
					<li>Webpack Customizations</li>
					<li>Server Side Rendering with Nextjs</li>
					<li>
						Minimizing bundle size and Lower external dependencies
					</li>
					<li>CDN delivery of assets</li>
					<li>Lazy loaded SPA application in separate chunks</li>
					<li>Jest for unit testing</li>
					<li>Efficient state management</li>
					<li>Modular, reusable and clean code</li>
					<li>Utilizes polyfills to support older browsers</li>
					<li>Dockerizes for ease of development environment</li>
				</ul>
			</div>
			<div className={styles.profCard}>
				<img
					style={{ webkitUserDrag: "none" }}
					src="/backendCard.png"
					alt="CardImg"
				/>
				<h2>Back End</h2>
				<p>
					Proficient with building Services using tech Stack - Express, SQL, Redis(as cache layer)
				</p>
				<ul style={{ textAlign: "left", alignSelf: "flex-start" }}>
					<li>Highly secure services</li>
					<li>Optimal Normalization in SQL schema</li>
					<li>
						Secure authentication layer and granular authorization for Admins
					</li>
					<li>Third party authorization & profile data management</li>
					<li>Auto session refresh & accurate session management</li>
					<li>Event driven services using messaging services like Kafka / AWS-SQS</li>
					<li>Implements cache layer to minimize response time and Database hits</li>
					<li>WebSocket utilization for chatting applications</li>
					<li>Well documented endpoints using Postman</li>
				</ul>
			</div>
			<div className={styles.profCard}>
				<img
					style={{ webkitUserDrag: "none" }}
					src="/analyticsCard.png"
					alt="CardImg"
				/>
				<h2>Logs & Analytics</h2>
				<p>
					Will analyze logs from each request & service and utilize
					these metrics to build Dashboards for Business development.
				</p>
				<ul style={{ textAlign: "left", alignSelf: "flex-start" }}>
					<li>Using ELK(ElasticSearch, Logstash & Kibana) stack</li>
					<li>Consuming service level logs from fileBeat to visualize & analyze service performance</li>
					<li>Utilizes lighting fast data fetching of ElasticSearch to primary read ontop of SQL DB queries</li>
					<li>
						Customized Dashboards for service performance and data analysis of business requirements
					</li>
					<li>Implements Full-text search engines for platform</li>
					<li>Appropriate match queries for most relevant results and desired ranking of results.</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Proficiencies;
