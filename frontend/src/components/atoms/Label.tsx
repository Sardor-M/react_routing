import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
