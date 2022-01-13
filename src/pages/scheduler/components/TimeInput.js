import React, { useState } from "react";
import "./TimeInput.css";

export default function TimeInput() {
  const [time, setTime] = useState("");
  const [startOrEnd, setStartOrEnd] = useState("");

  return (
    <div className="TimeInput">
      <form>
        <select
          name="time"
          id="time-select"
          value={startOrEnd}
          onchange={(event) => setStartOrEnd(event.target.value)}
        >
          <option value="">--Select--</option>
          <option value="start">Start time</option>
          <option value="end">End time</option>
        </select>
        <input
          type="time"
          value={time}
          onchange={(event) => setTime(event.target.value)}
        ></input>
      </form>
    </div>
  );
}
