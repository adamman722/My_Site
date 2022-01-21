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
  return (
    <div className="container">
      <MyButton />
    </div>
    // <div className="container">
    //   {users && <Inputs users={users} isRegistered={isReg} />}
    // </div>
  );
}

export default App;
