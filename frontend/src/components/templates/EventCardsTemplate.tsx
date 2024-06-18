import React from "react";
import styled from "styled-components";

interface Event {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
}

interface EventCardsTemplateProps {
  events: Event[];
}

const EventCardWrapper = styled.div`
  margin-top: 120px;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 10px; // It creates space between the cards
`;

const EventCardContainer = styled.div`
  position: relative;
  flex: 0 1 calc(33.333% - 40px); // Adjust the width of each card
  max-width: calc(
    33.333% - 40px
  ); // Adjust the max-width to ensure 3 cards per row
  margin: 0 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;
const EventImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  border-radius: 8px;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 18px; // Adjust the position as needed
  left: 24px; // Adjust the position as needed
  color: #ffffff;
`;

const EventTitle = styled.h3`
  font-size: 20px;
  font-family: Bossa, Sans-Serif;
  margin: 0;
  text-align: left;
  color: #fffafa;
  font-weight: bold;
`;

const EventSubtitle = styled.p`
  font-family: Bossa, Sans-Serif;
  font-size: 14px;
  margin: 0;
  text-align: left;
  color: #fffdfd;
  font-weight: normal;
`;

// const StyledLink = styled(EventSubtitle)`
//   color: inherit; // Inherit the text color from the parent
//   text-decoration: none; // No underline
//   &:hover {
//     text-decoration: underline; // Underline on hover for visual feedback
//   }
// `;

export const EventCardsTemplate: React.FC<EventCardsTemplateProps> = ({
  events,
}) => (
  <EventCardWrapper>
    {events.map((event, index) => (
      <EventCardContainer key={index}>
        <EventImage src={event.imageSrc} alt={event.title} />
        <EventImageOverlay />
        <TextOverlay>
          {/* <NavLink
            to="/runner"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          > */}
          <EventTitle>{event.title}</EventTitle>
          <EventSubtitle>{event.subtitle}</EventSubtitle>
          {/* <StyledLink to={event.subtitle}>Learn More</StyledLink> */}
          {/* </NavLink> */}
        </TextOverlay>
      </EventCardContainer>
    ))}
  </EventCardWrapper>
);
