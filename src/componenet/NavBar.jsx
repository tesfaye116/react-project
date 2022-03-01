import React from "react";
import { useState } from "react";
import PeopleList from "./person";

function AddPersonForm() {
  const [person, setPerson] = useState("");
  const[names, setNames] = useState([]);

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNames([...names, person]);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new contact"
          onChange={handleChange}
          value={person}
        />
        <button type="submit">Add</button>
      </form>
      <PeopleList data ={names} />
    </div>
  );
}

export default AddPersonForm;
