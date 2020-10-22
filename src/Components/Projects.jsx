import React from "react";
// import Card from "./SubComponents/Card";
import { Button } from "antd";
import { Card } from "antd";
import styles from "../styles/portfolio.module.css";
const { Meta } = Card;

const Projects = (props) => {
	const { cardData } = props;

	const handleViewGitHubOnclick = (project) => {
		console.log(project, "git");
		window.open(project.links.github);
	};

	const handleViewDemoOnclick = (project) => {
		console.log(project, "demo");
		window.open(project.links.demo);
	};

	return (
		<div className={styles.techStack}>
			<h2
				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="600"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				My Projects
			</h2>
			<div
				className={styles.CardContainer}
				data-aos="fade-up"
				data-aos-offset="220"
				data-aos-delay="800"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				{cardData &&
					cardData.map((ele) => {
						return (
							<div
								style={{
									boxShadow:
										"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
								}}
								className={styles.antdCardCont}
							>
								<Card
									hoverable
									cover={
										<img
											alt="example"
											src={ele.cardImg}
											className="p-1"
											height="200px"
										/>
									}
									actions={[
										<Button
											onClick={() =>
												handleViewGitHubOnclick(ele)
											}
											type="primary"
										>
											Github
										</Button>,
										<Button
											onClick={() =>
												handleViewDemoOnclick(ele)
											}
											type="primary"
										>
											Demo
										</Button>,
									]}
								>
									<Meta
										title={ele.cardHead}
										description={ele.cardBody}
									/>
									<Meta
										style={{ marginTop: "10px" }}
										title="Teck stack used :"
										description=""
									/>
									<div
										style={{
											display: "flex",
											justifyContent: "space-evenly",
										}}
									>
										{ele.techStack.map((img) => (
											<img
												src={img}
												className={styles.projectIcon}
												alt=".."
											/>
										))}
									</div>
								</Card>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Projects;
