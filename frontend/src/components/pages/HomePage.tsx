import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { PopularEvents } from "./PopularEvents";
import { TextForSubPages } from "../atoms/Subtitle";
import { Text } from "../atoms/Text";
import { ParagraphElement, TextElement } from "./AboutPage";

interface CarouselImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  active: boolean;
}

const images: string[] = [
  "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?q=80&w=2764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551927336-09d50efd69cd?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530143311094-34d807799e8f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CarouselContainer = styled.div`
  position: relative;
  /* margin-bottom: 120px; */
  width: 100%;
  height: 490px;
  overflow: hidden;
`;

const CarouselImage = styled.img<CarouselImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opcacity 0.5s ease-in;
`;
const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const CarouselControl = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  //align-items: center;align-items: center;
  font-size: 18px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 200, 0);
  }
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const CarouselDot = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: rgb(255, 250, 0);
  }
`;
export default function HomePage({ images: [], interval = 3600 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex: number) => {
        if (prevIndex === images.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, interval);
    return () => {
      clearInterval(timer);
    };
  });

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <CarouselContainer>
        {/* <TitleOverlay> Explore the running events near you</TitleOverlay> */}
        {images.map((imageUrl, index) => (
          <CarouselImage
            key={index}
            src={imageUrl}
            alt={"carousel image"}
            // style={{opacity: index === activeIndex ? 1 : 0}}
            active={index === activeIndex}
          />
        ))}
        <CarouselControls>
          <CarouselControl onClick={handlePrevClick}> &#8249; </CarouselControl>
          <CarouselControl onClick={handleNextClick}> &#8250; </CarouselControl>
        </CarouselControls>
        <CarouselDots>
          {images.map((_, index) => (
            <CarouselDot
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                backgroundColor:
                  index === activeIndex
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(255, 255, 255, 0.5)",
              }}
            />
          ))}
        </CarouselDots>
        {/* <Map/> */}
      </CarouselContainer>
      <div>
        <TextElement> # Your Journey of Running begins here #</TextElement>{" "}
        {/* <TitleOverlay> Explore the running events near you</TitleOverlay> */}
        <Text>
          Don't wait at home thinking about when to run or where to run or with
          whom to run with. Just run here with the people you want to run with.
          Join the community of runners and find your running buddy. It is never
          late to start running. Just run here. In our platform you can find the
          running events near you and join them. You can also create your own
          running event and invite others to join.{" "}
        </Text>
      </div>
      <PopularEvents />
      {/* <EventTypes /> */}
      <div>
        <TextForSubPages marginBottom="120px"></TextForSubPages>
        <ParagraphElement>
          Dont wait at home thinking about when to run or where to run or with
          whom to run with. Just run here with the people you want to run with.
          Join the community of runners and find your running buddy. It is never
          late to start running. Just run here. :
        </ParagraphElement>
      </div>
      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}
