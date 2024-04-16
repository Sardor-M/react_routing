import React from "react";
import { MainTemplate } from "../../templates";
import { CardList } from "../../organisms/CardList";

const HomePageMolecul: React.FC = () => {
  return (
    <MainTemplate>
      <h1>Home Page</h1>
      <CardList />
    </MainTemplate>
  );
};

export default HomePageMolecul;
