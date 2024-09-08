// thbis is the custom atom button component to use everywhere

import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  css?: React.CSSProperties;
  variant?: "primary" | "secondary";
}

const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "secondary" ? "#ffffff" : "#2529f3"};
  color: ${(props) => (props.variant === "secondary" ? "#2529f3" : "white")};
  border: ${(props) =>
    props.variant === "secondary" ? "1px solid #2529f3" : "none"};
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  /* width: 100%; // Full width button */

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary" ? "#f5f5f5" : "#ff4d4d"};
    color: ${(props) =>
      props.variant === "secondary" ? "#2529f3" : "#ffffff"};
  }

  &:disabled {
    background-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
  /* background-color: #2529f3;
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
  } */
`;

const Button: React.FC<ButtonProps> = ({ onClick, type, text, variant }) => {
  return (
    <ButtonWrapper onClick={onClick} text={text} type={type} variant={variant}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
