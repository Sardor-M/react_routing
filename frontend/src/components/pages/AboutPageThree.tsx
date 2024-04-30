// Assuming PageContentElement and ParagraphElement are styled similarly to above

import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Link } from "react-router-dom";
import runner_hero from "../../assets/images/running_banner_img.png";

const PageContainer = styled.div`
  /* flex-direction: column;
  */
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; // use the full width of the viewport
  margin: 0; // center the content
  /* min-height: calc(10vh - 10px); // use the full height of the viewport */
  margin-bottom: -14px;
`;

const TextContainer = styled.div`
  display: flex; // Use flex to put content side by side
  align-items: center; // Vertically align items in the center
  justify-content: space-between; // Distribute space between elements
  background-color: #ebff00;
  padding: 30px 80px; // Add padding on all sides
  border-radius: 10px;
  margin-bottom: 15px; // Add some margin at the bottom to separate from the footer

  @media (max-width: 768px) {
    flex-direction: column; // Stack elements vertically on smaller screens
    align-items: stretch; // Stretch items to full width
    padding: 32px; // Reduce padding on smaller screens
  }
`;

const TextContent = styled.div`
  flex: 1; // Text content takes up the remaining space
  margin-right: 88px; // Add some margin between text and image

  @media (max-width: 768px) {
    margin-right: 0; // Reset margin on smaller screens
    margin-bottom: 20px; // Add margin at the bottom when stacked
  }
`;
const PageContentElement = styled.div`
  padding-inline: 23px;
  color: #161616;
  margin-bottom: 300px;
`;
const TextInsideContainer = styled(PageContentElement).attrs({ as: "h2" })`
  margin-bottom: -19px;
  padding-block: 27px;
  text-align: left;
`;
const ParagraphElement = styled(PageContentElement).attrs({ as: "p" })`
  line-height: 22px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 18px;
  border-bottom: 1px solid #161616;
  border-top: 1px solid #161616;
`;
const StyledImage = styled(Image)`
  flex-shrink: 0; // Prevent the image from shrinking
  width: 40%; // Set the width of the image to 50% of the container
  height: auto; // Keep the aspect ratio of the image
  border-radius: 10px; // Optional: if you want rounded corners

  @media (max-width: 768px) {
    width: 100%; // Full width on smaller screens
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const JoinButton = styled(PageContentElement).attrs({ as: "button" })`
  background-color: #0f32fa;
  text-align: right;
  /* display: block; */
  border: none;
  border-radius: 24px;
  padding-bottom: 1px;
  /* padding-block: 10px; */
  font-size: 15px;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;

  &:hover {
    background-color: #002162;
  }
`;

const ViewButton = styled(JoinButton).attrs({ as: "button" })`
  background-color: #f9f7f7;
  color: #ffffff;
  font-size: 18px;
  transition: all 0.5s ease;
  text-align: center;
  border-radius: 24px;

  &:hover {
    color: #b0b0b0;
    background-color: #c2e8ff;
  }
`;

export const ButtonColor = styled.a`
  font-size: 15px;
  color: ${(props) => props.color || "#fbfcff"};
`;
// const LinkElement = styled.a`
//   color: #001ab0;
//   text-decoration: 10px underline;
//   font-size: 15px;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   margin-left: 20px;
//   transition: color 0.3s ease-in-out;
// `;
const handleJoinToCommunity = () => {
  if (window.confirm("Do you want to join the community?")) {
    alert("Welcome to the community!");
  }
};

function AboutPageThree() {
  return (
    <PageContainer>
      <TextContainer>
        <TextContent>
          <TextInsideContainer>
            A community of runners are waiting for you. Join now.
          </TextInsideContainer>
          <ParagraphElement>
            Our mission is to help people to find their running buddy and start
            running with them. Start your journey with us here and be the part
            of the community.
          </ParagraphElement>
          <ButtonContainer>
            <ViewButton>
              <Link className="link-button" to={"/register"}>
                <ButtonColor color="rgb(91, 122, 247)">
                  View All the Upcoming Events
                </ButtonColor>
              </Link>
            </ViewButton>
            <JoinButton onClick={handleJoinToCommunity}>
              <Link className="link-button" to={"/register"}>
                <ButtonColor>Join Now</ButtonColor>
              </Link>
            </JoinButton>
          </ButtonContainer>
        </TextContent>
        <StyledImage src={runner_hero} alt="Runner community" />
      </TextContainer>
    </PageContainer>
  );
}

export default AboutPageThree;
