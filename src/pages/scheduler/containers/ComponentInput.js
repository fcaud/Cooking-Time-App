import React from "react";
import "./ComponentInput.css";
import { useSelector } from "react-redux";
import ItemSearch from "../components/ItemSearch";
import ListItem from "../components/ListItem";

export default function ComponentInput() {
  const mealComponents = useSelector((state) => state.mealComponents);

  return (
    <div className="ComponentInput">
      <ItemSearch />
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
        {mealComponents.map((mealComponent) => (
          <ListItem
            id={mealComponent.id}
            title={mealComponent.title}
            prep={mealComponent.prepTime}
            cook={mealComponent.cookTime}
            post={mealComponent.postCookTime}
          />
        ))}
      </div>
      <button className="save-recipe-button">Save Recipe</button>
    </div>
  );
}
