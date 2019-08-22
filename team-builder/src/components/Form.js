import React, { useState } from "react";

import { Button, Form } from 'semantic-ui-react'


const TeamForm = props => {
  const [card, setCard] = useState({ name: "", email: "", role: "" });
  const changeHandler = event => {
    //computed properties
    console.log(event.target.value);
    setCard({ ...card, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newTeamMemb = {
      ...card,
      id: Date.now()
    };
    props.addNewTeamMemb(newTeamMemb);
    setCard({ name: "", email: "", role: "" });
  };
  return (
    <Form onSubmit={submitForm}>
        <Form.Field>
            <label htmlFor="name">Full name</label>
            <input
                type="text"
                name="name"
                placeholder="Worker name"
                value={card.name}
                onChange={changeHandler}
            />
        </Form.Field>
        <Form.Field>
            <label htmlFor="email">Email</label>
            <input
                name="email"
                type="email"
                placeholder="Worker Email"
                value={card.email}
                onChange={changeHandler}
            />
        </Form.Field>
        <Form.Field>
            <label htmlFor="role">Company role</label>
            <input
                type="text"
                name="role"
                placeholder="Worker role"
                value={card.role}
                onChange={changeHandler}
            />
        </Form.Field>       
      <Button type='submit'>Submit</Button>
      </Form>
  );
};

export default TeamForm;
