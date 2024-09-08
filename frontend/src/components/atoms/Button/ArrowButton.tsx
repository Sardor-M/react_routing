import styled from "styled-components";

export interface ArrowButtonsProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const StyledArrowButtons = styled.button<ArrowButtonsProps>`
  z-index: 2;
  position: absolute;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);

  ${({ direction }) =>
    direction === "right"
      ? `
    right: -20px;                       // Position right arrow to the right
    transform: translate(0, -50%);
  `
      : `
    left: -20px;                       // Position left arrow to the left
    transform: translate(0, -50%);
  `}
  &:hover {
    background-color: rgb(255, 250, 0);
  }
`;

/* right: ${({ direction }) => (direction === "right" ? "25px" : "none")};
  left: ${({ direction }) => (direction === "left" ? "25px" : "none")}; */
