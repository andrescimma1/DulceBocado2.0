import React from "react";
import Card from "../Card/Card";
import "./Cards.scss";

interface Props {
  items: any;
}

const Cards: React.FC<Props> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item: Object) => (
        <Card item={item} />
      ))}
    </ul>
  );
};

export default Cards;
