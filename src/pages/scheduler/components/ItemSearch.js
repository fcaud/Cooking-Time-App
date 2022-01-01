import React, { useState } from "react";
import "./ItemSearch.css";
import { useDispatch } from "react-redux";
import { addMealComponent } from "../store/mealComponentSlice";

export default function ItemSearch() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addMealComponent({
          title: value,
        })
      );
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
