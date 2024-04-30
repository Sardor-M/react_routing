// thbis is the custom atom button component to use everywhere

import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const ButtonWrapper = styled.button`
  background-color: #2529f3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4d4d;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};

export default Button;
