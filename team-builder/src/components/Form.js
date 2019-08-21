import React, { useState } from "react";

const TeamForm = props => {
  const [card, setCard] = useState({ name: "", email: "", role: "" });
//   const changeHandler = event => {
//     //computed properties
//     console.log(event.target.value);
//     setNote({ ...note, [event.target.name]: event.target.value });
//   };
//   const submitForm = event => {
//     event.preventDefault();
//     const newNote = {
//       ...note,
//       id: Date.now()
//     };
//     props.addNewNote(newNote);
//     setNote({ title: "", body: "" });
//   };
  return (
    <form >
      <label htmlFor="name">Note Name</label>
      <input
        type="text"
        name="name"
        placeholder="Worker name"
        value={card.name}
        // onChange={changeHandler}
      />
      <label htmlFor="email">Note Email</label>
      <textarea
        name="email"
        type="email"
        placeholder="Type your note here"
        value={card.email}
        // onChange={changeHandler}
      />
      <label htmlFor="role">Note role</label>
      <input
        type="text"
        name="role"
        placeholder="Worker role"
        value={card.role}
        // onChange={changeHandler}
      />
      <button type="submit">Add note</button>
    </form>
  );
};

export default TeamForm;
