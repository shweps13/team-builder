import React, { useState } from 'react';
import './App.css';

import data from "./data";
import Cards from "./components/Card";

import { Header, Card, Container } from 'semantic-ui-react'

function App() {
  const [cards, setCards] = useState(data);
  return (
    <div className="App">
      <Header as='h1' className="App-header">Team Builder</Header>
      <Container text>
      <Header as='h1' className="Main-cont">Forms will be here</Header>
      </Container>
      <Container text>
        <Card.Group>
          <Cards cardsList={cards} />
        </Card.Group>
      </Container> 
    </div>
  );
}

export default App;
