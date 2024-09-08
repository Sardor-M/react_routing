import styled from "styled-components";

const StyledLabel = styled.label`
  /* font-family: "SUIT", sans-serif; */
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
  justify-content: left;
`;

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
