// Organisms/EventCard.tsx
import React from "react";
import { CardHeader } from "../molecules/EventCard";
import styled from "styled-components";
import { EventCardProps } from "../../types";

const StyledCard = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const EventCard: React.FC<EventCardProps> = ({ imageSrc, title }) => (
  <StyledCard>
    <CardHeader imageSrc={imageSrc} title={title} />
  </StyledCard>
);
