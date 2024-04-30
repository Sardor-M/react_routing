// Pages/HomePage.tsx
import React from "react";
import { EventCardsTemplate } from "../templates/EventCardsTemplate";
import { ButtonColor, JoinButton } from "./AboutPageThree";
import { Link } from "react-router-dom";
import { Wrapper } from "../atoms/Wrapper";

const events = [
  {
    imageSrc: "https://source.unsplash.com/400x300/?running",
    title: "Running events",
    subtitle: "24,748 upcoming races",
  },
  {
    imageSrc: "https://source.unsplash.com/400x300/?triathlon",
    title: "Triathlon events",
    subtitle: "2,748 upcoming",
  },
  {
    imageSrc: "https://source.unsplash.com/400x300/?marathon",
    title: "Marathon events",
    subtitle: "1,748 upcoming",
  },
  {
    imageSrc: "https://source.unsplash.com/400x300/?swimming",
    title: "Swimming events",
    subtitle: "5,748 upcoming",
  },
  {
    imageSrc: "https://source.unsplash.com/400x300/?cycling",
    title: "Cycling events",
    subtitle: "12,748 upcoming",
  },
  // add more events here
];

export const EventTypes: React.FC = () => (
  <div>
    <Wrapper>
      <EventCardsTemplate
        events={events.slice(0, 4).map((event) => ({ ...event, link: "" }))}
      />
    </Wrapper>
    <Wrapper display="column" justifyContent="space-between">
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor> # Marathons</ButtonColor>
        </Link>
      </JoinButton>
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor> # Triathlon</ButtonColor>
        </Link>
      </JoinButton>
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor># Cycling</ButtonColor>
        </Link>
      </JoinButton>
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor># Short Runs</ButtonColor>
        </Link>
      </JoinButton>
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor># Swimming</ButtonColor>
        </Link>
      </JoinButton>
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor># Long Runs</ButtonColor>
        </Link>
      </JoinButton>
      {/* <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor># Cycling</ButtonColor>
        </Link>
      </JoinButton>
      <JoinButton>
        <Link className="link-button" to={"/events"}>
          <ButtonColor># Short Runs</ButtonColor>
        </Link>
      </JoinButton> */}
    </Wrapper>
  </div>
);
