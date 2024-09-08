import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonSearch = styled(motion.button)`
  background-color: #ffdd00;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ffc800;
  }
`;

export default ButtonSearch;
