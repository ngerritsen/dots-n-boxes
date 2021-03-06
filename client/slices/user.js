import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    name: "",
  },
  reducers: {
    register: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    updateName: (state, action) => {
      state.name = action.payload.name;
    },
    submitName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { register, updateName, submitName } = userSlice.actions;
export default userSlice.reducer;
