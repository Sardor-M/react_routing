import React from "react";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>This is your component</p>
    </div>
  );
};

export default Card;
