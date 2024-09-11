import { motion } from "framer-motion";
import styled from "styled-components";

interface CardProps {
  borderRadius?: string;
  padding?: string;
  margin?: string;
  display?: string;
  width?: string;
  position?: string;
  top?: string;
  left?: string;
  backgroundColor?: string;
  height?: string;
  children: React.ReactNode;
}

const StyledCard = styled(motion.div)<CardProps>`
  border: 1px solid #ddd;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  padding: ${({ padding }) => padding || "16px"};
  margin: ${({ margin }) => margin || "0"};
  display: "flex";
  width: ${({ width }) => width || "100%"};
  position: ${({ position }) => position || "relative"};
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: ${({ height }) => height || "auto"};
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const hoverAnimation = {
  scale: 1.03,
  rotate: 0.2,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  transition: {
    duration: 0.3,
  },
};

const tapAnimation = {
  scale: 0.9,
  transition: {
    duration: 0.2, // duration of the transition for the tap effect
  },
};

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <StyledCard whileHover={hoverAnimation} whileTap={tapAnimation} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;

// const Card = styled.div<{
//   primary?: boolean;
//   secondary?: boolean;
//   bold?: boolean;
//   small?: boolean;
//   round?: number;
//   clickable?: boolean;
//   align?: "center" | "start" | "end";
//   justify?: "center" | "start" | "end" | "space-between";
//   height?: number;
// }>(
//   ({
//     primary,
//     bold,
//     clickable,
//     small,
//     round = 5,
//     align = "start",
//     justify = "start",
//   }) => css`;
//     border-radius: ${round}px;
//     background-color: ${primary ? theme.colors.blue1 : theme.colors.white};
//     border: 1px solid
//       ${(() => {
//       if (bold) return primary ? theme.colors.blue6 : theme.colors.gray4;
//       return primary ? theme.colors.blue3 : theme.colors.gray3;
//     })()};
//     padding: ${small ? `12px 15px` : `18px 20px`};
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: ${align};
//     justify-content: ${justify};
//     ${clickable &&
//     css`
//       cursor: pointer;
//       &:hover {
//         background-color: ${theme.colors.blue1};
//       }
//     `}
//   `
// );

// export default Card;
