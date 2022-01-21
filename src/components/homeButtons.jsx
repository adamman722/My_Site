import React from "react";
import { Link } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import Home from "../Pages/Home";

function Button() {
  function ToLogin(event) {}
  return (
    <div>
      <nav>
        <NavLink to={"/Home/Login"} className="nugget">
          Have a account
        </NavLink>
        <p>or</p>
        <NavLink to={"/Home/Reg"} className="nugget">
          Register
        </NavLink>
      </nav>
    </div>
    // <div>
    //   <button className="ButtonBox" type="submit">
    //     Login
    //   </button>
    //   <button className="ButtonBox" type="submit">
    //     Register
    //   </button>
    // </div>
  );
}
export default Button;
