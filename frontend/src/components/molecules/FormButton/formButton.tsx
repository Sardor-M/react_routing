import React from "react";
import Button from "../../atoms/Button/Button";

const formButton: React.FC = ({ children, textOnly, className, onClick }) => {
  return (
    <div>
      <Button
        className={className}
        children={children}
        onClick={onClick}
      ></Button>
    </div>
  );
};

export default formButton;
