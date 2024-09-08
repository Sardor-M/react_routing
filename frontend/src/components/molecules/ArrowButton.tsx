import {
  ArrowButtonsProps,
  StyledArrowButtons,
} from "../atoms/Button/ArrowButton";

const ArrowButtons = ({ direction, onClick }: ArrowButtonsProps) => (
  <div>
    <StyledArrowButtons direction={direction} onClick={onClick}>
      {direction === "right" ? ">" : "<"}
    </StyledArrowButtons>
  </div>
);

export default ArrowButtons;
