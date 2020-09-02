import React, { useEffect } from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import styles from "./portfolio.module.css";
import emailjs from "emailjs-com";

export default (props) => {
  useEffect(() => {
    let templateParams = {
      from_name: "devganesh1998@gmail.com",
      to_name: "devganesh91@gmail.com",
      subject: "Portfolio Viewed",
      message_html: "<h1>Your Portfolio is being viewed by someone</h1>",
    };
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USERID
    );
  });

  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.profileDetails}>
        <h1>Dev Ganesh Pandian</h1>

        <h3>Full Stack Developer</h3>
        <p>
          I am an allround dedicated and passionate full stack developer trained
          and skilled in MERN stack at Masai school, looking forward to join a
          startup where I can enhance my skills and can become an asset to the
          organisation.
        </p>
        <div className={styles.ProfileIcons}>
          <div>
            <EmailIcon />
            <p>devganesh91@gmail.com</p>
          </div>
          <div>
            <CallIcon />
            <p>+91 90876 38144</p>
          </div>
          <div>
            <LocationOnOutlinedIcon />
            <p>TamilNadu (India)</p>
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
                href="https://www.linkedin.com/in/dev-ganesh-3641aa19a/"
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
                href="https://www.hackerrank.com/devganesh91"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvmjNQawHf52Z-zUUcV1yZC7DEj0TL4kc7kalaKowWZZC3FR1h&usqp=CAU"
                  alt="HackerRankImg"
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
          href="https://drive.google.com/file/d/1bU_k-sPMusoZh42A-HbInRiteg6Fwjte/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};
