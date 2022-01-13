import React from "react";
import "./TimeInput.css";

export default function TimeInput(props) {
  return (
    <div className="TimeInput">
      <form>
        <select
          name="time"
          id="time-select"
          onChange={(event) => {
            props.timeSelector(event.target.value);
          }}
        >
          <option value="">--Select--</option>
          <option value="Start time">Start time</option>
          <option value="End time">End time</option>
        </select>
        <input
          type="time"
          onChange={(event) => {
            props.time(event.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
