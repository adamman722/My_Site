import React from "react";
import Input from "../components/Input";
function Home(props) {
  return (
    <div className="container">
      <Input bool={props.bool} />
    </div>
  );
}
export default Home;
