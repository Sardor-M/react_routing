// Molecules/CardHeader.tsx
import React from "react";
import { EventCardProps } from "../../types";
import Card from "../atoms/EventCard/Card";
import styled, { css } from "styled-components";
import Image from "../atoms/Image";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

const CardLayout = styled.div<{ layout: "horizontal" | "vertical" }>`
  border-radius: 8px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  display: flex;
  width: 100%;
  ${({ layout }) =>
    layout === "horizontal"
      ? css`
          flex-direction: row;
          align-items: center;
          justify-content: start;
          max-width: 1000px; // Restrict the max width for horizontal cards
          width: 100%;
        `
      : css`
          flex-direction: column;
          width: 100%;
        `}
`;

const ImageWrapper = styled.div<{ layout: "horizontal" | "vertical" }>`
  display: flex;
  flex-shrink: 0; // prevents the iamge from shrinking
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin-right: ${({ layout }) => (layout === "horizontal" ? "10px" : "0")};
  max-width: ${({ layout }) => (layout === "horizontal" ? "220px" : "300px")};
  max-height: ${({ layout }) => (layout === "horizontal" ? "200px" : "300px")};
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 10px; */
  padding-top: 5px; // Slight padding for alignment
`;

const EventTitle = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 18px;
  margin: 0;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
`;

const EventLocation = styled.div`
  color: #666;
  font-size: 14px;
  margin: 4px 0;
  display: flex;
  align-items: center; // this will align the icon and text in the same line;
`;

const EventDate = styled.p`
  color: #666;
  font-size: 14px;
  margin: 4px 0;
  display: flex;
  align-items: center; // this will align the icon and text in the same line;
`;

export const EventCard: React.FC<
  EventCardProps & { layout?: "horizontal" | "vertical" }
> = ({
  imageSrc,
  title,
  date,
  location,
  category,
  width = "100%",
  height = "auto",
  borderRadius = "8px",
  imageWidth = "300px",
  imageHeight = "300px",
  layout = "vertical",
}) => {
  return (
    <Card
      position="relative"
      width={width}
      height={height}
      backgroundColor="rgba(0, 0, 0, 0.03)"
      borderRadius={borderRadius}
    >
      <CardLayout layout={layout}>
        <ImageWrapper layout={layout}>
          <Image
            src={imageSrc}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
            style={{
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          />
        </ImageWrapper>
        <EventDetails>
          <EventTitle>{title}</EventTitle>
          <EventLocation>
            <FaLocationDot
              style={{ marginRight: "5px", fill: "rgb(57, 102, 251)" }}
            />
            {location}
          </EventLocation>
          <EventDate>
            <MdDateRange
              style={{ marginRight: "5px", fill: "rgb(57, 102, 251)" }}
            />
            {date}{" "}
          </EventDate>
          <EventDate>
            <BiCategoryAlt
              style={{ marginRight: "5px", fill: "rgb(57, 102, 251)" }}
            />
            {category}
          </EventDate>
        </EventDetails>
      </CardLayout>
    </Card>
  );
};
