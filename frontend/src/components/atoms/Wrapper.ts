// this is the customizable div wrapper component

import styled from "styled-components";

interface WrapperProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  boxShadow?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
  overflow?: string;
  cursor?: string;
  transition?: string;
  transform?: string;
  hoverTransform?: string;
  display?: string;
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  display: ${(props) => props.display || "flex"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.marginTop || "100px"};
`;

/* margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
  padding: ${(props) => props.padding || "0px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  border: ${(props) => props.border || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  right: ${(props) => props.right || "0px"};
  bottom: ${(props) => props.bottom || "0px"};
  z-index: ${(props) => props.zIndex || "0"};
  overflow: ${(props) => props.overflow || "visible"};
  cursor: ${(props) => props.cursor || "auto"};
  transition: ${(props) => props.transition || "none"};
  transform: ${(props) => props.transform || "none"};
  &:hover {
    transform: ${(props) => props.hoverTransform || "none"};
  } */
