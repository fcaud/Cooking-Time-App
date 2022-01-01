import React, { useState } from "react";
import "./ItemSearch.css";

export default function ItemSearch({ onAddMealComponent }) {
  const [value, setValue] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      onAddMealComponent(value);
    }
  };
  return (
    <div className="ItemSearch">
      <form className="component-input-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type meal component here..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <input type="submit" value="Add component"></input>
      </form>
    </div>
  );
}
