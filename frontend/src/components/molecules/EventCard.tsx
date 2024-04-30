// Molecules/CardHeader.tsx
import React from "react";
import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { EventCardProps } from "../../types";

export const CardHeader: React.FC<EventCardProps> = ({ imageSrc, title }) => (
  <div>
    <Image src={imageSrc} alt={title} />
    <Title marginTop="14px">{title}</Title>
  </div>
);
