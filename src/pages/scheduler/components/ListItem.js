import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ListItem({
  title,
  id,
  onDeleteMealComponent,
  ...rest
}) {
  const onClick = () => {
    onDeleteMealComponent(id);
  };

  return (
    <div className="ListItem">
      <div className="row">
        <div className="col-1">
          <button className="delete-button" onClick={onClick}>
            <FontAwesomeIcon icon={Icons.faTrash} />
          </button>
        </div>
        <div className="col-4">
          <p>{title}</p>
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
  );
}
