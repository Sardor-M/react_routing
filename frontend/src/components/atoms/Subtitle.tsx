import React from "react";
import styled from "styled-components";

interface TextForSubPagesProps {
  fontSize?: string;
  textAlign?: string;
  marginBottom?: string;
  children: React.ReactNode;
}

const TextForSubPages = styled.p<TextForSubPagesProps>`
  margin-top: 20px;
  margin-left: 22px;
  margin-bottom: ${(props) => props.marginBottom || "0"};
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: bold;
`;

const SubTitle: React.FC<TextForSubPagesProps> = ({
  children,
  fontSize,
  textAlign,
  marginBottom,
}) => {
  return (
    <TextForSubPages
      fontSize={fontSize}
      textAlign={textAlign}
      marginBottom={marginBottom}
    >
      {children}
    </TextForSubPages>
  );
};

export default SubTitle;
