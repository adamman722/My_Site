import React, { useState } from "react";
import Data from "../userData.json";

function Input(props) {
  const [userInput, setUserInput] = useState("");
  const [newUser, addNewUser] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setUserInput(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: "something", password: "something" };

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("added");
    });
  };

  return (
    <form className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Username"
        value={userInput}
      />
      <input type="password" placeholder="Password" />
      {!props.bool && <input type="password" placeholder="Confirm Password" />}

      <button onSubmit={props.bool ? handleChange : handleSubmit} type="submit">
        {props.bool ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Input;
