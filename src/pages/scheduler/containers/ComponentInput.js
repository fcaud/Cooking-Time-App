import React from "react";
import "./ComponentInput.css";
import { useSelector } from "react-redux";
import TimeInput from "../components/TimeInput";
import ItemSearch from "../components/ItemSearch";
import ListItem from "../components/ListItem";
import { useDispatch } from "react-redux";
import {
  addMealComponent,
  deleteMealComponent,
} from "../store/mealComponentSlice";

export default function ComponentInput() {
  const dispatch = useDispatch();
  const mealComponents = useSelector((state) => state.mealComponents);
  const onAddMealComponent = (value) => {
    dispatch(
      addMealComponent({
        title: value,
      })
    );
  };
  const onDeleteMealComponent = (id) => {
    dispatch(deleteMealComponent(id));
  };
  return (
    <div className="ComponentInput">
      <TimeInput />
      <ItemSearch onAddMealComponent={onAddMealComponent} />
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
            key={mealComponent.id}
            id={mealComponent.id}
            title={mealComponent.title}
            prep={mealComponent.prepTime}
            cook={mealComponent.cookTime}
            post={mealComponent.postCookTime}
            onDeleteMealComponent={onDeleteMealComponent}
          />
        ))}
      </div>
      <button className="cook-button">Cook!</button>
      <button className="save-recipe-button">Save Recipe</button>
    </div>
  );
}
