import styled, { css } from "styled-components";

const Title = styled.h3<{
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  padddingLeft?: string;
  display?: string;
}>(
  ({ margin, padding, fontSize, fontWeight, padddingLeft, display }) => css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    margin: ${margin};
    padding: ${padding};
    padding-left: ${padddingLeft};
    display: ${display};
  `
);

export default Title;
