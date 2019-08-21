import React, { useState } from "react";

const TeamForm = props => {

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Note Name</label>
      <input
        type="text"
        name="name"
        placeholder="Worker name"
        value={card.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Note Email</label>
      <textarea
        name="email"
        type="email"
        placeholder="Type your note here"
        value={card.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Note role</label>
      <input
        type="text"
        name="role"
        placeholder="Worker role"
        value={card.role}
        onChange={changeHandler}
      />
      <button type="submit">Add note</button>
    </form>
  );
};

export default TeamForm;