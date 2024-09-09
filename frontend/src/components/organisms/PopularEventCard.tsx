// Organisms/EventCard.tsx
import React from "react";
import styled from "styled-components";
import {
  PopularCardEventInfoProps,
  PopularEventCardInfo,
} from "../molecules/PopularEventCardInfo";
import Image from "../atoms/Image";
import { ReactComponent as LocationIcon } from "../../assets/images/card_icon/location.svg";
import { ReactComponent as PriceIcon } from "../../assets/images/card_icon/ticket.svg";
import { Link } from "react-router-dom";

const StyledEventCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000029;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PopularEventCard: React.FC<PopularCardEventInfoProps> = ({
  imageSrc,
  date,
  eventName,
  location,
  priceRange,
}) => (
  <StyledEventCard>
    {/* <Image src={imageSrc} alt={eventName} /> */}
    <Link to={"/events"}>
      <Image
        src={imageSrc}
        alt={eventName}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Link>
    <PopularEventCardInfo
      date={date}
      eventName={eventName}
      LocationIcon={<LocationIcon width="15px" height="15px" />}
      location={location}
      PriceIcon={<PriceIcon width="15px" height="15px" />}
      priceRange={priceRange}
    />
  </StyledEventCard>
);
