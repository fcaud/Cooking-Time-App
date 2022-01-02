import React from "react";

export default function CookButton({
  timeSelector,
  startTime,
  endTime,
  setStart,
  setEnd,
}) {
  const onClick = () => {
    if (timeSelector === "Start time") {
      setStart(startTime);
    } else if (timeSelector === "End time") {
      setEnd(endTime);
    }
  };

  return (
    <button className="cook-button" onClick={onClick}>
      Cook!
    </button>
  );
}
