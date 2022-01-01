import { configureStore } from "@reduxjs/toolkit";
import mealComponentReducer from "../pages/scheduler/store/mealComponentSlice";

export const store = configureStore({
  reducer: {
    mealComponents: mealComponentReducer,
  },
});
