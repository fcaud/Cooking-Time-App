import React from "react";
import "./ComponentInput.css";

export default function ComponentInput() {
  return (
    <div className="component-input-box">
      <div className="component-text-input">
        <form>
          <input type="text" placeholder="Type meal component here..."></input>
          <input type="submit" value="Add component"></input>
        </form>
      </div>
    </div>
  );
}
