// Molecules/CardHeader.tsx
import React from "react";
import { EventCardProps } from "../../types";
import Card from "../atoms/EventCard/Card";
import styled from "styled-components";
import { SiNamebase } from "react-icons/si";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const Heading = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  font-weight: bold;
`;

const EventDate = styled.p`
  color: #666;
  font-size: 14px;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  date,
  location,
}) => {
  return (
    <Card
      position="relative"
      width="100%"
      height="100%"
      backgroundColor="rgba(0, 0, 0, 0.03)"
    >
      <CardContainer>
        <Image
          src={imageSrc}
          alt={title}
          width="242px"
          height="330px"
          objectFit="cover"
          style={{
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
        <Heading>
          <SiNamebase> </SiNamebase> {title}
        </Heading>
        <Text display={"center"} fontWeight={"bold"}>
          {location}{" "}
        </Text>
        <EventDate>{date}</EventDate>
      </CardContainer>
    </Card>
  );
};
