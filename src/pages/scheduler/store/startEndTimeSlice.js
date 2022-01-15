import { createSlice } from "@reduxjs/toolkit";

export const startEndTimeSlice = createSlice({
  name: "startEndTime",
  initialState: { startTime: "-", endTime: "-" },
  reducers: {
    setStartTime: (state, action) => {
      return { ...state, startTime: action.payload };
    },
    setEndTime: (state, action) => {
      return { ...state, endTime: action.payload };
    },
  },
});

export const { actions } = startEndTimeSlice;
export default startEndTimeSlice.reducer;
