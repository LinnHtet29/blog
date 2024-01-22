import { configureStore } from "@reduxjs/toolkit";
import formsMode from "./features/system/formsModeSlice";
import auth from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth,
    formsMode,
  },
});
