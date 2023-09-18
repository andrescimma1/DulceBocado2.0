import React from "react";
import "./Card.scss";

interface Props {
  item: any;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <div className="card">
      <div className="title">
        <h3>{item?.name}</h3>
      </div>
    </div>
  );
};

export default Card;
