import React, { useState } from "react";
import "./ComponentInput.css";
import { useSelector, useDispatch } from "react-redux";
import TimeInput from "../components/TimeInput";
import ItemSearch from "../components/ItemSearch";
import ListItem from "../components/ListItem";
import CookButton from "../components/CookButton";
import { actions as mealComponentActions } from "../store/mealComponentSlice";
import { actions as startEndTimeActions } from "../store/startEndTimeSlice";

export default function ComponentInput() {
  const dispatch = useDispatch();
  const [time, setTime] = useState("-");
  const [startOrEnd, setStartOrEnd] = useState("");
  const mealComponentsStoreValue = useSelector((state) => state.mealComponents);
  const [mealComponents, setMealComponents] = useState(
    mealComponentsStoreValue
  );

  const onAddMealComponent = (value) => {
    dispatch(
      mealComponentActions.addMealComponent({
        title: value,
      })
    );
  };
  const onDeleteMealComponent = (id) => {
    dispatch(mealComponentActions.deleteMealComponent(id));
  };
  const setStart = (startTime) => {
    dispatch(startEndTimeActions.setStartTime(startTime));
  };
  const setEnd = (endTime) => {
    dispatch(startEndTimeActions.setEndTime(endTime));
  };
  const setPrep = (prepTime) => {
    dispatch(mealComponentActions.setPrepTime(prepTime));
  };
  const setCook = (cookTime) => {
    dispatch(mealComponentActions.setCookTime(cookTime));
  };
  const setPostCook = (postCookTime) => {
    dispatch(mealComponentActions.setPostCook(postCookTime));
  };

  return (
    <div className="ComponentInput">
      <TimeInput
        timeSelector={(startOrEndSelection) =>
          setStartOrEnd(startOrEndSelection)
        }
        time={(timeValue) => setTime(timeValue)}
      />
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
        {console.log("mealComponents", mealComponents)}
        {mealComponents.map((mealComponent) => (
          <ListItem
            key={mealComponent.id}
            id={mealComponent.id}
            title={mealComponent.title}
            prep={mealComponent.prepTime}
            cook={mealComponent.cookTime}
            post={mealComponent.postCookTime}
            onDeleteMealComponent={onDeleteMealComponent}
            updatedPrep={(updatedTime) => {
              const updatedObject = mealComponents.map((item) => {
                if (item.id === mealComponent.id) {
                  return { ...item, prepTime: updatedTime };
                } else {
                  return item;
                }
              });
              setMealComponents(updatedObject);
            }}
            updatedCook={(updatedTime) => {
              const updatedObject = mealComponents.map((item) => {
                if (item.id === mealComponent.id) {
                  return { ...item, cookTime: updatedTime };
                } else {
                  return item;
                }
              });
              setMealComponents(updatedObject);
            }}
            updatedPostCook={(updatedTime) => {
              const updatedObject = mealComponents.map((item) => {
                if (item.id === mealComponent.id) {
                  return { ...item, postCookTime: updatedTime };
                } else {
                  return item;
                }
              });
              setMealComponents(updatedObject);
            }}
          />
        ))}
      </div>
      <CookButton
        timeSelector={startOrEnd}
        time={time}
        setStart={setStart}
        setEnd={setEnd}
        setPrep={setPrep}
        setCook={setCook}
        setPostCook={setPostCook}
      />
      <button className="save-recipe-button">Save Recipe</button>
    </div>
  );
}
