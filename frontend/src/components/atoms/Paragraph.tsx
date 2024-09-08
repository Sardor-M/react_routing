import React from "react";
import styled from "styled-components";

const PtagWrapper = styled.p`
  margin: 0;
`;
interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <PtagWrapper>{children}</PtagWrapper>;
};

export default Paragraph;
