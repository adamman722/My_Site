import "./App.css";
import React, { useState, useEffect } from "react";
import MyButton from "./components/FirstButtons";

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
