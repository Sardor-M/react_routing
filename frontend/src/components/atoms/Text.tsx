// Atoms/Text.tsx
import styled from "styled-components";

interface TextProps {
  textAlign?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingBottom?: string;
  children: React.ReactNode;
}

const TextWrapper = styled.p<TextProps>`
  padding-bottom: ${(props) => props.paddingBottom || "40px"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  text-align: "center";
  display: flex; // Use flex to center content
  justify-content: center; // Horizontally center content in the flex container
  align-items: center; // Vertically center content in the flex container
  height: 100%; // Make sure the container spans the height it needs to center vertically
  line-height: 26px;
  margin: auto; // Automatic margin for both block start and end, helping in centering
  max-width: 590px; // Max-width can help the text not span the full width of very wide containers

  @media (min-width: 300px) {
    font-size: 18px;
  }
`;

const Text: React.FC<TextProps> = ({ children, display, fontWeight }) => {
  return (
    <TextWrapper display={display} fontWeight={fontWeight}>
      {" "}
      {children}{" "}
    </TextWrapper>
  );
};

export default Text;
