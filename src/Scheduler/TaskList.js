import React from "react";
import "./TaskList.css";

export default function TaskList() {
  return (
    <div className="task-list-module">
      <div className="row">
        <div className="col">
          <h2>Start Time: 12:00</h2>
        </div>
        <div className="col">
          <h2>End Time: 16:00</h2>
        </div>
      </div>
    </div>
  );
}
