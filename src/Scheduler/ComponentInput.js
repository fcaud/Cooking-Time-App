import React from "react";
import "./ComponentInput.css";

export default function ComponentInput() {
  return (
    <div className="component-input-module">
      <div className="component-text-input">
        <form>
          <input type="text" placeholder="Type meal component here..."></input>
          <input type="submit" value="Add component"></input>
        </form>
      </div>
      <div className="component-time-inputs">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-1">
            <h3>Prep Time</h3>
          </div>
          <div className="col-1">
            <h3>Cook Time</h3>
          </div>
          <div className="col-1">
            <h3>Post Cook Time</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button>Delete</button>
          </div>
          <div className="col-3">
            <p>Chicken</p>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <button>note</button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button>Delete</button>
          </div>
          <div className="col-3">
            <p>Roast Potatoes</p>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <button>note</button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button>Delete</button>
          </div>
          <div className="col-3">
            <p>Parsnips</p>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <button>note</button>
          </div>
        </div>
      </div>
    </div>
  );
}
