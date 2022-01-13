import React from "react";

export default function CookButton({ timeSelector, Time, setStart, setEnd }) {
  const onClick = () => {
    if (timeSelector === "Start time") {
      setStart(Time);
    } else if (timeSelector === "End time") {
      setEnd(Time);
    }
  };

  return (
    <button className="cook-button" onClick={onClick}>
      Cook!
    </button>
  );
}
