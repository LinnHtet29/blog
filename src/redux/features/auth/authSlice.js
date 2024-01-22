import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  userToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    clearAuth: () => initialState,
  },
});

export const { setUserInfo, setUserToken, clearAuth } = authSlice.actions;

export default authSlice.reducer;
