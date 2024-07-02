// Molecules/CardHeader.tsx
import React from "react";
import { EventCardProps } from "../../types";
import Card, { Details } from "../atoms/EventCard/Card";
import Title from "../atoms/Title/Title";

export const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  date,
  type,
  price,
  category,
  description,
}) => {
  return (
    <div>
      <Card whileHover={{ scale: 1.02 }}>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "8px",
          }}
        />
        <Title> {title}</Title>
        <Details>{description}</Details>
      </Card>
    </div>
  );
};
