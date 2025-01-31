import React from "react";

import { Card } from 'semantic-ui-react'

const Cards = props => {
  console.log(props);
  return (
    <div className="cards-list">
      {props.cardsList.map(card => {
        return (
            <Card className="cards" key={card.id}>
                <Card.Content>
                    <Card.Header>{card.name}</Card.Header>
                    <Card.Meta>{card.email}</Card.Meta>
                    <Card.Description>{card.role}</Card.Description>
                </Card.Content>
            </Card>
        );
      })}
    </div>
  );
};
export default Cards;
