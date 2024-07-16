import styled from "styled-components";
import homepage_video from "../../assets/images/Homepage.mp4";

// Styled components for layout
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const VideoElementWrapper = styled.div`
  position: relative;
  width: 100%; // Full width to match the parent
  overflow: hidden; // Ensure nothing spills out
`;

const VideoElement = styled.video`
  width: 100%; // Video takes the full width of its container
  border-radius: 10px;
  height: auto; // Maintain aspect ratio
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 30%; // Adjust as necessary to move the div up or down on the video
  left: 50%;
  transform: translate(-50%, -30%); // Center the content
  text-align: center; // Center text inside the div
  background-color: #ebff00;
  color: #fff; // Text color
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  padding: 20px;
  border-radius: 10px;
  width: 80%; // Width of the overlay content, adjust as needed
`;

// Page component
export default function AboutPage() {
  return (
    <PageContainer>
      <VideoElementWrapper>
        <OverlayContent>
          <h1>Moments MAKE US</h1>
          <p>
            Whether you run, cycle, swim, climb, or clamber... for the heat of
            the competition or fun with friends. Let's Do This will help you
            find, book and share your next momentous experience.
          </p>
        </OverlayContent>
        <VideoElement src={homepage_video} autoPlay loop muted />
      </VideoElementWrapper>
    </PageContainer>
  );
}
