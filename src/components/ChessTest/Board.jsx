import React from "react";
import Square from "./Square";
import Knight from "./ChessBoardTest";
export default function Board() {
  return (
    <div>
      <Square black>
        <Knight />
      </Square>
    </div>
  );
}
