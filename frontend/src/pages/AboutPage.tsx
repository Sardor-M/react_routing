import { Link } from "react-router-dom";
import runnerHero from "../assets/images/running_banner_img.png";
import styled from "styled-components";
import React from "react";
import Button from "../components/UI/Button";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
const PageContainer = styled.div`
    flex-direction: column;
    align-items: center;
`

const ImageElement = styled.img<ImageProps>`
    width: 100%;
`

const PageContentElement = styled.div`
    padding-inline: 23px;
    color: #161616;
    margin-bottom: 300px;
`

const TextElement = styled(PageContentElement).attrs({as: "h1"})`
 line-height: 38px;
`

const ParagraphElement  = styled(PageContentElement).attrs({as: "p"})`
  line-height: 22px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 18px;
  border-bottom: 1px solid #161616;
  border-top: 1px solid #161616;

`
// i want to
const TextContainer = styled.div`
    background-color: #ffcc8d;
    color: #161616;
    padding-inline: 32px;
    padding-bottom: 32px;
    margin-inline: 80px;
    border-radius: 5px;
`

const TextInsideContainer = styled(TextContainer).attrs({as: "h2"})`
    margin-bottom: -19px;
    padding-block: 27px;
`

const JoinButton = styled(TextContainer).attrs({as: "button"})`
    background-color: #c7fbb2;
    text-align: center;
    border: none;
    border-radius: 5px;
    color: #e7fdd8;
    padding-bottom: 1px;
    //padding-block: 10px;
    font-size: 15px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #1ea7fd;
    }
`
function handleJoinToCommunity () {
  return ;
}

export default function AboutPage() {
  return (
    <PageContainer>
      <ImageElement src={runnerHero} />
      <PageContentElement>
        <TextElement>Start running with the community of runners.</TextElement>
        <ParagraphElement>
          Dont wait at home thinking about when to run or where to run or with
          whom to run with. Just run here with the people you want to run with.
          Join the community of runners and find your running buddy. It is never
          late to start running. Just run here. :
        </ParagraphElement>
        {/*<ParagraphElement>*/}
        {/*  Our mission is to help people to find their running buddy and start*/}
        {/*  running with them. Start your journey with us here and be the part of*/}
        {/*  the community.*/}
        {/*</ParagraphElement>*/}
      </PageContentElement>
      <TextContainer>
        <TextInsideContainer> A community of runners are waiting for you. Join now.</TextInsideContainer>
        <ParagraphElement>
          Our mission is to help people to find their running buddy and start
          running with them. Start your journey with us here and be the part of
          the community.
        </ParagraphElement>
          <JoinButton
              onClick={handleJoinToCommunity}>
        <Link className="link-button" to={"/register"}>
          Join Now
        </Link>
          </JoinButton>
      </TextContainer>
    </PageContainer>
  );
}
