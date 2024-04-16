import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div>
      {/* <HomePageMolecul /> */}
      {children}
    </div>
  );
};

export default MainTemplate;
