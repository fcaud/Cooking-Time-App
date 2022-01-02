import { createSlice } from "@reduxjs/toolkit";

export const startEndTimeSlice = createSlice({
  name: "startEndTime",
  initialState: [{ startTime: "-", endTime: "-" }],
  reducers: {
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
  },
});

export const { setStartTime, setEndTime } = startEndTimeSlice.actions;
export default startEndTimeSlice.reducer;
