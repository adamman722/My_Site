import React, { useState, useEffect } from "react";
import Data from "../userData.json";

function Input(props) {
  const [userName, setUserName] = useState("");
  const [newUser, addNewUser] = useState([]);
  const [users, addUser] = useState(null);

  function handleChange(event) {
    const { value } = event.target;
    setUserName(value);
    users.map((value) => {
      value.email;
    });
  }
  function CheckUsers(value) {}
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        addUser(data);
        console.log(users);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {};

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
        value={userName}
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
