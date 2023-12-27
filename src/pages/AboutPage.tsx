import React from "react";
import { Link } from "react-router-dom";
import runnerHero from "../assets/images/running_banner_img.png";
export default function AboutPage() {
  return (
    <div className="about-page-container">
      <img alt="runner-hero" src={runnerHero} className="about-hero-image" />
      <div className="about-page-content">
        <h1>Start running with the community of runners.</h1>
        <p>
          Dont wait at home thinking about when to run or where to run or with
          whom to run with. Just run here with the people you want to run with.
          Join the community of runners and find your running buddy. It is never
          late to start running. Just run here. :)
        </p>
        <p>
          Our mission is to help people to find their running buddy and start
          running with them. Start your journey with us here and be the part of
          the community.
        </p>
      </div>
      <div className="about-page-cta">
        <h2> A community of runners are waiting for you. Join now.</h2>
        <Link className="link-button" to={"/register"}>
          Join Now
        </Link>
      </div>
    </div>
  );
}
