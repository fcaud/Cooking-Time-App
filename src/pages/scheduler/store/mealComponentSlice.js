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
    updatePrepCookPostTimes: (state, action) => {
      // return action.payload.filter((item) => {
      //   const doesExistInState = state.some(
      //     (stateItem) => stateItem.id === item.id
      //   );
      //   return doesExistInState;
      // });

      return state.map((item) => {
        const newValue = action.payload.find(
          (payloadItem) => payloadItem.id === item.id
        );
        if (newValue) {
          return {
            ...item,
            prepTime: newValue.prepTime,
            cookTime: newValue.cookTime,
            postCookTime: newValue.postCookTime,
          };
        } else {
          return item;
        }
      });
      // return state.map((item) => {
      //   console.log("payload", action);
      //   console.log("item", item.id);
      //   return {
      //     ...item,
      //     prepTime: action.payload[1].prepTime,
      //     cookTime: action.payload[1].cookTime,
      //     postCookTime: action.payload[1].postCookTime,
      //   };
      // });
    },
  },
});

export const { actions } = mealComponentSlice;
export default mealComponentSlice.reducer;
