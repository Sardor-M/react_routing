import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

const CollapsibleContainer = styled.div`
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
`;

const Title = styled.h3`
  margin: 0;
`;

const Content = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;
interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsibleContainer>
      <Header onClick={toggleOpen}>
        <Title>{title}</Title>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </Header>
      <Content style={{ maxHeight: isOpen ? "1000px" : 0 }}>{children}</Content>
    </CollapsibleContainer>
  );
};

export default Collapsible;
