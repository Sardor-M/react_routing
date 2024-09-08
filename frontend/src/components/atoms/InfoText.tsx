import React from "react";
import styled from "styled-components";

interface InfoTextContaiener {
  text: string;
  children?: React.ReactNode;
  disabled?: boolean;
  css?: React.CSSProperties;
  size?: "info" | "text";
}

const InfoTextContainer = styled.p<InfoTextContaiener>`
  color: #686868;
  display: flex;
  font-size: 12px;
  margin: ${(props) => (props.size === "info" ? "10px 0" : "15px 0")};
  background: rgba(191, 214, 252, 0.5);
  padding: ${(props) => (props.size === "text" ? "10px 0" : "10px")};
  border-radius: 4px;
`;

const InfoText: React.FC<InfoTextContaiener> = ({ text, size, children }) => {
  return (
    <InfoTextContainer text={text} size={size}>
      {" "}
      {children}
    </InfoTextContainer>
  );
};

export default InfoText;
