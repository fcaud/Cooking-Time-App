import React from "react";
import "./ComponentInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ComponentInput() {
  return (
    <div className="ComponentInput">
      <div className="component-text-input">
        <form>
          <input type="text" placeholder="Type meal component here..."></input>
          <input type="submit" value="Add component"></input>
        </form>
      </div>
      <div className="component-time-inputs">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-2">
            <h3>Prep Time</h3>
          </div>
          <div className="col-2">
            <h3>Cook Time</h3>
          </div>
          <div className="col-2">
            <h3>Post Cook Time</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button className="delete-button">
              <FontAwesomeIcon icon={Icons.faTrash} />
            </button>
          </div>
          <div className="col-4">
            <p>Chicken</p>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <button className="note-button">
              <FontAwesomeIcon icon={Icons.faStickyNote} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button className="delete-button">
              <FontAwesomeIcon icon={Icons.faTrash} />
            </button>
          </div>
          <div className="col-4">
            <p>Roast Potatoes</p>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <button className="note-button">
              <FontAwesomeIcon icon={Icons.faStickyNote} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button className="delete-button">
              <FontAwesomeIcon icon={Icons.faTrash} />
            </button>
          </div>
          <div className="col-4">
            <p>Parsnips</p>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-2">
            <input type="time"></input>
          </div>
          <div className="col-1">
            <button className="note-button">
              <FontAwesomeIcon icon={Icons.faStickyNote} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
