import React from "react";
import styled from "styled-components";

export interface PopularCardEventInfoProps {
  date: string;
  eventName: string;
  LocationIcon: JSX.Element;
  location: string;
  PriceIcon: JSX.Element;
  priceRange: string;
  imageSrc?: string;
}

const EventName = styled.h3`
  margin: 5px;
  padding: 5px;
  text-align: left;
`;

const EventElementWithIcon = styled(EventName).attrs({ as: "p" })`
  margin: 4px;
`;
const EventInfoContainer = styled.div`
  padding: 10px;
`;

const EventInfoRow = styled.div<{ fontSize?: string; color?: string }>`
  display: flex;
  /* align-items: center; */
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#909090"};
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 5px; // adjust the margin as much as needed
`;

const EventDate = styled(EventName).attrs({ as: "p" })`
  margin: 5px;
  padding: 5px;
  font-size: 15px;
  color: #909090;
`;

// const ContentContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 8px;
//   gap: 8px;
// `;

// const ContentContainerRow = styled.div`
//   flex-direction: column;
// `;

export const PopularEventCardInfo: React.FC<PopularCardEventInfoProps> = ({
  date,
  eventName,
  LocationIcon,
  location,
  PriceIcon,
  priceRange,
}) => (
  // <ContentContainer>
  <EventInfoContainer>
    <EventDate>{date}</EventDate>
    <EventName>{eventName}</EventName>
    <EventElementWithIcon>
      <EventInfoRow>
        <IconWrapper>{LocationIcon}</IconWrapper>
        {location}
      </EventInfoRow>
    </EventElementWithIcon>
    <EventElementWithIcon>
      <EventInfoRow fontSize="16px" color="black">
        <IconWrapper>{PriceIcon}</IconWrapper>
        {priceRange}
      </EventInfoRow>
    </EventElementWithIcon>
  </EventInfoContainer>
  // </ContentContainer>
);
