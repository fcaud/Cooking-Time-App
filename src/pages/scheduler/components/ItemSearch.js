import React from "react";
import "./ItemSearch.css";

export default function ItemSearch() {
  return (
    <div className="ItemSearch">
      <form className="component-input-form">
        <input type="text" placeholder="Type meal component here..."></input>
        <input type="submit" value="Add component"></input>
      </form>
    </div>
  );
}
