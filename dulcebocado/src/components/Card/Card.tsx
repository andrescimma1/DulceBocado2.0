import React from "react";
import "./Card.scss";

interface Item {
  id: number;
  name: string;
}

interface Props {
  item: Item;
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
