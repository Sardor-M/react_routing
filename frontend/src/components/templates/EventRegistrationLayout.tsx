import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function EventRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children} </Container>;
}
