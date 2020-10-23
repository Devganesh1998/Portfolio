import React, { useEffect } from "react";
// import Card from "./SubComponents/Card";
import { Button } from "antd";
import { Card } from "antd";
import ReactGA from "react-ga";
import styles from "../styles/portfolio.module.css";
const { Meta } = Card;

const Projects = (props) => {
	const { cardData } = props;
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

	const handleViewGitHubOnclick = (project) => {
		console.log(project, "git");
		ReactGA.event({
			category: "Github opened",
			action: project.links.github,
		});
		window.open(project.links.github);
	};

	const handleViewDemoOnclick = (project) => {
		console.log(project, "demo");
		ReactGA.event({
			category: "Demo visited",
			action: project.links.demo,
		});
		window.open(project.links.demo);
	};

	useEffect(() => {
		if (isVisible) {
			console.log("GA metric sent - Section visited Projects");
			ReactGA.event({
				category: "Section visited",
				action: "Projects visited",
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
				My Projects
			</h2>
			<div
				className={styles.CardContainer}
				data-aos="fade-up"
				data-aos-offset="220"
				data-aos-delay="150"
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
