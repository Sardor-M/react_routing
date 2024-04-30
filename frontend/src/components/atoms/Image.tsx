import styled, { css } from "styled-components";
import { ImageProps } from "../../types";

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "cover"};

  ${({ isIcon, height, width }) =>
    isIcon &&
    css`
      height: ${height || "1em"};
      width: ${width || "1em"};
    `}
`;
