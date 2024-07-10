// Molecules/CardHeader.tsx
import React from "react";
import { EventCardProps } from "../../types";
import Card from "../atoms/EventCard/Card";
import Title from "../atoms/Title/Title";
import { Image } from "../atoms/Image";
import styled from "styled-components";
import { SiNamebase } from "react-icons/si";

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;

export const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  date,
  type,
  price,
  category,
  location,
}) => {
  return (
    <Card
      max-width="350px"
      whileHover={{ scale: 1.02 }}
      display="flex"
      flex-direction="row"
      border="1px solid #eee;"
      overflow={true}
      borderRadius="10px"
      padding="16px"
      margin=" 10px 0"
      margin-left="auto"
      margin-right="auto"
      // margin-buttom="20px"
      width="100%"
      background="#fff"
      box-shadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      clickable={true}
    >
      <Image
        src={imageSrc}
        alt={title}
        style={{
          width: "240px",
          height: "200px",
          borderRadius: "10px",
          // marginBottom: "10px",
        }}
        // object-fit="cover"
      />
      <CardContent>
        <Title margin="0 0 10px">
          <SiNamebase> </SiNamebase> {title}
        </Title>
        <p>{location} </p>
        <p>{date}</p>
      </CardContent>
    </Card>
  );
};
