// Molecules/CardHeader.tsx
import React from "react";
import { EventCardProps } from "../../types";
import Card from "../atoms/EventCard/Card";
import styled, { css } from "styled-components";
import Image from "../atoms/Image";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { IoLogoUsd } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";

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
          /* align-items: center; */
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
  max-height: ${({ layout }) => (layout === "horizontal" ? "200px" : "220px")};
`;

const EventDetails = styled.div<{ layout: "horizontal" | "vertical" }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${({ layout }) => (layout === "vertical" ? "2px" : "2px 2px")};
  padding-top: ${({ layout }) =>
    layout === "vertical" ? "5px" : "0"}; // Slight padding for alignment
  /* align-items: flex-start; */
  width: ${({ layout }) =>
    layout === "horizontal" ? "calc(100% - 220px)" : "100%"};
`;

const EventTitle = styled.div<{ layout: "horizontal" | "vertical" }>`
  /* padding-top: 14px;
  padding-bottom: 12px; */
  padding: ${({ layout }) => (layout === "horizontal" ? "10px 0" : "12px 0")};
  font-size: 18px;
  margin: ${({ layout }) => (layout === "horizontal" ? "0 10px 10px 0" : "0")};
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
`;

const EventLocation = styled.div`
  color: #666;
  font-size: 13.5px;
  margin: 4px 0;
  display: flex;
  align-items: center; // this will align the icon and text in the same line;
`;

const EventDate = styled.p`
  color: #666;
  font-size: 13.5px;
  margin: 4px 0;
  display: flex;
  align-items: center; // this will align the icon and text in the same line;
`;

const EventDistance = styled.p`
  color: #666;
  font-size: 13.5px;
  margin: 4px 0;
  display: flex;
  align-items: center;
`;

const SubDetailsContainer = styled.div<{ layout: "horizontal" | "vertical" }>`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin: ${({ layout }) => (layout === "horizontal" ? "28px 0" : "7px 0")};
  /* 4px 0px; */
  margin-bottom: 0;
`;

const Price = styled.p`
  display: flex;
  align-items: center;
  margin: 4px 0;
  font-size: 15px;
  font-weight: bold;
  --tw-text-opacity: 1;
  color: rgb((255, 255, 255) / var(--tw-text-opacity));
`;

const Views = styled.p`
  margin: 5px 1px;
  font-size: 15px;
  color: #7c7c7c;
`;

export const EventCard: React.FC<
  EventCardProps & { layout?: "horizontal" | "vertical" }
> = ({
  imageSrc,
  title,
  date,
  location,
  category,
  price,
  width = "100%",
  height = "auto",
  borderRadius = "8px",
  imageWidth = "300px",
  imageHeight = "300px",
  layout = "vertical",
}) => {
  const distanceMap: { [key: string]: string } = {
    "Short Run": "5 km - 10 km",
    "Trail Running": "10 km - 21 km",
    "Half-Marathon": "21 km",
    Marathon: "42 km",
  };

  let distance: string = category ? distanceMap[category] || "" : "";

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
        <EventDetails layout={layout}>
          <EventTitle layout={layout}>{title}</EventTitle>
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
          {layout === "horizontal" && distance && (
            <EventDistance>
              <FaRunning
                style={{ marginRight: "5px", fill: "rgb(57, 102, 251)" }}
              />
              {distance}
            </EventDistance>
          )}
          <SubDetailsContainer layout={layout}>
            <Price>
              {(price ?? 0) > 80 ? (
                "Free"
              ) : (
                <>
                  <IoLogoUsd
                    style={{ marginRight: "1px", fill: "rgb(16, 16, 16)" }}
                  />
                  {price}
                </>
              )}
            </Price>
            <Views>{(price ?? 0 * 10) / 2} views</Views>
          </SubDetailsContainer>
        </EventDetails>
      </CardLayout>
    </Card>
  );
};
