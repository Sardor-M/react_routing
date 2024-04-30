import styled from "styled-components";

interface TextForSubPagesProps {
  fontSize?: string;
  textAlign?: string;
  marginBottom?: string;
}

export const TextForSubPages = styled.h3<TextForSubPagesProps>`
  margin-top: 20px;
  margin-left: 22px;
  margin-bottom: ${(props) => props.marginBottom || "0"};
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: bold;
`;
