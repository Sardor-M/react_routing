import styled, { keyframes } from "styled-components";
import React from "react";
import { Box } from "@mui/material";
import homepage_video from "../../assets/images/Homepage.mp4";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import AboutPageThree from "./AboutPageEvents";
import { EventTypes } from "./EventTypes";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  display?: string;
}
const PageContainer = styled.div`
  /* flex-direction: column;
  align-items: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; // use the full width of the viewport
`;

const ImageElement = styled.img<ImageProps>`
  margin-top: 250px;
  width: 80%;
  border-radius: 10px;
`;

const VideoElement = styled.video<ImageProps>`
  margin-bottom: 60px !important;
  max-width: calc(100% - 350px);
  border-radius: 20px;
  height: auto;
  margin: 0 auto; // center the video
  display: block; // ensures the margins work correctly
  /* object-fit: cover; // cover the entire container */
  /* height: 400px !important; */

  // Use media queries for responsive design if needed
  @media (max-width: 430px) {
    max-width: 300px; // smaller space on smaller screens
  }
`;

export const PageContentElement = styled.div`
  padding-inline: 23px;
  color: #161616;
  /* margin-bottom: 50px; */
  line-height: 23px;
`;

const colorChange = keyframes`
  0% { color: #ffd2d2; }
  16.67% { color: #f3ff95; }
  33.33% { color: #69a8ff; }
  50% { color: #ff9914; }
  66.67% { color: #cb70db; }
  83.33% { color: #c74715; }
  100% { color: #d2ffed; }
`;

export const TextElement = styled(PageContentElement).attrs({ as: "h1" })`
  font-size: 35px;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 60px;
  margin-top: 60px;
  animation: ${colorChange} 5s infinite; // Apply the animation
`;

const TextElementTitle = styled(PageContentElement).attrs({ as: "h1" })`
  font-size: 35px;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 60px;
`;
const TitleInsideContainer = styled.div`
  background-color: #ebff00;
  margin-bottom: -140px;
  padding-block: 190px;
`;

export const ParagraphElement = styled(PageContentElement).attrs({ as: "p" })`
  line-height: 22px;
  padding: 25px 10px;
  /* padding-top: 10px; */
  margin: 100px 100px 20px;
  border-bottom: 1px solid #161616;
  border-top: 1px solid #161616;
`;

export default function AboutPage() {
  return (
    <>
      <PageContainer>
        {/* <ImageElement src={running_man} /> */}
        <div>
          <TitleInsideContainer>
            <Title fontSize="60px"> # Run-With-Us</Title>
            <Text>
              #Run-With-Us is a place where all sort of runner community people
              and running enthusiasts can come together and run with each other.
              We are dedicated to help people to find their running buddy and
              start running with them. Start your journey with us here and be
              the part of the community.
            </Text>
          </TitleInsideContainer>
          <VideoElement src={homepage_video} autoPlay loop muted />
        </div>
        <PageContentElement>
          <TextElement>
            Start running with the community of runners.
          </TextElement>
          <ParagraphElement>
            Dont wait at home thinking about when to run or where to run or with
            whom to run with. Just run here with the people you want to run
            with. Join the community of runners and find your running buddy. It
            is never late to start running. Just run here. :
          </ParagraphElement>
          <EventTypes />
        </PageContentElement>
        <PageContentElement>
          <TextElementTitle> # Start your Journey From Here #</TextElementTitle>{" "}
          <Text>
            Don't wait at home thinking about when to run or where to run or
            with whom to run with. Just run here with the people you want to run
            with. Join the community of runners and find your running buddy. It
            is never late to start running. Just run here. In our platform you
            can find the running events near you and join them. You can also
            create your own running event and invite others to join.{" "}
          </Text>
        </PageContentElement>
        <Box sx={{ margin: 3 }}></Box>
      </PageContainer>
      <AboutPageThree />
    </>
  );
}
