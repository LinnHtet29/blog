import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInOrUp: "signin",
};

const formModeSlice = createSlice({
  name: "formsMode",
  initialState,
  reducers: {
    switchSignInOrUp: (state, action) => {
      state.signInOrUp = action.payload;
    },
  },
});

export const { switchSignInOrUp } = formModeSlice.actions;
export default formModeSlice.reducer;
