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
      <div className="component-time-inputs">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            <h3>Prep Time</h3>
          </div>
          <div className="col">
            <h3>Cook Time</h3>
          </div>
          <div className="col">
            <h3>Post Cook Time</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button>Delete</button>
          </div>
          <div className="col">
            <p>Chicken</p>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <button>note</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button>Delete</button>
          </div>
          <div className="col">
            <p>Roast Potatoes</p>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <button>note</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button>Delete</button>
          </div>
          <div className="col">
            <p>Parsnips</p>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <input type="time"></input>
          </div>
          <div className="col">
            <button>note</button>
          </div>
        </div>
      </div>
    </div>
  );
}
