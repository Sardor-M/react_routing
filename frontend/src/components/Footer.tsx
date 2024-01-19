import React from "react";
import githubSvg from "../assets/images/githubsvg.svg";
import linkedinSvg from "../assets/images/linkedinsvg.svg";
import twitterSvg from "../assets/images/twittersvg.svg";
import mediumSvg from "../assets/images/mediumsvg.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/sardor-m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubSvg} alt="Github" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterSvg} alt="Twitter" />
        </a>
        <a
          href="https://linkedin.com/sardor-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinSvg} alt="LinkedIn" />
        </a>
        <a
          href="https://medium.com/@sardor-m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mediumSvg} alt="Personal Website" />
        </a>
      </div>
      <p>© 2024 by Sardor-M</p>
    </div>
  );
}
