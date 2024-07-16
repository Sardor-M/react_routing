import styled from "styled-components";
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
  // new one
  /* margin-top: 250px !important; */

  margin-bottom: 60px !important;
  max-width: calc(100% - 150px); // assumes you want 20px space on each side
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

  // this is the old style
  /* margin-top: 250px;
  width: 100%;
  border-radius: 10px;
  height: 100%; */
`;

export const PageContentElement = styled.div`
  padding-inline: 23px;
  color: #161616;
  margin-bottom: 50px;
  line-height: 23px;
`;

export const TextElement = styled(PageContentElement).attrs({ as: "h1" })`
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

const TextContainer = styled.div`
  display: row;
  background-color: #ebff00;
  color: #0f0f19;
  padding-inline: 32px;
  padding-bottom: 32px;
  margin-inline: 80px;
  border-radius: 10px;
  box-sizing: border-box; // include padding in width calculation
`;
export const ParagraphElement = styled(PageContentElement).attrs({ as: "p" })<{
  marginBottom?: string;
}>`
  line-height: 22px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 18px;
  border-bottom: 1px solid #161616;
  border-top: 1px solid #161616;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
`;

const TextInsideContainer = styled(PageContentElement).attrs({ as: "h2" })`
  margin-bottom: -19px;
  padding-block: 27px;
`;

const JoinButton = styled(PageContentElement).attrs({ as: "button" })`
  background-color: #0f32fa;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding-bottom: 1px;
  //padding-block: 10px;
  font-size: 15px;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: #021b4d;
  }
`;

const ButtonName = styled.a`
  color: #ffffff;
`;

function handleJoinToCommunity() {
  console.log("Join Now button clicked");
  if (window.confirm("Do you want to join the community?")) {
    console.log("User joined the community.");
  }
}

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
          <TextElement> # Start your Journey From Here #</TextElement>{" "}
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
        {/* <TextContainer>
        <div>
          <TextInsideContainer>
            {" "}
            A community of runners are waiting for you. Join now.
          </TextInsideContainer>
          <ParagraphElement>
            Our mission is to help people to find their running buddy and start
            running with them. Start your journey with us here and be the part
            of the community.
          </ParagraphElement>
          <JoinButton onClick={handleJoinToCommunity}>
            <Link className="link-button" to={"/register"}>
              <ButtonName>Join Now</ButtonName>
            </Link>
          </JoinButton>
        </div>
        <div>
          <Image
            src={runner_hero}
            width="50%"
            height="50%"
            alt="Runner community"
          />
        </div>
      </TextContainer> */}
      </PageContainer>
      <AboutPageThree />
    </>
  );
}
