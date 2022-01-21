import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Cotact";
import Projects from "./Pages/Projects";
import { Route, Link, Router } from "react-router-dom";
import Data from "./userData.json";
import Inputs from "./components/Input";
import MyButton from "./components/homeButtons";

function App() {
  const [users, addUser] = useState(null);
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

  return (
    <div className="container">{users && <MyButton />}</div>
    // <div className="container">
    //   {users && <Inputs users={users} isRegistered={isReg} />}
    // </div>
  );
}

export default App;
