// import styled, { css } from "styled-components";
// import { theme } from "../../../tools/theme";

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
//   }) => css`
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

export {};
