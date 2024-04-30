// Atoms/Title.tsx
import styled from "styled-components";

export const Title = styled.h1<{ marginTop?: string, fontSize?:string }>`
  margin-top: ${(props) => props.marginTop || "-180px"};
  font-size: ${(props) => props.fontSize || "0.9rem"};
  /* font-weight: bold; */
`;
