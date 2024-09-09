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
  display: ${({ display }) => display || "block"};
  width: ${({ width }) => width || "auto"};
  position: ${({ position }) => position || "relative"};
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  height: ${({ height }) => height || "auto"};
  overflow: hidden;
`;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
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
