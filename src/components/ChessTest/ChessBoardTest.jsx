import React, { useState } from "react";
import Square from "./Square";

function Knight() {
  const [padletsList, setPadletsLists] = useState([]);
  const [userInput, setUserInput] = useState("");

  // function Knight() {
  //   return <span>♘</span>;
  // }

  function renderSquare(x, y, [knightX, knightY]) {
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return <Square black={black}>{piece}</Square>;
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <Square black>
        <span>♘</span>
      </Square>
    </div>
  );
}

export default Knight;
