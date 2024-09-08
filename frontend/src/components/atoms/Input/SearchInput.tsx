import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
`;

const InputSearchStyled = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
`;
const InputSearchIconContainer = styled.div`
  /* display: flex; */
  position: absolute;
  align-items: center;
  align-items: right;
  right: 10px;
  /* padding: 10px; */
  /* background-color: #f1f1f1;
  border-radius: 5px 0 0 5px; */
  /* color: #b1bdc8; */
`;

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const InputSearch: React.FC<InputSearchProps> = ({ icon, ...props }) => {
  return (
    <InputContainer>
      <InputSearchStyled {...props} />
      {icon && <InputSearchIconContainer>{icon}</InputSearchIconContainer>}
    </InputContainer>
  );
};

export default InputSearch;
