import React, { useState } from 'react';
import './App.css';

import data from "./data";
import Cards from "./components/Card";
import TeamForm from "./components/Form";

import { Header, Card, Container } from 'semantic-ui-react'

function App() {
  const [cards, setCards] = useState(data);
  const addNewTeamMemb = card => {
    setCards([...cards, card]);
  };
  return (
    <div className="App">
      <Header as='h1' className="App-header">Team Builder</Header>
      <Container text>
      <Header as='h2' className="Main-cont">"New Worker" form</Header>
      <TeamForm addNewTeamMemb={addNewTeamMemb} />  
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
