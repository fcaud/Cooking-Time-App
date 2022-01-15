import React from "react";

export default function CookButton({
  timeSelector,
  time,
  setStart,
  setEnd,
  setPrepCookPost,
  mealUpdates,
}) {
  const onClick = () => {
    setPrepCookPost(mealUpdates);
    if (timeSelector === "Start time") {
      setStart(time);
    } else if (timeSelector === "End time") {
      setEnd(time);
    }
  };

  return (
    <button className="cook-button" onClick={onClick}>
      Cook!
    </button>
  );
}
