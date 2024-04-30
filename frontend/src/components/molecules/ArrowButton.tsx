import {
  ArrowButtonsProps,
  StyledArrowButtons,
} from "../atoms/Button/ArrButtons";

const ArrowButtons = ({ direction, onClick }: ArrowButtonsProps) => (
  <div>
    <StyledArrowButtons direction={direction} onClick={onClick}>
      {direction === "right" ? ">" : "<"}
    </StyledArrowButtons>
  </div>
);

export default ArrowButtons;
