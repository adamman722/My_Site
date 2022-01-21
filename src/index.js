import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const right = false;
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/App" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home/Login" element={<Home bool={true} />} />
        <Route path="/Home/Reg" element={<Home bool={false} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
