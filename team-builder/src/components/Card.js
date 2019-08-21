import React from "react";

const Cards = props => {
  console.log(props);
  return (
    <div className="cards-list">
      {props.cardsList.map(card => {
        return (
          <div className="cards" key={card.id}>
            <h2>{card.name}</h2>
            <p>{card.email}</p>
            <p>{card.role}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
