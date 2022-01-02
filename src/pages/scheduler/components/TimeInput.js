import React from "react";
import "./TimeInput.css";

export default function TimeInput() {
  return (
    <div className="TimeInput">
      <form>
        <select name="time" id="time-select">
          <option value="">--Select--</option>
          <option value="start">Start time</option>
          <option value="end">End Time</option>
        </select>
        <input type="time"></input>
      </form>
    </div>
  );
}
