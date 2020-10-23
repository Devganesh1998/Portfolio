import React, { useState, useRef, useEffect } from "react";
import ReactGA from "react-ga";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import styles from "../styles/portfolio.module.css";

const About = (props) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef();

	useEffect(() => {
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
			console.log("GA metric sent - Section visited AboutMe");

			ReactGA.event({
				category: "Section visited",
				action: "AboutMe",
			});
		}
	}, [isVisible]);

	return (
		<div className={styles.ProfileContainer} ref={domRef}>
			<div className={styles.profileDetails}>
				<h1>Dev Ganesh Pandian</h1>

				<h3>Full Stack Developer</h3>
				<p>
					I am an allround dedicated and passionate full stack
					developer trained and skilled in MERN stack at Masai school,
					looking forward to join a startup where I can enhance my
					skills and can become an asset to the organisation.
				</p>
				<div className={styles.ProfileIcons}>
					<div>
						<EmailIcon />
						<p style={{ marginLeft: 5 }}>devganesh91@gmail.com</p>
					</div>
					<div>
						<CallIcon />
						<p style={{ marginLeft: 5 }}>+91 90876 38144</p>
					</div>
					<div>
						<LocationOnOutlinedIcon />
						<p style={{ marginLeft: 5 }}>TamilNadu (India)</p>
					</div>
				</div>
				<div>
					<ul className={styles.redirects}>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/devganesh1998"
							>
								<img
									src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
									alt="GitHubImg"
								/>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/devganesh"
							>
								<img
									src="https://image.flaticon.com/icons/svg/38/38669.svg"
									alt="linkedInImg"
								/>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://twitter.com/DevGanesh10"
							>
								<img
									src="/icons/twitterIcon.png"
									alt="MediumImg"
									style={{ height: 60, width: 60 }}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.profile}>
				<img src="ProfilePic.png" alt="ProfileImg" />
				<a
					className={styles.download_btn}
					href="https://drive.google.com/file/d/1vVtoOPo63gtmNWrrTP1PzrcPhLjrZ7Jb/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					My Resume
				</a>
			</div>
		</div>
	);
};

export default About;
