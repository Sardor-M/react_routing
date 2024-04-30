import React from "react";
import styled from "styled-components";
import { Price } from "../../atoms/Price";

const Footer = styled.div`
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent overlay
  padding: 1em;
`;

interface FooterProps {
  price: string;
}

const FooterMolecule: React.FC<FooterProps> = ({ price }) => (
  <Footer>
    <Price color="white">{price}</Price>
  </Footer>
);

export default FooterMolecule;
