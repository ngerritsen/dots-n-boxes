import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    type: "",
  },
  reducers: {
    notify: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clear: (state) => {
      state.message = "";
    },
  },
});

export const { notify, clear } = notificationSlice.actions;
export default notificationSlice.reducer;
