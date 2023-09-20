import React from "react";
import Card from "../Card/Card";
import "./Cards.scss";

interface Item {
  id: number;
  name: string;
}

interface Props {
  items: Item[];
}

const Cards: React.FC<Props> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item: Item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Cards;
