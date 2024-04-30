// Atoms/Text.tsx
import styled from "styled-components";

interface TextProps {
  textAlign?: string;
  display?: string;
}

export const Text = styled.p<TextProps>`
  font-size: 16px;
  font-weight: normal;
  text-align: ${(props) => props.textAlign || "center"};
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

//  This is the old styling one for reference
/* font-size: 16px;
  font-weight: normal;
  text-align: ${(props) => props.textAlign || "center"};
  display: ${(props) => props.display || "block"};
  margin-block-start: ${(props) => (props.display === "inline" ? "0" : "1em")};
  margin-block-end: ${(props) => (props.display === "inline" ? "0" : "1em")};
  margin-right: ${(props) => (props.display === "inline" ? "0" : "20em")};
  margin-left: ${(props) => (props.display === "inline" ? "0" : "20em")};

  @media (min-width: 300px) {
    font-size: 18px;
    margin-block-start: ${(props) =>
    props.display === "inline" ? "0" : "1.5em"};
  } */
