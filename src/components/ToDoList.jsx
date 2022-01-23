import React, { useState } from "react";

function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="containerToDoList">
      <div className="headingToDoList">
        <h1 className="h1ToDoList">To-Do List</h1>
      </div>
      <div className="formToDoList">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          className="inputToDoList"
        />
        <button onClick={addItem} className="buttonToDoList">
          <span className="spanToDoList">Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li className="liToDoList">{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
