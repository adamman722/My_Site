import React from "react";
import Input from "../components/Input";
import SnackbarBlock from "../components/Snackbar/Snackbar";
function Login(props) {
  return (
    <div className="container">
      <Input bool={props.bool} />
      <SnackbarBlock />
    </div>
  );
}
export default Login;
