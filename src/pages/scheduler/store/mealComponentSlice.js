import { createSlice } from "@reduxjs/toolkit";

export const mealComponentSlice = createSlice({
  name: "mealComponents",
  initialState: [
    {
      id: 1,
      title: "chicken",
      prepTime: "00:00",
      cookTime: "00:00",
      postCookTime: "00:00",
    },
    {
      id: 2,
      title: "roast potatoes",
      prepTime: "00:00",
      cookTime: "00:00",
      postCookTime: "00:00",
    },
    {
      id: 3,
      title: "parsnips",
      prepTime: "00:00",
      cookTime: "00:00",
      postCookTime: "00:00",
    },
  ],

  reducers: {
    addMealComponent: (state, action) => {
      const mealComponent = {
        id: new Date(),
        title: action.payload.title,
        prepTime: "00:00",
        cookTime: "00:00",
        postCookTime: "00:00",
      };
      state.push(mealComponent);
    },
    deleteMealComponent: (state, action) => {
      return state.filter(
        (mealComponent) => mealComponent.id !== action.payload
      );
    },
  },
});

export const { addMealComponent, deleteMealComponent } =
  mealComponentSlice.actions;
export default mealComponentSlice.reducer;
