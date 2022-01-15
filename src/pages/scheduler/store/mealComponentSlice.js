import { createSlice } from "@reduxjs/toolkit";

const baseData = {
  prepTime: "00:00",
  cookTime: "00:00",
  postCookTime: "00:00",
  totalTime: "00:00",
  prepStartTime: "00:00",
  cookStartTime: "00:00",
  postCookStartTime: "00:00",
};

export const mealComponentSlice = createSlice({
  name: "mealComponents",
  initialState: [
    {
      ...baseData,
      id: 1,
      title: "chicken",
    },
    {
      ...baseData,
      id: 2,
      title: "roast potatoes",
    },
    {
      ...baseData,
      id: 3,
      title: "parsnips",
    },
  ],

  reducers: {
    addMealComponent: (state, action) => {
      const mealComponent = {
        ...baseData,
        id: new Date(),
        title: action.payload.title,
      };
      state.push(mealComponent);
    },
    deleteMealComponent: (state, action) => {
      return state.filter(
        (mealComponent) => mealComponent.id !== action.payload
      );
    },
    setPrepTime: (state, action) => {
      return { ...state, prepTime: action.payload };
    },
    setCookTime: (state, action) => {
      return { ...state, cookTime: action.payload };
    },
    setPostCookTime: (state, action) => {
      return { ...state, postCookTime: action.payload };
    },
  },
});

export const { actions } = mealComponentSlice;
export default mealComponentSlice.reducer;
