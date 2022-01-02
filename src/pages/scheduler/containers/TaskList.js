import React from "react";
import "./TaskList.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function TaskList() {
  const startEndTime = useSelector((state) => state.startEndTime);

  return (
    <div className="TaskList">
      <div className="row">
        <div className="col">
          <h2>Start Time: {startEndTime[0].startTime}</h2>
        </div>
        <div className="col">
          <h2>End Time: {startEndTime[0].endTime}</h2>
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
            <button className="alarm-button">
              <FontAwesomeIcon icon={Icons.faBell} />
            </button>
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
            <button className="note-button">
              <FontAwesomeIcon icon={Icons.faStickyNote} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button className="alarm-button">
              <FontAwesomeIcon icon={Icons.faBellSlash} />
            </button>
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
            <button className="note-button">
              <FontAwesomeIcon icon={Icons.faStickyNote} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button className="alarm-button">
              <FontAwesomeIcon icon={Icons.faBell} />
            </button>
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
            <button className="note-button">
              <FontAwesomeIcon icon={Icons.faStickyNote} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
