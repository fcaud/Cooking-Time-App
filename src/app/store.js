import { configureStore } from "@reduxjs/toolkit";
import mealComponentReducer from "../pages/scheduler/store/mealComponentSlice";
import startEndTimeReducer from "../pages/scheduler/store/startEndTimeSlice";

export const store = configureStore({
  reducer: {
    mealComponents: mealComponentReducer,
    startEndTime: startEndTimeReducer,
  },
});
