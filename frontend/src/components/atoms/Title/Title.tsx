import styled, { css } from "styled-components";

const Title = styled.h1<{
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
}>(
  ({ margin, padding, fontSize, fontWeight }) => css`
    font-size: ${fontSize || "1.5rem"};
    font-weight: ${fontWeight || "bold"};
    margin: ${margin || "0"};
    padding: ${padding || "0"};
  `
);

export default Title;
