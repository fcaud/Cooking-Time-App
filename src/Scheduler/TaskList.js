import React from "react";
import "./TaskList.css";

export default function TaskList() {
  return (
    <div className="TaskList">
      <div className="row">
        <div className="col">
          <h2>Start Time: 12:00</h2>
        </div>
        <div className="col">
          <h2>End Time: 16:00</h2>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <h3>Task:</h3>
          </div>
          <div className="col-4">
            <h3>Complete by:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button>toggle alarm</button>
          </div>
          <div className="col-5">
            <p>Prep Chicken</p>
          </div>
          <div className="col-4">
            <p>12:15</p>
          </div>
          <div className="col-1">
            <input type="checkbox"></input>
          </div>
          <div className="col-1">
            <button>Note</button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button>toggle alarm</button>
          </div>
          <div className="col-5">
            <p>Cook Chicken</p>
          </div>
          <div className="col-4">
            <p>12:15</p>
          </div>
          <div className="col-1">
            <input type="checkbox"></input>
          </div>
          <div className="col-1">
            <button>Note</button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button>toggle alarm</button>
          </div>
          <div className="col-5">
            <p>Prep Roast Potatoes</p>
          </div>
          <div className="col-4">
            <p>12:15</p>
          </div>
          <div className="col-1">
            <input type="checkbox"></input>
          </div>
          <div className="col-1">
            <button>Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}
